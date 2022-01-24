import { Backdrop, Title, Wrapper } from './Modal.styles';
import React from 'react';
import ReactDOM from 'react-dom';

const Modal: React.FC<{ title?: string }> = ({ children, title }) => {
  return ReactDOM.createPortal(
    <>
      <Backdrop />
      <Wrapper>
        {title && <Title>{title}</Title>}
        {children}
      </Wrapper>
    </>,
    document.body
  );
};

export default Modal;
