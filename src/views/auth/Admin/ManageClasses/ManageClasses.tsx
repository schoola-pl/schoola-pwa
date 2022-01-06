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
  transition: all 0.1s linear;

  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme.colors.accentGreen};
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
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
  overflow-x: hidden;
  overflow-y: scroll;
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

  &:hover {
    color: ${({ theme }) => theme.colors.lightGreen};
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

const ClassesWrapper = styled.div`
  padding-left: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const ClassDetails = styled.details`
  height: 5.5rem;
  width: 35rem;
  background-color: white;
  display: flex;
  max-width: 35rem;
  border-radius: 1rem;
  border-top: 5px solid ${({ theme }) => theme.colors.accentGreen};
  text-decoration: none;
  position: relative;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);

  summary {
    list-style: none;
    padding: 1rem;
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }

  summary::after {
    content: '>';
    position: absolute;
    // left: -10px;
    right: 20px;
    transition: transform 0.1s ease-in-out;
    transform: rotate(90deg);
  }

  &[open] {
    summary::after {
      transform: rotate(-90deg);
    }
  }
`;

const ClassWrapper = styled.div`
  background-color: white;
  margin-top: 3rem;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);

  p {
    font-size: ${({ theme }) => theme.fontSize.s};

    strong {
      color: ${({ theme }) => theme.colors.accentBlue};
    }
  }
`;

const ClassCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  height: 5rem;
  width: 5rem;
  background-color: #eceff7;
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
        <ClassesWrapper>
          <div>
            <ClassDetails>
              <summary>Klasy Pierwsze</summary>
              <ClassWrapper>
                <ClassCircle>
                  <h1>1A</h1>
                </ClassCircle>
                <p>liczba uczniów: 30</p>
              </ClassWrapper>
              <ClassWrapper>
                <h1>1B</h1>
                <p>liczba uczniów: 30</p>
              </ClassWrapper>
              <ClassWrapper>
                <h1>1C</h1>
                <p>liczba uczniów: 30</p>
              </ClassWrapper>
            </ClassDetails>
          </div>
          <div>
            <ClassDetails>
              <summary>Klasy drugie</summary>
              <ClassWrapper>
                <h1>2A</h1>
                <p>liczba uczniów: 30</p>
              </ClassWrapper>
              <ClassWrapper>
                <h1>2B</h1>
                <p>liczba uczniów: 30</p>
              </ClassWrapper>
              <ClassWrapper>
                <h1>2C</h1>
                <p>liczba uczniów: 30</p>
              </ClassWrapper>
            </ClassDetails>
          </div>
          <div>
            <ClassDetails>
              <summary>Klasy trzecie</summary>
              <ClassWrapper>
                <h1>3A</h1>
                <p>liczba uczniów: 30</p>
              </ClassWrapper>
              <ClassWrapper>
                <h1>3B</h1>
                <p>liczba uczniów: 30</p>
              </ClassWrapper>
              <ClassWrapper>
                <h1>3C</h1>
                <p>liczba uczniów: 30</p>
              </ClassWrapper>
            </ClassDetails>
          </div>
        </ClassesWrapper>
      </ContentWrapper>
    </Wrapper>
  </AdminTemplate>
);

export default ManageClasses;
