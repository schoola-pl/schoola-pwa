import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface props {
  setReadyState: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimeSetupPage: React.FC<props> = ({ setReadyState }) => {
  useEffect(() => {
    setReadyState(false);
  }, []);

  return (
    <div>
      <h1>TimeSetupPage page</h1>
    </div>
  );
};

export default TimeSetupPage;
