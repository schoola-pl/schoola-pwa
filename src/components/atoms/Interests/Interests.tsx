import { InterestSectionWrapper, Interest, InterestHeading, InterestWrapper } from './Interests.styles';

const Interests = () => (
  <InterestSectionWrapper>
    <InterestHeading>Zainteresowania</InterestHeading>
    <InterestWrapper>
      <Interest>Imprezy 🎉</Interest>
      <Interest>Technologia 💻</Interest>
      <Interest>Fizyka ⚛️</Interest>
      <Interest>Gotowanie 🥘</Interest>
      <Interest>Medytacja 🧘‍♂️</Interest>
    </InterestWrapper>
  </InterestSectionWrapper>
);

export default Interests;
