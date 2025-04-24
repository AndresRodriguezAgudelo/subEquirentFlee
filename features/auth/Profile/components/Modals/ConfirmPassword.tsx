'use client';
import React, { useState } from 'react';
import Modal from '@/shared/components/Modal';
import Text from '@/shared/components/Text';
import InputText from '@/shared/components/InputText';
import { type ChangeHandler } from 'react-hook-form';
import { ActionIcon, FormInputWrapper } from '../ProfileClient/styled';
import Icon from '@/shared/containers/Icons';
import { useRouter } from 'next/navigation';

export const ConfirmPassword = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const closeModal = () => onClose();

  // Adaptando el manejador para que sea compatible con ChangeHandler
  const handlePasswordChange: ChangeHandler = async (event) => {
    if (event && event.target) {
      setPassword(event.target.value);
    }
    return true; // Devuelve una promesa resuelta con true
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      button1="Cancelar"
      button2="Aceptar"
      button1Style={true}
      button2Style={false}
      onButton1Click={closeModal}
      onButton2Click={() => { router.push('/admin/profile/changePassword') }}
    >
      <div style={{ width: '460px', padding: '20px' }}>
        <Text
          style={{
            fontSize: '24px',
            fontWeight: '600',
            textAlign: 'start',
          }}
        >
          Confirma tu contraseña
        </Text>
        <Text
          style={{
            width: '400px',
            fontSize: '14px',
            color: '#666',
            textAlign: 'start',
            marginBottom: '20px',
          }}
        >
          Ingresa tu contraseña actual para habilitar el proceso de cambio de
          contraseña
        </Text>
        <FormInputWrapper>
          <InputText
            label=""
            value={password}
            type={showPassword ? 'text' : 'password'}
            onChange={handlePasswordChange}
          />
          {password && (
            <ActionIcon
              style={{ top: '20px' }}
              onClick={togglePasswordVisibility}
            >
              <Icon size={18} icon={showPassword ? "eye-off" : "eye"} />
            </ActionIcon>
          )}
        </FormInputWrapper>
      </div>
    </Modal>
  );
};
