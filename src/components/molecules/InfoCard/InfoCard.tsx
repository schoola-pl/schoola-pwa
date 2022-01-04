import { Grid, Heading, Icon, Number, TitleWrapper, Wrapper } from './InfoCard.styles';

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
      <Icon icon={icon} tabIndex={-1} />
      <Number>{number}</Number>
    </Grid>
  </Wrapper>
);

export default InfoCard;
