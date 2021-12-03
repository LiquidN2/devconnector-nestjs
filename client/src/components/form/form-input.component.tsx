import React, { ChangeEventHandler } from 'react';

import { InputGroup, InputLabel, Input } from './form-input.styles';

export interface FormInputProps {
  label: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  type: string;
  id?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  handleChange,
  ...otherProps
}) => {
  return (
    <InputGroup>
      {label ? (
        <InputLabel htmlFor={otherProps.id ? otherProps.id : ''}>
          {label}
        </InputLabel>
      ) : null}
      <Input onChange={handleChange} type={type} {...otherProps} />
    </InputGroup>
  );
};

export default FormInput;
