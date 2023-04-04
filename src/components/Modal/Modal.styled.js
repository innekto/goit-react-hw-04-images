import styled from '@emotion/styled';

import {
  HiArrowLeft as BackIcon,
  HiArrowRight as ForwardIcon,
} from 'react-icons/hi';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalCount = styled.span`
  position: absolute;
  top: 5px;
  right: 5px;
  color: #fff;
`;

export const ModalWindow = styled.div`
  display: flex;
  align-items: center;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const ModalSwitch = styled.button`
  height: 20px;

  background-color: transparent;
  cursor: pointer;
  border: none;
  color: white;
`;

export const HiArrowLeft = styled(BackIcon)`
  fill: currentColor;
`;
export const HiArrowRight = styled(ForwardIcon)`
  fill: currentColor;
`;
