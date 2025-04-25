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
  type?: 'password' | 'date' | 'number' | 'text' | 'email';
  maxNum?: number;
  hasErrors?: boolean;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  autoComplete?: string;
  description?: string;
  tooltipData?: string;
  showToggleIcon?: boolean;
};

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  function InputText(props, ref) {
    const [showContent, setShowContent] = useState(false);
    const isPassword = props.type === 'password';
    
    // Determinar si debe mostrar el icono basado en:
    // 1. Si es tipo password o showToggleIcon está activado
    // 2. Si hay un valor en el input
    const hasValue = !!props.value && props.value.length > 0;
    const shouldShowIcon = (isPassword || props.showToggleIcon) && hasValue;

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
          <Input
            data-type={props.type}
            ref={ref}
            onBlur={props.onBlur}
            name={props.name}
            value={props.value}
            {...(props.type === 'number'
              ? {
                  onChange: props.onChange,
                }
              : { onChange: props.onChange })}
            placeholder={props.placeholder}
            type={shouldShowIcon ? (showContent ? 'text' : 'password') : props.type || 'text'}
            disabled={props?.disabled ?? false}
            autoComplete={props?.autoComplete}
          />
          {props?.description && (
            <Text styleName={'Caption Standard'}>{props.description}</Text>
          )}
          {shouldShowIcon && (
            <EyeContainer>
              <Eye onClick={() => setShowContent((s) => !s)} type="button">
                {showContent ? (
                  <Icon size={25} icon="eye-off" />
                ) : (
                  <Icon size={25} icon="eye" />
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
