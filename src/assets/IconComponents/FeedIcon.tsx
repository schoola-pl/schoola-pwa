interface Props {
  isActive?: boolean;
}

const FeedIcon: React.FC<Props> = ({ isActive }) => {
  return (
    <svg fill={isActive ? '#FFFFFF' : '#72db88'} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
      <path d="M40 4h-32c-2.21 0-3.98 1.79-3.98 4l-.02 36 8-8h28c2.21 0 4-1.79 4-4v-24c0-2.21-1.79-4-4-4zm-28 14h24v4h-24v-4zm16 10h-16v-4h16v4zm8-12h-24v-4h24v4z" />
      <path fill="none" d="M0 0h48v48h-48z" />
    </svg>
  );
};

export default FeedIcon;
