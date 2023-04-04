import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

import {
  HiArrowLeft,
  HiArrowRight,
  ModalCount,
  ModalSwitch,
  ModalWindow,
  Overlay,
} from './Modal.styled';

export class Modal extends Component {
  static propTypes = {
    onKeyClick: PropTypes.func.isRequired,
    onMouseClick: PropTypes.func.isRequired,
    totalImages: PropTypes.number.isRequired,
    currentPosition: PropTypes.number.isRequired,
    changeIndex: PropTypes.func.isRequired,
    image: PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
  };

  componentWillUnmount() {
    const { onKeyClick } = this.props;
    document.removeEventListener('keydown', onKeyClick);
  }

  render() {
    const {
      onMouseClick,
      changeIndex,
      totalImages,
      currentPosition,
      image: { largeImageURL, tags },
    } = this.props;

    return (
      <Overlay onClick={onMouseClick}>
        <ModalWindow>
          <ModalCount>{`${currentPosition}/${totalImages}`}</ModalCount>
          <ModalSwitch type="button" onClick={() => changeIndex(-1)}>
            <HiArrowLeft />
          </ModalSwitch>
          <img src={largeImageURL} alt={tags} width="1280" />
          <ModalSwitch type="button" onClick={() => changeIndex(1)}>
            <HiArrowRight />
          </ModalSwitch>
        </ModalWindow>
      </Overlay>
    );
  }
}
