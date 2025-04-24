
'use client'
import React from 'react';
import Modal from '@/shared/components/Modal';
import Text from '@/shared/components/Text';
import Icon from '@/shared/containers/Icons';
import { ActionIcon } from './styled';
import { useRouter } from 'next/navigation';

export const SuccessConfirmPassword = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const router = useRouter();
  const closeModal = () => onClose();
  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      button2="Aceptar"
      button2Style={false}
      onButton2Click={() => router.push('/admin/profile')}
    >
      <div
        style={{
          width: '460px',
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          position: 'relative',
        }}
      >
        <ActionIcon style={{ zIndex: 1000 }}>
          <Icon size={78} icon="check-circle" color="#51BB51" />
        </ActionIcon>
        <div style={{ width: '317px' }}>
          <Text
            style={{
              fontSize: '24px',
              fontWeight: '600',
              textAlign: 'start',
            }}
          >
            Contraseña actualizada
          </Text>
          <Text
            style={{
              width: '317px',
              fontSize: '14px',
              color: '#666',
              textAlign: 'start',
            }}
          >
            El cambio se verá reflejado en la plataforma automáticamente{' '}
          </Text>
        </div>
      </div>
    </Modal>
  );
};
