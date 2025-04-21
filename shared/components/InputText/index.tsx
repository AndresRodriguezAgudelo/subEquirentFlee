import { forwardRef, memo, useState } from 'react';
import { type ChangeHandler } from 'react-hook-form';
import Tooltip from '../TooltipBox';
import Icon from '@/shared/containers/Icons';

import {
  Container,
  ContainerLabel,
  ContInput,
  Eye,
  EyeContainer,
  Input,
} from './styled';
import Text from '../Text';

type InputTextProps = {
  label?: string;
  name?: string;
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  type?: 'password' | 'date' | 'number';
  maxNum?: number;
  hasErrors?: boolean;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  autoComplete?: string;
  description?: string;
  tooltipData?: string;
};

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  function InputText(props, ref) {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <Container
      // hasErrors={props.hasErrors}
      // disabled={props?.disabled ?? false}
      >
        {!!props?.label && (
          <ContainerLabel>
            <Text styleName={'Highligth Accent'} as={'label'}>
              {props.label}
            </Text>
            {props.tooltipData && <Tooltip data={props.tooltipData} />}
          </ContainerLabel>
        )}
        <ContInput>
          <Input
            data-type={props.type}
            ref={ref}
            onBlur={props.onBlur}
            name={props.name}
            value={props.value}
            {...(props.type === 'number'
              ? {
                  // onKeyDown: e => FilterInputNumber(e),
                  // onPaste: e => handlePasteInputNumber(e),
                  onChange: props.onChange,
                }
              : { onChange: props.onChange })}
            placeholder={props.placeholder}
            type={
              props.type === 'password'
                ? showPassword
                  ? 'text'
                  : 'password'
                : props.type
            }
            // hasErrors={props.hasErrors}
            disabled={props?.disabled ?? false}
            autoComplete={props?.autoComplete}
          />
          {props?.description && (
            <Text styleName={'Caption Standard'}>{props.description}</Text>
          )}
          {props.type === 'password' && (
            <EyeContainer>
              <Eye onClick={() => setShowPassword(s => !s)} type="button">
                {showPassword ? (
                  <Icon size={25} icon="eye_closed" />
                ) : (
                  <Icon size={25} icon="eye_open" />
                )}
              </Eye>
            </EyeContainer>
          )}
        </ContInput>
      </Container>
    );
  }
);

export default memo(InputText);
