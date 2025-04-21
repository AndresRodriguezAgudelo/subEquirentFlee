import React, { forwardRef } from 'react';
import {
  Container,
  Title,
  OptionsContainer,
  CheckboxContainer,
  CheckboxInput,
  Label,
} from './styled';

export interface Option {
  label: string;
  value: string;
}

export interface InputCheckBoxProps {
  title?: string;
  options: Option[];
  name: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const InputCheckBox = forwardRef<HTMLInputElement, InputCheckBoxProps>(
  ({ title, options, name, value, onChange, onBlur }, ref) => {
    return (
      <Container>
        <Title>{title}</Title>
        <OptionsContainer>
          {options.map(option => (
            <CheckboxContainer key={option.value}>
              <CheckboxInput
                type="radio"
                name={name}
                value={option.value}
                checked={value === option.value}
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
              />
              <Label>{option.label}</Label>
            </CheckboxContainer>
          ))}
        </OptionsContainer>
      </Container>
    );
  }
);

InputCheckBox.displayName = 'InputCheckBox';

export default InputCheckBox;
