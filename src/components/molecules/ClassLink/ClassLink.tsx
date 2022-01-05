import { InfoWrapper, Wrapper } from './ClassLink.styles';

interface Props {
  name: string;
  numberOfStudents: number;
}

const ClassLink: React.FC<Props> = ({ name, numberOfStudents }) => (
  <Wrapper to="#">
    <InfoWrapper>
      <h1>{name}</h1>
      <p>
        liczba osób w klasie: <strong>{numberOfStudents}</strong>
      </p>
    </InfoWrapper>
  </Wrapper>
);

export default ClassLink;
