import styled from 'styled-components';
import PsychoSidebar from 'components/organisms/PsychoSidebar/PsychoSidebar';
import PsychoTopBar from 'components/organisms/PsychoTopBar/PsychoTopBar';
import { format } from 'date-fns';
import React from 'react';
import pl from 'date-fns/locale/pl';

const Wrapper = styled.div`
  margin-top: 10rem;
  z-index: -1;
  overflow-y: auto !important;

  @media (min-height: 740px) {
    height: 75vh;
  }

  ::-webkit-scrollbar {
    background-color: transparent;
  }
`;

const PsychoTemplate: React.FC = ({ children }) => {
  const date = format(new Date(), 'd eeee MMMM yyyy', { locale: pl });

  return (
    <>
      <PsychoTopBar number={parseInt(date.split(' ')[0])} day={date.split(' ')[1]} month={date.split(' ')[2]} year={parseInt(date.split(' ')[3])} />
      <Wrapper>{children}</Wrapper>
      <PsychoSidebar />
    </>
  );
};

export default PsychoTemplate;
