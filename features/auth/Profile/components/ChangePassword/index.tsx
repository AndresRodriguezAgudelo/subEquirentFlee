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
  const [isOpenConfirmPassword, setIsOpenConfirmPassword] = useState(false);
  const closeModal = () => {
    setIsOpenConfirmPassword(false);
  };

  return (
    <form onSubmit={() => {}}>
      <FormGroup>
        <FormInputWrapper>
          <InputText
            label="Nueva contraseña"
            value="************"
            type="password"
            tooltipData="Nueva contraseña"
          />
        </FormInputWrapper>
      </FormGroup>

      <FormGroup>
        <FormInputWrapper>
          <InputText
            label="Confirmar nueva contraseña"
            value="************"
            type="password"
            tooltipData="Confirmar nueva contraseña"
          />
        </FormInputWrapper>
      </FormGroup>

      <ContainerButton>
        <Button
          type="button"
          onClick={() => setIsOpenConfirmPassword(true)}
          style={{ width: '200px' }}
        >
          Guardar
        </Button>
      </ContainerButton>
      <SuccessConfirmPassword
        isOpen={isOpenConfirmPassword}
        onClose={closeModal}
      />
    </form>
  );
};
