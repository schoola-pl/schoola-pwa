import styled from 'styled-components';

interface Props {
  isOpen: boolean;
}

export const Wrapper = styled.div<Props>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  z-index: 9999999999999999;
  height: 15rem;
  width: 35rem;
  position: absolute;
  background-color: white;
  border-radius: 2rem;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transform: translateX(35rem);

  div {
    display: flex;
  }
`;

const DeleteClassButton = styled.button`
  margin-left: 2rem;
  background-color: white;
  border-radius: 1rem;
  width: 11.5rem;
  height: 4rem;
  text-align: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.accentRed};
  color: white;
  transition: 0.1s all ease-in-out;

  &:hover {
    cursor: pointer;
    color: white;
    opacity: 0.9;
  }
`;

const CancelButton = styled.button`
  background-color: white;
  border-radius: 1rem;
  width: 11.5rem;
  height: 4rem;
  text-align: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.accentGreen};
  color: white;
  transition: 0.1s all ease-in-out;

  &:hover {
    cursor: pointer;
    color: white;
    opacity: 0.9;
  }
`;

const DeleteClassModal: React.FC<Props> = ({ isOpen }) => (
  <Wrapper isOpen={isOpen}>
    <h1>Czy chcesz usunąć klasę 1E?</h1>
    <div>
      <CancelButton>Anuluj</CancelButton>
      <DeleteClassButton>Usuń klasę 1E</DeleteClassButton>
    </div>
  </Wrapper>
);

export default DeleteClassModal;
