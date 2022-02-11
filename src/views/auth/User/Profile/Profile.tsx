import styled from 'styled-components';
import UserTemplate from 'components/templates/UserTemplate/UserTemplate';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  heigth: 100vh;
  justify-content: flex-start;
  align-items: center;
`;

const Grid = styled.div`
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

const UserInfoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  width: 15rem;
  height: 22rem;
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
`;

const InnerWrapper = styled.div`
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 2rem;
  width: 15rem;
`;

const Picture = styled.img`
  background-size: ;
  background-repeat: no-repeat;
  height: 75%;
`;

// const PictureWrapper = styled.div`

// `;

const ContentWrapper = styled.div`
  height: 30%;
  border-top: 1px solid black;
  width: 100%;
  background-color: white;
`;

const Profile = () => {
  return (
    <UserTemplate>
      <Wrapper>
        <Grid>
          <InnerWrapper>Klasa</InnerWrapper>
          <InnerWrapper>Rola</InnerWrapper>
          <UserInfoWrapper>
            <Picture
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd.wpimg.pl%2F1861132436-573487822%2Fkuba-wojewodzki.jpg&f=1&nofb=1"
              alt=""
            />

            <ContentWrapper>
              <p>hello</p>
            </ContentWrapper>
          </UserInfoWrapper>
        </Grid>
      </Wrapper>
    </UserTemplate>
  );
};

export default Profile;
