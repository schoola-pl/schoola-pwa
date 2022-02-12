import styled from 'styled-components';
import UserTemplate from 'components/templates/UserTemplate/UserTemplate';
import Person from 'components/atoms/Person/Person';
import Interests from 'components/atoms/Interests/Interests';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  heigth: 100vh;
  justify-content: flex-start;
  align-items: center;
`;

export const Grid = styled.div`
  transform: translateY(-10%);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  padding: 3rem;
  grid-gap: 2rem;

  & > div:nth-child(3) {
    grid-row: 1/3;
    grid-column: 1/2;
  }
`;

export const RoleWrapper = styled.div`
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 2rem;
  height: 11rem;
  width: 14rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 1.5rem;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    &::after {
      content: '👨‍🎓';
      padding-left: 1rem;
    }
  }

  p {
    transform: translateY(15%);
    font-size: ${({ theme }) => theme.fontSize.s};
    color: grey;
  }
`;

export const ClassWrapper = styled.div`
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 2rem;
  height: 11rem;
  width: 14rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding-left: 1.5rem;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: grey;
    display: flex;
    align-items: center;

    &::after {
      content: '>';
      padding-left: 1rem;
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;

const CirclesWrapper = styled.div`
  display: flex;
  transform: translateX(-15%);
`;

interface Props {
  icon?: string;
}

const CircleOne = styled.img<Props>`
  z-index: 2;
  background-repeat: no-repeat;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 3.5rem;
  border: 3px solid white;
  transform: translateX(64%);
`;
const CircleTwo = styled.img<Props>`
  z-index: 1;
  background-repeat: no-repeat;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 3.5rem;
  border: 3px solid white;
  transform: translateX(32%);
`;
const CircleThree = styled.img<Props>`
  z-index: 0;
  background-repeat: no-repeat;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 3.5rem;
  border: 3px solid white;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translateY(-25%);
`;

const Profile = () => {
  return (
    <UserTemplate>
      <Wrapper>
        <Grid>
          <ClassWrapper>
            <div>
              <p>Klasa</p>
              <Flex>
                <h1>3B</h1>
                <CirclesWrapper>
                  <CircleOne src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbi.gazeta.pl%2Fim%2Ffd%2F2f%2F16%2Fz23263741IH%2CMarcin-Najman.jpg&f=1&nofb=1" />
                  <CircleTwo src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.dorzeczy.pl%2Fimg%2Fkrzysztof-stanowski%2F99%2F19%2F6efea9df1d0f022543fd5ff5b60b.jpeg&f=1&nofb=1" />
                  <CircleThree src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbi.im-g.pl%2Fim%2F8c%2F48%2F18%2Fz25462668IER%2CMalgorzata-Rozenek---Majdan.jpg&f=1&nofb=1" />
                </CirclesWrapper>
              </Flex>
            </div>
          </ClassWrapper>
          <RoleWrapper>
            <div>
              <p>Rola:</p>
              <h1>Uczeń</h1>
            </div>
          </RoleWrapper>
          <Person />
        </Grid>
        <Interests />
      </Wrapper>
    </UserTemplate>
  );
};

export default Profile;
