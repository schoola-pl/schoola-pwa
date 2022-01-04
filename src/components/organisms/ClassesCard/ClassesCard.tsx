import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 50rem;

  height: 67.2rem;
  background-color: white;
  grid-column: 2 / 2;
  border-radius: 2rem;
  margin-left: 4rem;
  display: flex;
  flex-direction: column;
`;

const ClassLink = styled.div`
  min-height: 12rem;
  width: 100%;
  background-color: white;
  border-radius: 2rem;
  margin-top: 1rem;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.12);

  &:hover {
    border: 3px solid ${({ theme }) => theme.colors.accentGreen};
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.29);
    cursor: pointer;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  border-bottom: 5px solid ${({ theme }) => theme.colors.accentGreen};
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-top: 2rem;
  margin-left: 2rem;
`;

const ClassesWrapper = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClassesCard = () => (
  <Wrapper>
    <TitleWrapper>
      <Heading>Klasy</Heading>
    </TitleWrapper>
    <ClassesWrapper>
      <ClassLink />
      <ClassLink />
      <ClassLink />
      <ClassLink />
      <ClassLink />
      <ClassLink />
      <ClassLink />
      <ClassLink />
    </ClassesWrapper>
  </Wrapper>
);

export default ClassesCard;
