import React from 'react';

import {
  InputGroup,
  CheckboxContainer,
  CheckboxInput,
  CheckMark,
} from './form-checkbox.styles';

interface FormCheckboxProps {
  id: string;
  required?: boolean;
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({
  id,
  required = false,
  children,
}) => {
  return (
    <InputGroup>
      <CheckboxContainer htmlFor={id}>
        {children}
        <CheckboxInput type="checkbox" id={id} required={required} />
        <CheckMark />
      </CheckboxContainer>
    </InputGroup>
  );
};

export default FormCheckbox;
