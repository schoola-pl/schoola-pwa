import { useState } from 'react';
import IconDiv from 'components/atoms/IconDiv/IconDiv';
import ShowIcon from 'assets/icons/ShowIcon.svg';
import HideIcon from 'assets/icons/HideIcon.svg';

const usePasswordToggle = () => {
  const [isVisible, setVisibility] = useState(false);

  const inputType = isVisible ? 'text' : 'password';

  const icon = <IconDiv as="button" onClick={() => setVisibility(!isVisible)} icon={isVisible ? HideIcon : ShowIcon} />;

  return { inputType, icon };
};

export default usePasswordToggle;
