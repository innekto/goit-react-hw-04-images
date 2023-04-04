import PropTypes from 'prop-types';
import { GalleryItemImage } from 'components/GalleryImage/GalleryImage';

import { ImageGallery, ImageGalleryItem } from './Gallery.styled';

export const Gallery = ({ images, openModal }) => {
  return (
    <ImageGallery>
      {images.map(image => {
        return (
          <ImageGalleryItem key={image.id} onClick={() => openModal(image.id)}>
            <GalleryItemImage src={image.webformatURL} alt={image.tags} />
          </ImageGalleryItem>
        );
      })}
    </ImageGallery>
  );
};

Gallery.propTypes = {
  openModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired
  ).isRequired,
};
