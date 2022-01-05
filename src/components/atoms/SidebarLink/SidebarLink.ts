import styled from 'styled-components';
import { Link } from 'react-router-dom';

type Props = {
  icon: string;
};

const SidebarLink = styled.button<Props>`
  height: 5rem;
  width: 5rem;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: transparent;
  border-radius: 1.5rem;
  border: none;
  display: block;
  background-size: 75%;
  background-position: center;
  cursor: pointer;
  margin: 1rem;
`;

export default SidebarLink;
