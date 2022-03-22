import styled from 'styled-components';

const IconDiv = styled.div<{ icon: string }>`
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 100%;
  background-position: center;
  cursor: pointer;
  position: absolute;
  right: 10%;
  padding: 1.3rem;
  border: none;
`;

export default IconDiv;
