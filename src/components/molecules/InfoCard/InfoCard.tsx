import { Wrapper, TitleWrapper, Heading, Grid, Icon, Number } from './InfoCard.styles';

interface Props {
  name: string;
  number: number;
  icon: string;
}

const InfoCard: React.FC<Props> = ({ name, icon, number }) => (
  <Wrapper>
    <TitleWrapper>
      <Heading>{name}</Heading>
    </TitleWrapper>
    <Grid>
      <Icon icon={icon} />
      <Number>{number}</Number>
    </Grid>
  </Wrapper>
);

export default InfoCard;
