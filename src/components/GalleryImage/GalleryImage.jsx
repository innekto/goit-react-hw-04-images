import PropTypes from 'prop-types';
import { GalleryImage } from './GalleryImage.styled';

export const GalleryItemImage = ({ src, alt }) => {
  return <GalleryImage src={src} alt={alt} />;
};

GalleryItemImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
