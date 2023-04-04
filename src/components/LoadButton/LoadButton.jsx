import PropTypes from 'prop-types';
import { LoadButton } from './LoadButton.styled';

export const Button = ({ disabled, onHandleClick }) => {
  return (
    <LoadButton type="button" disabled={disabled} onClick={onHandleClick}>
      Load more
    </LoadButton>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onHandleClick: PropTypes.func.isRequired,
};
