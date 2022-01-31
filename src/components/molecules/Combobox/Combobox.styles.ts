import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-top: 18rem;
  padding-bottom: 7rem;
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
  backgroud-color: white;
  border: white;
  overflow: scroll;
  border-radius: 2.5rem;
  padding: 1px;

  input {
    background-color: white;
    width: 100%;
    height: 100%;
    border: none;
    font-size: 2.4rem;
    border-radius: 2rem;

    &:focus {
      outline: none;
    }
  }
`;

export const StyledDropdownToggle = styled.button`
  position: absolute;
  right: 5px;
  top: 0;
  font-size: 25px;
  background-color: transparent;
  border: none;
`;

export const StyledSelectedItem = styled.span`
  display: inline-block;
  background-color: white;
  padding: 2px 4px;
  border-radius: 2rem;
  margin: 2px;

  button {
    border: none;
    background-color: white;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  background-color: white;
  border-radius: 2rem;
  overflow: scroll;
  padding: 0px;
  li {
    font-size: ${({ theme }) => theme.fontSize.l}
    display: block;
    width: 100%;
    padding: 15px 10px;
  }
  li:hover {
    border: none;
    border-radius: 2rem;
    background-color: ${({ theme }) => theme.colors.selectedItemGrey} !important;
  }
`;

export const StyledHeading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
