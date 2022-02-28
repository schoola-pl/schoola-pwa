import React from 'react';
import { InputWrapper, Input, Slider } from './ToggleSwitch.styles';

const ToggleSwitch: React.FC<{ onChange: any }> = ({ onChange }) => {
  return (
    <InputWrapper>
      <Input type="checkbox" onChange={onChange} />
      <Slider />
    </InputWrapper>
  );
};

export default ToggleSwitch;
