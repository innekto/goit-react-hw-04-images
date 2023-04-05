import PropTypes, { shape } from 'prop-types';
import { GalleryItem } from 'components/GalleryItem/GalleryItem';
import { GalleryList, GalleryItems } from './Gallery.styled';

export const Gallery = ({ images, setIndex, toggleModal }) => {
  return (
    <GalleryList>
      {images.map(({ id, ...otherProps }) => {
        return (
          <GalleryItems
            key={id}
            onClick={() => {
              setIndex(id);
              toggleModal();
            }}
          >
            <GalleryItem {...otherProps} />
          </GalleryItems>
        );
      })}
    </GalleryList>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  setIndex: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
