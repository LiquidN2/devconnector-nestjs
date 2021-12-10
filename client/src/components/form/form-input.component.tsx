import React, { ChangeEventHandler, useEffect, useRef } from 'react';

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
  isFocused?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type = 'text',
  handleChange,
  isFocused = false,
  ...otherProps
}) => {
  const inputElem = useRef<HTMLInputElement | null>(null);
  const textAreaElem = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (!isFocused) return;

    if (type === 'textarea') {
      textAreaElem.current?.focus();
    }

    inputElem.current?.focus();
  }, []);

  return (
    <InputGroup>
      {label ? (
        <InputLabel htmlFor={otherProps.id ? otherProps.id : ''}>
          {label}
        </InputLabel>
      ) : null}
      {type === 'textarea' ? (
        <TextArea
          onChange={handleChange}
          {...otherProps}
          rows={3}
          ref={textAreaElem}
        />
      ) : (
        <Input
          onChange={handleChange}
          type={type}
          {...otherProps}
          ref={inputElem}
        />
      )}
    </InputGroup>
  );
};

export default FormInput;
