import AdminTemplate from 'components/templates/AdminTemplate/AdminTemplate';
import styled from 'styled-components';

const Heading = styled.h1`
  margin: 3rem 3rem 0;
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

const Links = styled.div`
  width: 100%;
  margin: 2rem 3rem 3rem 3rem;
  display: flex;
  align-items: center;
  padding-top: 1.5rem;
  border-bottom: 3px solid #eceff7;
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

const mockClasses = [
  { name: '1A', numberOfStudents: 32 },
  { name: '1B', numberOfStudents: 35 },
  { name: '1C', numberOfStudents: 31 },
  { name: '1D', numberOfStudents: 34 },
  { name: '1E', numberOfStudents: 28 },
  { name: '1E', numberOfStudents: 28 },
  { name: '1E', numberOfStudents: 28 },
  { name: '1E', numberOfStudents: 28 }
];

const Wrapper = styled.div`
  padding: 1rem;
  overflow-x: none;
  display: flex;
  flex-direction: column;
`;

const HeadingLink = styled.h1`
  position: relative;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  margin-right: 15rem;
  padding-bottom: 0.75rem;
  transition: all 0.1s linear;
  cursor: pointer;

  //   &:after {
  //     content: '';
  //     top: 0.75rem;
  //     transition: all 0.1s linear;
  //     position: absolute;
  //     padding-top: 0.5rem;
  //     border-bottom: 3px solid #eceff7;
  //   }

  &:hover {
    // &:after {
    //   content: '';
    //   border-bottom: 3px solid ${({ theme }) => theme.colors.accentGreen};
    // }
  }
`;

const AmountWrapper = styled.div`
  padding: 0.2rem 3rem 3rem 3rem;
  display: flex;
  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  span {
    border-radius: 1rem;
    margin-left: 0.5rem;
    padding: 0.5rem 0.75rem;
    color: white;
    background-color: ${({ theme }) => theme.colors.accentBlue};
  }
`;

const ManageClasses: React.FC = () => (
  <AdminTemplate>
    <Wrapper>
      <Heading>Zarządzaj użytkownikami</Heading>
      <ContentWrapper>
        <Links>
          <HeadingLink>klasy</HeadingLink>
          <HeadingLink>role</HeadingLink>
          <HeadingLink>wszystkie konta</HeadingLink>
        </Links>
        <AmountWrapper>
          <h1>
            Łączna ilosć klas: <span>16</span>
          </h1>
        </AmountWrapper>
      </ContentWrapper>
    </Wrapper>
  </AdminTemplate>
);

export default ManageClasses;
