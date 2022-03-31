import { useParams } from 'react-router';

const SearchProfileView = () => {
  const { profileId } = useParams();
  return (
    <div>
      <h1>SearchProfileView</h1>
    </div>
  );
};

export default SearchProfileView;
