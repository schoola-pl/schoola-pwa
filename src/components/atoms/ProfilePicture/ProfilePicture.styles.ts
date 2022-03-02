import styled from 'styled-components';

type Props = {
  icon?: string;
  isPublic?: boolean;
};

export const Wrapper = styled.div`
  transform: translateY(10%);
  margin: 1rem 1rem 1rem;
  height: 5rem;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10rem;
  background: linear-gradient(90deg, rgba(184, 208, 252, 1) 0%, rgba(91, 117, 166, 1) 0%, rgba(85, 171, 103, 1) 100%);
`;

export const Picture = styled.div<Props>`
  width: 87%;
  height: 87%;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: white;
  border-radius: inherit;
  border: none;
  background-size: ${({ isPublic }) => (isPublic ? 'contain' : '70%')};
  background-position: center;
  z-index: 9999999;
`;
