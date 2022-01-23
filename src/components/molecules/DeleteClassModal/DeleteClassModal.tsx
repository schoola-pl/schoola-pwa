import { Wrapper, DeleteClassButton, CancelButton } from './DeleteClassModal.styles';
interface Props {
  isOpen: boolean;
}

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
