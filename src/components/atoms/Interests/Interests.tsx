import { Interest, InterestHeading, InterestSectionWrapper, InterestWrapper } from './Interests.styles';
import React from 'react';

interface Props {
  interests: { id: number; name: string } | { id: number; name: string }[];
}

const Interests: React.FC<Props> = ({ interests }) => (
  <InterestSectionWrapper>
    <InterestHeading>Zainteresowania</InterestHeading>
    <InterestWrapper data-testid="profile-interests">
      {Array.isArray(interests) ? (
        interests.map((interest) => <Interest key={interest.id}>{interest.name}</Interest>)
      ) : (
        <Interest>{interests.name}</Interest>
      )}
    </InterestWrapper>
  </InterestSectionWrapper>
);

export default Interests;
