import React from 'react';

import {
  InputGroup,
  CheckboxContainer,
  CheckboxInput,
  CheckMark,
} from './form-checkbox.styles';

interface FormCheckboxProps {
  label: string;
  id: string;
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({ label, id }) => {
  return (
    <InputGroup>
      <CheckboxContainer htmlFor={id}>
        {label}
        <CheckboxInput type="checkbox" id={id} />
        <CheckMark />
      </CheckboxContainer>
    </InputGroup>
  );
};

export default FormCheckbox;
