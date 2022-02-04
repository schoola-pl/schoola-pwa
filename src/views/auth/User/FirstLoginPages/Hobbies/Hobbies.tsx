import styled from 'styled-components';
import Combobox from 'components/molecules/Combobox/Combobox';

const Wrapper = styled.div`
  overflow-y: hidden;
  padding-bottom: 25rem;
`;

const Hobbies = () => {
  return (
    <Wrapper>
      <Combobox />
    </Wrapper>
  );
};

export default Hobbies;
