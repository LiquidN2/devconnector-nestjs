import React, { ChangeEventHandler } from 'react';

import { InputGroup, InputLabel, Input, TextArea } from './form-input.styles';

export interface FormInputProps {
  label: string;
  handleChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value?: string;
  type?: string;
  id?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type = 'text',
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
      {type === 'textarea' ? (
        <TextArea onChange={handleChange} {...otherProps} rows={3} />
      ) : (
        <Input onChange={handleChange} type={type} {...otherProps} />
      )}
    </InputGroup>
  );
};

export default FormInput;
