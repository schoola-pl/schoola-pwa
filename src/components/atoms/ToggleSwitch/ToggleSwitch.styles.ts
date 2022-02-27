import styled from 'styled-components';

export const InputWrapper = styled.label`
  position: relative;
`;

export const Input = styled.input`
  position: absolute;
  left: -9999px;
  top: -9999px;

  &:checked + span {
    background-color: ${({ theme }) => theme.colors.accentGreen};

    &::before {
      left: calc(100% - 0.2rem);
      transform: translateX(-100%);
    }
  }
`;

export const Slider = styled.span`
  display: flex;
  cursor: pointer;
  width: 5rem;
  height: 2.5rem;
  border-radius: 10rem;
  background-color: #bfbfbf;
  position: relative;
  transition: background-color 0.2s;

  &::before {
    content: '';
    position: absolute;
    top: 0.23rem;
    left: 0.2rem;
    width: 2.1rem;
    height: 2.1rem;
    border-radius: 4.5rem;
    transition: 0.2s;
    background: #fff;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  }

  &:active::before {
    width: 2.8rem;
  }
`;
