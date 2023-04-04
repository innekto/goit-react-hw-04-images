import PropTypes from 'prop-types';
import { NotFoundMessage } from './NotFoundMessage.styled';

export const Message = ({ children }) => (
  <NotFoundMessage>{children}</NotFoundMessage>
);

Message.propTypes = { children: PropTypes.node.isRequired };
