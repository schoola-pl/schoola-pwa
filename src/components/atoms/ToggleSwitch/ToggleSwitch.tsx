import React from 'react';
import { Input, InputWrapper, Slider } from './ToggleSwitch.styles';

const ToggleSwitch: React.FC<{ onChange: any; initial?: boolean }> = ({ onChange, initial }) => {
  return (
    <InputWrapper>
      <Input type="checkbox" onChange={onChange} checked={initial || false} />
      <Slider />
    </InputWrapper>
  );
};

export default React.memo(ToggleSwitch);
