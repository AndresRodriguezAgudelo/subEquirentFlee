import React, { forwardRef, memo } from 'react';
import dynamic from 'next/dynamic';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Tooltip from '../TooltipBox';
import { Container, ContainerLabel, ContInput, Input } from './styled';
import Text from '../Text';

type DateInputProps = {
  label?: string;
  name?: string;
  onChange?: (date: Date | null) => void;
  selected?: Date | null;
  placeholder?: string;
  disabled?: boolean;
  tooltipData?: string;
};

const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  function DateInput(props, ref) {
  
    return (
      <Container>
        {!!props?.label && (
          <ContainerLabel>
            <Text styleName={'Highligth Accent'} as={'label'}>
              {props.label}
            </Text>
            {props.tooltipData && <Tooltip data={props.tooltipData} />}
          </ContainerLabel>
        )}
        <ContInput>
          <DatePicker
            selected={props.selected}
            onChange={props.onChange}
            placeholderText={props.placeholder}
            disabled={props.disabled}
            dateFormat="dd/MM/yyyy"
            customInput={
              <Input
                ref={ref}
                data-type="date"
                disabled={props.disabled}
                placeholder={props.placeholder}
              />
            }
          />
        </ContInput>
      </Container>
    );
  }
);

export default memo(DateInput);
