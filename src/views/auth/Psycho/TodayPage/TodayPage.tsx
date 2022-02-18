import styled from 'styled-components';
import PsychoTemplate from 'components/templates/PsychoTemplate/PsychoTemplate';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const GreetWrapper = styled.div`
  display: flex;
  align-items: center;
  transform: translateY(-70%);

  // h1 {
  //   font-size: ${({ theme }) => theme.fontSize.m};
  //   font-weight: ${({ theme }) => theme.fontWeight.regular};

  //   strong {
  //     color: ${({ theme }) => theme.colors.accentBlue};
  //     font-weight: ${({ theme }) => theme.fontWeight.medium};
  //   }
  // }

  // p {
  //   padding-left: 3.5rem;
  //   font-size: ${({ theme }) => theme.fontSize.s};
  // }
`;

const TodayPage = () => (
  <PsychoTemplate>
    <Wrapper>
      <GreetWrapper>
        {/* <h1>
          Dzień dobry <strong>Maciej!</strong>
        </h1>
        <p>13.04.2021</p> */}
      </GreetWrapper>
    </Wrapper>
  </PsychoTemplate>
);

export default TodayPage;
