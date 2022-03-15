import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow-y: hidden;
  padding-bottom: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  textarea {
    height: 10rem;
    width: 90%;
    border-radius: 2rem;
    padding: 1rem;
    border: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
    resize: none;
    outline: none;
  }
`;

export const StyledInput = styled.input`
  font-size: ${({ theme }) => theme.fontSize.s};
  background: white;
  outline: none;
  border-radius: 2rem;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  margin-bottom: 1rem;
  position: relative;
  width: 90%;
  height: 3.8rem;

  ::file-selector-button {
    color: black;
    padding: 1rem;
    border: none;
    border-radius: 2rem;
  }
`;
