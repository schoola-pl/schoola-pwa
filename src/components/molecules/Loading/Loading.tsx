import Loader from 'components/atoms/Loader/Loader';
import React from 'react';
import { Wrapper } from './Loading.styles';

const Loading: React.FC = () => {
  return (
    <Wrapper id="loader">
      <Loader />
    </Wrapper>
  );
};

export default Loading;
