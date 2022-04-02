import styled from 'styled-components';

export const StyledPicture = styled.div<{ random?: number; onClick?: any }>`
  height: 5rem;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10rem;
  background: linear-gradient(
    ${({ random }) => (random ? `${((Math.ceil(Math.random() * 360) * random) / random) * 2}deg` : `${Math.ceil(Math.random() * 360)}deg`)},
    rgba(184, 208, 252, 1) 0%,
    rgba(91, 117, 166, 1) 0%,
    rgba(85, 171, 103, 1) 100%
  );
`;

export const Wrapper = styled.div<{ isSpotted?: boolean }>`
  width: 87%;
  height: 87%;
  border-radius: inherit;
  border: none;
  overflow: hidden;

  &:hover {
    cursor: ${({ isSpotted }) => (!isSpotted ? 'pointer' : 'default')};
  }

  img {
    min-width: 100%;
    background-color: white;
    height: 100%;
    object-fit: cover;
    padding: ${({ isSpotted }) => (isSpotted ? '0.5rem' : 0)};
  }
`;
