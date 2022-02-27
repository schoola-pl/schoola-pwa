import React from 'react';
import { InputWrapper, Input, Slider } from './ToggleSwitch.styles';

// #f7f8fa;

const ToggleSwitch: React.FC<{ onChange: any }> = ({ onChange }) => {
  return (
    <InputWrapper>
      <Input type="checkbox" onChange={onChange} />
      <Slider />
    </InputWrapper>
  );
};

export default ToggleSwitch;
