import styled from 'styled-components';
import FirstLoginTemplate from 'components/templates/FirstLoginTemplate/FirstLoginTemplate';
import Combobox from 'components/molecules/Combobox/Combobox';

const Wrapper = styled.div`
  overflow-y: hidden;
  padding-bottom: 25rem;
`;

const Hobbies = () => {
  return (
    <FirstLoginTemplate>
      <Wrapper>
        <Combobox />
      </Wrapper>
    </FirstLoginTemplate>
  );
};

export default Hobbies;
