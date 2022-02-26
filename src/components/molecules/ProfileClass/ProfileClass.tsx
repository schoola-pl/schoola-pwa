import { ClassWrapper, Flex, CirclesWrapper, CircleOne, CircleTwo, CircleThree } from './ProfileClass.styles';

interface Props {
  userClass: string;
}

const ProfileClass: React.FC<Props> = ({ userClass }) => (
  <ClassWrapper>
    <div>
      <p>Klasa</p>
      <Flex>
        <h1>{userClass}</h1>
        <CirclesWrapper>
          <CircleOne src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbi.gazeta.pl%2Fim%2Ffd%2F2f%2F16%2Fz23263741IH%2CMarcin-Najman.jpg&f=1&nofb=1" />
          <CircleTwo src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.dorzeczy.pl%2Fimg%2Fkrzysztof-stanowski%2F99%2F19%2F6efea9df1d0f022543fd5ff5b60b.jpeg&f=1&nofb=1" />
          <CircleThree src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbi.im-g.pl%2Fim%2F8c%2F48%2F18%2Fz25462668IER%2CMalgorzata-Rozenek---Majdan.jpg&f=1&nofb=1" />
        </CirclesWrapper>
      </Flex>
    </div>
  </ClassWrapper>
);

export default ProfileClass;
