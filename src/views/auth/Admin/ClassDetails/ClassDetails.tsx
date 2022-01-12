import AdminTemplate from 'components/templates/AdminTemplate/AdminTemplate';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1rem;
  margin: 3rem 3rem 0;
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  border-bottom: 3px solid #eceff7;
  padding-bottom: 1rem;

  span {
    border-radius: 0.5rem;
    margin-left: 1rem;
    padding: 0.25rem 0.4rem;
    color: white;
    font-size: 2.2rem;
    background-color: ${({ theme }) => theme.colors.accentBlue};
  }
`;

const ClassDetails = () => (
  <AdminTemplate>
    <Wrapper>
      <Heading>
        Edytuj <span>1A</span>
      </Heading>
    </Wrapper>
  </AdminTemplate>
);

export default ClassDetails;
