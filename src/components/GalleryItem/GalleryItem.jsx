import PropTypes from 'prop-types';

import { GalleryItemImage } from './GalleryItem.styled';

export const GalleryItem = ({ tags, largeImageURL }) => {
  return <GalleryItemImage src={largeImageURL} alt={tags} />;
};

GalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
