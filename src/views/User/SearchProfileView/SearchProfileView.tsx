import { useParams } from 'react-router';
import Profile from '../Profile/Profile';
import { useGetUserQuery } from '../../../store';

const SearchProfileView = () => {
  const { userId } = useParams();
  const user = useGetUserQuery({ userId: userId ? userId : '' });

  return <Profile customUser={user.data} />;
};

export default SearchProfileView;
