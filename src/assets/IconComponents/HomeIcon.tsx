import React from 'react';

interface Props {
  isActive: boolean;
}

const HomeIcon: React.FC<Props> = ({ isActive }) => {
  return (
    <svg fill={isActive ? '#FFFFFF' : '#72db88'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g data-name="Layer 2">
        <g data-name="home">
          <rect width="24" height="24" opacity="0" />
          <rect width="4" height="7" x="10" y="14" />
          <path d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2H8v-9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9h3.11A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44z" />
        </g>
      </g>
    </svg>
  );
};

export default HomeIcon;