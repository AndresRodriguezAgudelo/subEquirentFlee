'use client';
import React from 'react';
import Modal from '@/shared/components/Modal';
import Text from '@/shared/components/Text';
import Icon from '@/shared/containers/Icons';
import { useRouter } from 'next/navigation';
import { ActionIcon } from '../styled';
import Button from '@/shared/components/Button';

export const StatusUserModal = ({
  isOpen,
  onClose,
  status,
}: {
  isOpen: boolean;
  onClose: () => void;
  status?: boolean;
}) => {
  const router = useRouter();
  const closeModal = () => onClose();
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
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
          <Icon
            size={78}
            icon={status ? 'check-circle' : 'user-x'}
            color={status ? '#51BB51' : '#CE3B3B'}
          />
        </ActionIcon>
        <div style={{ width: '317px' }}>
          <Text
            style={{
              fontSize: '24px',
              fontWeight: '600',
              textAlign: 'start',
            }}
          >
            {status ? 'Activar usuario' : 'Desactivar usuario'}
          </Text>
          <Text
            style={{
              width: '317px',
              fontSize: '14px',
              color: '#666',
              textAlign: 'start',
            }}
          >
            {status
              ? 'Un usuario desactivado no podrá ingresar a la plataforma hasta ser activado '
              : 'Los acceso y permisos del usuario estarán disponibles nuevamente. '}
          </Text>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              marginTop: '16px',
              justifyContent: 'flex-end',
            }}
          >
            <Button
              type="button"
              color="#bb5151"
              variant="secondary"
              onClick={closeModal}
            >
              Cancelar  
            </Button>
            <Button
              type="button"
              style={{ backgroundColor: '#0E5D9D' }}
              variant="primary"
              onClick={() => router.push('/admin/customerManagement')}
            >
              {status ? 'Activar' : 'Desactivar'}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
