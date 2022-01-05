import Loader from 'components/atoms/Loader/Loader';
import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  --loadingColor: white;
  width: 100%;
  min-height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: var(--loadingColor);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading: React.FC = () => {
  return (
    <Wrapper>
      <Loader />
    </Wrapper>
  );
};

export default Loading;
