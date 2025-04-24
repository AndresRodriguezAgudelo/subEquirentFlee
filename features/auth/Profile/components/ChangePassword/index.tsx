'use client';
import React from 'react';
import { useState } from 'react';
import {
  FormGroup,
  FormInputWrapper,
  ActionIcon,
} from '../ProfileClient/styled';
import InputText from '@/shared/components/InputText';
import Icon from '@/shared/containers/Icons';
import Button from '@/shared/components/Button';
import { ContainerButton } from './styled';
import { SuccessConfirmPassword } from '../Modals/SuccessConfirmPassword';

export const ChangePasswordProfile = () => {
  const [visibility, setVisibility] = useState<Record<string, boolean>>({
    password: false,
    confirmPassword: false,
  });
  const [isOpenConfirmPassword, setIsOpenConfirmPassword] = useState(false);
  const closeModal = () => {
    setIsOpenConfirmPassword(false);
  };
  const toggleVisibility = (key: string) => {
    setVisibility((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const getType = (key: string) => (visibility[key] ? 'text' : 'password');

  return (
    <form onSubmit={() => {}}>
      <FormGroup>
        <FormInputWrapper>
          <InputText
            label="Nueva contraseña"
            value="************"
            type={getType('password')}
            tooltipData="Nueva contraseña"
          />
          <ActionIcon
            style={{ top: '55px' }}
            onClick={() => toggleVisibility('password')}
          >
            <Icon size={18} icon={visibility.password ? 'eye-off' : 'eye'} />
          </ActionIcon>
        </FormInputWrapper>
      </FormGroup>

      <FormGroup>
        <FormInputWrapper>
          <InputText
            label="Confirmar nueva contraseña"
            value="************"
            type={getType('confirmPassword')}
            tooltipData="Confirmar nueva contraseña"
          />
          <ActionIcon
            style={{ top: '55px' }}
            onClick={() => toggleVisibility('confirmPassword')}
          >
            <Icon
              size={18}
              icon={visibility.confirmPassword ? 'eye-off' : 'eye'}
            />
          </ActionIcon>
        </FormInputWrapper>
      </FormGroup>

      <ContainerButton>
        <Button type="button" onClick={() => setIsOpenConfirmPassword(true)} style={{ width: '200px' }}>
          Guardar
        </Button>
      </ContainerButton>
      <SuccessConfirmPassword isOpen={isOpenConfirmPassword} onClose={closeModal} />
    </form>
  );
};
