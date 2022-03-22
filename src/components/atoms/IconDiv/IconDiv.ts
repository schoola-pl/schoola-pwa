import styled from 'styled-components';

const IconDiv = styled.div<{ icon: string }>`
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 75%;
  background-position: center;
  cursor: pointer;
  height: 4rem;
  width: 4rem;
  border: none;
`;

export default IconDiv;
