import React from 'react';

import {
  InputGroup,
  CheckboxContainer,
  CheckboxInput,
  CheckMark,
} from './form-checkbox.styles';

interface FormCheckboxProps {
  id: string;
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({ id, children }) => {
  return (
    <InputGroup>
      <CheckboxContainer htmlFor={id}>
        {children}
        <CheckboxInput type="checkbox" id={id} />
        <CheckMark />
      </CheckboxContainer>
    </InputGroup>
  );
};

export default FormCheckbox;
