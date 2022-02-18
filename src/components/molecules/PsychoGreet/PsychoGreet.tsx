import styled from 'styled-components';

const GreetWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fontWeight.regular};

    strong {
      font-weight: ${({ theme }) => theme.fontWeight.medium};
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MeetParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  transform: translateY(-100%);

  strong {
    background-color: ${({ theme }) => theme.colors.accentBlue};
    border-radius: 5px;
    padding: 0.5px 4px 0.5px 4px;
    color: white;
  }
`;

const PsychoGreet = () => (
  <GreetWrapper>
    <InnerWrapper>
      <h1>
        Dzień dobry <strong>Maciej!</strong>
      </h1>
      <MeetParagraph>
        Masz dzisiaj <strong>5</strong> spotkań
      </MeetParagraph>
    </InnerWrapper>
  </GreetWrapper>
);

export default PsychoGreet;
