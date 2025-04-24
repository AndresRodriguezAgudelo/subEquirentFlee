import React from 'react';
import Modal from '@/shared/components/Modal';
import Text from '@/shared/components/Text';
import InputText from '@/shared/components/InputText';

export const EditDocument = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const closeModal = () => onClose();

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      button1="Cancelar"
      button2="Aceptar"
      button1Style={true}
      button2Style={false}
      onButton1Click={closeModal}
      onButton2Click={closeModal}
    >
      <div style={{ width: '460px', padding: '20px' }}>
        <Text
          style={{
            fontSize: '24px',
            fontWeight: '600',
            textAlign: 'start',
          }}
        >
          Editar número de documento
        </Text>
        <Text
          style={{
            width: '460px',
            fontSize: '14px',
            color: '#666',
            textAlign: 'start',
          }}
        >
          Los cambios se verán reflejados automaticamente{' '}
        </Text>
        <InputText label=" " value="123456789" type="text" />
      </div>
    </Modal>
  );
};
