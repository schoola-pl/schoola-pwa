import { InfoWrapper, StudentResultWrapper } from './UserSearchRecord.styles';

interface Props {
  TextClassName?: string;
  Role?: string;
  firstName?: string;
  lastName?: string;
}

const UserSearchRecord: React.FC<Props> = ({ TextClassName, Role, firstName, lastName }) => {
  return (
    <StudentResultWrapper>
      <h1>{TextClassName}</h1>
      <InfoWrapper>
        <h1>
          {firstName} {lastName}
        </h1>
        <p>{Role}</p>
      </InfoWrapper>
    </StudentResultWrapper>
  );
};

export default UserSearchRecord;
