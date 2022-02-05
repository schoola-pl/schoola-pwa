import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledCombobox = styled.div`
  width: 300px;
`;

export const StyledInputWrapper = styled.div`
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  position: relative;
  width: 100%;
  border: white;
  border-radius: 2.5rem;
  padding: 1px;

  input {
    background-color: white;
    padding: 2rem;
    width: 100%;
    height: 100%;
    border: none;
    font-size: 1.5rem;
    border-radius: 2rem;

    &:placeholder {
      font-size: 1rem;
    }

    &:focus {
      outline: none;
    }
  }
`;

export const StyledDropdownToggle = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.2rem;
  font-size: 25px;
  background-color: transparent;
  border: none;
`;

export const StyledSelectedItem = styled.span`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.accentBlue};
  opacity: 0.8;
  padding: 2px 5px 2px 8px;
  color: white;
  border-radius: 1rem;
  margin: 0.4rem;

  button {
    color: currentColor;
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
`;

export const StyledList = styled.ul`
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  list-style: none;
  width: 300px;
  position: absolute;
  background-color: white;
  border-radius: 2rem;
  overflow-y: scroll;
  max-height: 25rem;
  padding: 0;

  li {
    border: 1px solid #f7f8fa;
    font-size: ${({ theme }) => theme.fontSize.l}
    display: block;
    width: 100%;
    padding: 15px 10px;
  }

  li:hover {
    border: none;
    border-radius: 2rem;
    background-color: #f7f8fa !important;
  }
`;

export const StyledHeading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.l};
`;
