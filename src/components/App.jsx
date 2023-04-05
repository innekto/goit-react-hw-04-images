import { useRef, useEffect, useState } from 'react';
import {
  SearchBar,
  Gallery,
  Header,
  Button,
  Loader,
  Modal,
  Message,
} from './index';

import { STATE, fetchImage, normalizedData } from 'services';

import { Wrapper } from './Wrapper.styled';

export const App = () => {
  //оголошуємо масив який буде заповнюватись об'єктами зображень
  const [images, setImages] = useState([]);
  //параметр запиту для пошуку зображень
  const [query, setQuery] = useState('');
  //поточна сторінка результатів пошуку
  const [page, setPage] = useState(1);
  // повідомлення про помилку
  const [error, setError] = useState(null);
  // константа, в залежності від її значення будуть відображатись різні елементи
  const [status, setStatus] = useState(STATE.INITIAL_STATE);
  // це логічне значення, яке визначає, чи потрібно показувати модальне вікно зображення
  const [showModal, setShowModal] = useState(false);
  // поточний індекс зображення, що відображається в модальному вікні
  const [currentIndex, setCurrentIndex] = useState(null);

  const currentImage = images[currentIndex];

  //змінюємо значення showModal на протилежне до попереднього.
  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  //встановлення нового значення запиту
  const getQuery = value => {
    // встановлюємо стан query на значення value
    setQuery(value);
    // очищуємо стан images, встановлюючи його в пустий масив
    setImages([]);
    // встановлюємо стан page на 1
    setPage(1);
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  const changeCurrentIndex = value => {
    // новий індекс
    const newIndex = currentIndex + value;
    // останній індекс в масиві зображень.
    const lastImageIndex = images.length - 1;
    // Якщо новий індекс менший за 0, то зображення з цим індексом не існує,
    //  тому поточний індекс встановлюється на останнє зображення в масиві.
    if (newIndex < 0) {
      setCurrentIndex(lastImageIndex);
      //Якщо новий індекс більший за останній індекс, встановлюємо поточний індекс на перше зображення в масиві
    } else if (newIndex > lastImageIndex) {
      setCurrentIndex(0);
      // якщо новий індекс знаходиться в межах діапазону між 0 і останнім індексом
      //встановлюємо поточний індекс на нове значення
    } else {
      setCurrentIndex(newIndex);
    }
  };

  // відстежувємо, яке зображення було вибране користувачем
  const setIndex = id => {
    // знаходимо індекс зображення за його id
    const index = images.findIndex(image => image.id === id);
    // встановлюємо поточний індекс на знайдений індекс зображення
    setCurrentIndex(index);
  };

  const totalImageHits = useRef(null);

  useEffect(() => {
    const controller = new AbortController();
    const loadImages = async () => {
      setStatus(STATE.LOAD);
      setError(null);
      try {
        const { totalHits, hits } = await fetchImage(query, page, controller);
        totalImageHits.current = totalHits;
        setImages(prev => [...prev, ...normalizedData(hits)]);
        setStatus(STATE.LOADED);
      } catch (error) {
        setError(error);
        setStatus(STATE.ERROR);
      }
    };
    if (query !== '') loadImages();

    return () => {
      controller.abort();
    };
  }, [page, query, setError, setImages, setStatus]);

  return (
    <Wrapper>
      <Header>
        <SearchBar getQuery={getQuery} status={status} />
      </Header>
      <Gallery images={images} setIndex={setIndex} toggleModal={toggleModal} />
      {!!images.length && status === STATE.LOADED && (
        <Button
          loadMore={loadMore}
          disabled={images.length >= totalImageHits.current}
        />
      )}
      {status === STATE.LOAD && <Loader />}
      {showModal && (
        <Modal
          image={currentImage}
          toggleModal={toggleModal}
          changeCurrentIndex={changeCurrentIndex}
          totalImages={images.length}
          currentPosition={currentIndex + 1}
        />
      )}
      {error && <Message>{`${error}. Try to reload your page!`}</Message>}
      {!images.length && status === STATE.LOADED && (
        <Message>
          Nothing found. Try searching with a different parameter!
        </Message>
      )}
    </Wrapper>
  );
};
