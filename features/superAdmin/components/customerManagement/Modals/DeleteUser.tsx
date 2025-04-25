'use client';
import React from 'react';
import Modal from '@/shared/components/Modal';
import Text from '@/shared/components/Text';
import Icon from '@/shared/containers/Icons';
import { useRouter } from 'next/navigation';
import { ActionIcon } from './styled';
import Button from '@/shared/components/Button';

export const DeleteUserModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
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
          <Icon size={78} icon="trash-2" color="#CE3B3B" />
        </ActionIcon>
        <div style={{ width: '317px' }}>
          <Text
            style={{
              fontSize: '24px',
              fontWeight: '600',
              textAlign: 'start',
            }}
          >
            Eliminar usuario{' '}
          </Text>
          <Text
            style={{
              width: '317px',
              fontSize: '14px',
              color: '#666',
              textAlign: 'start',
            }}
          >
            Esta acción no se podrá deshacer{' '}
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
              style={{ backgroundColor: '#CE3B3B' }}
              variant="primary"
              onClick={() => router.push('/admin/customerManagement')}
            >
              Eliminar
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
