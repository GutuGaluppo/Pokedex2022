import React from 'react'
import { CheckboxContainer, HiddenCheckbox, StyledCheckbox } from './checkbox-style.js';

const Checkbox = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked} />
  </CheckboxContainer>
)

export default Checkbox