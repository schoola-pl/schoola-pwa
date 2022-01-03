import styled from 'styled-components';
import SidebarLink from 'components/molecules/SidebarLink/SidebarLink';
import ClassIcon from 'assets/icons/ClassIcon.png';

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
  overflow: hidden;
`;

const TitleWrapper = styled.div`
  height: 21%;
  display: flex;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.accentGreen};
  border-bottom: 3px solid ${({ theme }) => theme.colors.accentGreen};
`;

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-top: 2rem;
  margin-left: 2rem;
`;

const Grid = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  grid-gap: 0rem;
`;

const Icon = styled(SidebarLink)`
  border-radius: 0;
  height: 13.5rem;
  width: 13.5rem;
  background-size: 100%;
`;

const Number = styled.h1`
  margin-right: 10rem;
  font-size: 7rem;
  text-align: center;
  transform: translateY(-15%);
`;

const InfoCard: React.FC<Props> = ({ name, icon, number }) => (
  <Wrapper>
    <TitleWrapper>
      <Heading>Łączna liczba użytkowników</Heading>
    </TitleWrapper>
    <Grid>
      <Icon icon={ClassIcon} />
      <Number>320</Number>
    </Grid>
  </Wrapper>
);

export default InfoCard;
