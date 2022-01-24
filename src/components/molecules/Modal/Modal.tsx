import { Backdrop, Wrapper } from './Modal.styles';
import React from 'react';
import ReactDOM from 'react-dom';

const Modal: React.FC<{ title?: string }> = ({ children, title }) => {
  return ReactDOM.createPortal(
    <>
      <Backdrop />
      <Wrapper>
        {title && <h1>{title}</h1>}
        {children}
      </Wrapper>
    </>,
    document.body
  );
};

export default Modal;
