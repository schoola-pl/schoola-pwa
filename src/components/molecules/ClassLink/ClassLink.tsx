import { InfoWrapper, Wrapper } from './ClassLink.styles';

interface Props {
  classLevel: number;
  classLetter: string;
  numberOfStudents: number;
}

const ClassLink: React.FC<Props> = ({ classLevel, classLetter, numberOfStudents }) => (
  <Wrapper to="#">
    <InfoWrapper>
      <div>
        <h1>{classLevel}</h1>
        <h1>{classLetter}</h1>
      </div>
      <p>
        liczba osób w klasie: <strong>{numberOfStudents}</strong>
      </p>
    </InfoWrapper>
  </Wrapper>
);

export default ClassLink;
