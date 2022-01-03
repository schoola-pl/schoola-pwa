import styled from 'styled-components';

interface Props {
  name?: string;
  number?: number;
  icon?: string;
}

const Wrapper = styled.div`
  height: 32.5rem;
  width: 60rem;
  border-radius: 2rem;
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
`;

const InfoCard: React.FC<Props> = ({ name, icon, number }) => <Wrapper />;

export default InfoCard;
