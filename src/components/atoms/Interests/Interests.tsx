import { InterestSectionWrapper, Interest, InterestHeading, InterestWrapper } from './Interests.styles';

interface Props {
  interests: string[];
}

const Interests: React.FC<Props> = ({ interests }) => (
  <InterestSectionWrapper>
    <InterestHeading>Zainteresowania</InterestHeading>
    <InterestWrapper>
      {interests.map((interest) => (
        <Interest>{interest}</Interest>
      ))}
    </InterestWrapper>
  </InterestSectionWrapper>
);

export default Interests;
