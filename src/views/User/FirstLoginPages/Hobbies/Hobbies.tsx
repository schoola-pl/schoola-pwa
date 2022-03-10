import styled from 'styled-components';
import Combobox from 'components/molecules/Combobox/Combobox';
import React, { useEffect } from 'react';

const Wrapper = styled.div`
  overflow-y: hidden;
  padding-bottom: 25rem;
`;

interface props {
  setReadyState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hobbies: React.FC<props> = ({ setReadyState }) => {
  useEffect(() => {
    setReadyState(false);
  }, []);

  return (
    <Wrapper>
      <Combobox setReadyState={setReadyState} />
    </Wrapper>
  );
};

export default Hobbies;
