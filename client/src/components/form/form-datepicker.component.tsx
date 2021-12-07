import React from 'react';

import {
  InputGroup,
  InputLabel,
  StyledDatePicker,
} from './form-datepicker.styles';

interface FormDatePickerProps {
  value: Date | null;
  onChange: (date: Date) => void;
  format?: string;
  label?: string;
}

const FormDatePicker: React.FC<FormDatePickerProps> = ({
  label,
  value,
  onChange,
  format = 'dd/MM/y',
  children,
  ...props
}) => {
  return (
    <InputGroup>
      {label && <InputLabel>{label}</InputLabel>}
      <StyledDatePicker
        value={value}
        onChange={onChange}
        format={format}
        {...props}
      />
    </InputGroup>
  );
};

export default FormDatePicker;
