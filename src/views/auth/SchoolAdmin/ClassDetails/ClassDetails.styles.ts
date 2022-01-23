import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1rem;
  margin: 1.5rem 3rem 0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Heading = styled.h1`
  font-size: 2.6rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  margin-bottom: 0.5rem;

  span {
    border-radius: 0.5rem;
    margin-left: 0.5rem;
    padding: 0.2rem 0.4rem;
    color: white;
    font-size: 2.2rem;
    background-color: ${({ theme }) => theme.colors.accentBlue};
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: -5rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 3px solid #eceff7;
  align-items: flex-start;
`;

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-right: 15rem;

  &:first-child {
    grid-column: 2;
    padding-left: 3rem;
  }
`;

export const ParagraphsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 7% 17.9% 21% 20% 20% 10%;
  justify-items: center;
  align-content: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
`;

const ManageButton = styled.button`
  margin-right: 2rem;
  background-color: white;
  border-radius: 1rem;
  width: 11.5rem;
  height: 5rem;
  text-align: center;

  transition: 0.1s all ease-in-out;

  &:hover {
    cursor: pointer;
    color: white;
  }
`;

export const AddStudentButton = styled(ManageButton)`
  border: 2px solid ${({ theme }) => theme.colors.accentGreen};
  color: ${({ theme }) => theme.colors.accentGreen};
  &:hover {
    background-color: ${({ theme }) => theme.colors.accentGreen};
  }
`;
export const DeleteClassButton = styled(ManageButton)`
  border: none;
  background-color: ${({ theme }) => theme.colors.accentRed};
  color: white;

  &:hover {
    opacity: 0.9;
  }
`;
