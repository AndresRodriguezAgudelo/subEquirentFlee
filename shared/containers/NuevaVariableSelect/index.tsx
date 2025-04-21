'use client';
import React, { useState } from 'react';
import { type ChangeHandler } from 'react-hook-form';
import Modal from '@/shared/components/Modal';
import Text from '@/shared/components/Text';
import InputText from '@/shared/components/InputText';
import {
  ButtonsContainer,
  ActionButton,
} from '@/shared/components/Modal/styled';

interface NuevaVariableSelectProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (newValue: string) => void;
}

const NuevaVariableSelect: React.FC<NuevaVariableSelectProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [newVariable, setNewVariable] = useState('');

  const handleChange: ChangeHandler = async e => {
    if (e.target) {
      setNewVariable(e.target.value);
    }
    return true;
  };

  const handleAdd = () => {
    if (newVariable.trim()) {
      onAdd(newVariable.trim());
      setNewVariable('');
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      button1="Cancelar"
      button2="Agregar"
      button1Style={true}
    >
      <div style={{ padding: '24px', maxWidth: '400px' }}>
        <Text styleName="Heading 5">Agregar opción a la lista</Text>

        <div style={{ marginTop: '16px' }}>
          <Text styleName="Heading 6">Esta acción no se podrá deshacer.</Text>
        </div>

        <div style={{ marginTop: '8px' }}>
          <Text styleName="Heading 6">
            Para realizar algún tipo de gestión sobre las variables de una
            propiedad, deberá dirigirse al apartado de configuración en la
            opción de tablas maestras.
          </Text>
        </div>

        <div style={{ marginTop: '24px' }}>
          <InputText
            label="Nueva variable"
            placeholder="Ingrese el nombre de la nueva opción"
            value={newVariable}
            onChange={handleChange}
          />
        </div>
      </div>
    </Modal>
  );
};

export default NuevaVariableSelect;
