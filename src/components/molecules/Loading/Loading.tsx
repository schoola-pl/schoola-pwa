import Loader from 'components/atoms/Loader/Loader';
import React from 'react';
import { Wrapper } from './Loading.styles';

interface props {
  bgColor?: string;
}

const Loading: React.FC<props> = ({ bgColor }) => {
  return (
    <Wrapper id="loader" style={{ backgroundColor: bgColor || 'white' }}>
      <Loader bgColor={bgColor} />
    </Wrapper>
  );
};

export default Loading;
