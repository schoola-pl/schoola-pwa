import { UserInfoWrapper, Picture, ContentWrapper } from './Person.styles';

const Person = () => {
  return (
    <UserInfoWrapper>
      <Picture
        src="https://s7.tvp.pl/images2/7/8/e/uid_78ea317e92356f6cd75b0ad95c3fbd7e1634707736779_width_1280_play_0_pos_0_gs_0_height_720_kuba-wojewodzki-fot-papmarcin-kmiecinski.jpg"
        alt="user photo"
      />
      <ContentWrapper>
        <h1>Kuba Wojewódźki</h1>
        <p>Lorem ipsum dolor sit amet</p>
      </ContentWrapper>
    </UserInfoWrapper>
  );
};

export default Person;
