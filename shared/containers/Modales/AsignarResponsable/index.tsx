'use client';

import React, { useState } from 'react';
import Modal from '@/shared/components/Modal';
import Text from '@/shared/components/Text';
import Icon from '@/shared/containers/Icons';
import Select from '@/shared/components/Select';
import InputText from '@/shared/components/InputText';
import Button from '@/shared/components/Button';
import { type CarRegister } from '@/shared/containers/GeneralTable/makeData';
import {
  ModalContent,
  HeaderContainer,
  IconContainer,
  FormContainer,
  VehicleInfoContainer,
  InfoGroup,
  InputGroup,
  ButtonContainer,
  StatusContainer,
  StatusDot,
  InputGroupFrom,
} from './styled';

interface AsignarResponsableModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicle?: CarRegister | null;
}

const userOptions = [
  { value: 'alvaro', label: 'Alvaro Lopez' },
  { value: 'andres', label: 'Andres Rodriguez' },
  { value: 'neider', label: 'Neider Hamburger' },
  { value: 'luis', label: 'Luis Fernando' },
];

export default function AsignarResponsableModal({
  isOpen,
  onClose,
  vehicle,
}: AsignarResponsableModalProps) {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const handleAssign = () => {
    // Aquí iría la lógica para asignar el responsable
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <HeaderContainer>
          <IconContainer>
            <Icon icon="bell-ring" size={24} color="black" />
          </IconContainer>
          <Text styleName="Heading 4">Asignar Responsable</Text>
        </HeaderContainer>

        <FormContainer>
          <VehicleInfoContainer>
            <InfoGroup>
              <Text styleName="Body Medium">{vehicle?.plate || '-'}</Text>
              <Text styleName="Body Medium">ID: {vehicle?.id || '-'}</Text>
            </InfoGroup>
            <InfoGroup>
              <StatusContainer>
                {vehicle?.status === 'active' && <StatusDot />}
                <Text styleName="Body Medium">
                  {vehicle?.status === 'active' ? 'Disponible' : vehicle?.status || '-'}
                </Text>
              </StatusContainer>
              <StatusContainer>
                {vehicle?.administration && <StatusDot />}
                <Text styleName="Body Medium">{vehicle?.administration || '-'}</Text>
              </StatusContainer>
            </InfoGroup>
          </VehicleInfoContainer>

          <InputGroupFrom>
            <Select
              label="Usuario"
              optionSelect={userOptions}
              value={selectedUser}
              onChangeSelect={(option) => setSelectedUser(option.value)}
              placeholder="Seleccionar usuario"
              tooltipData="Seleccione el usuario responsable del activo"
            />
          </InputGroupFrom>

          <InputGroup>
            <InputText
              label="Perfil"
              placeholder="Ingrese el perfil"
              disabled
              tooltipData="Perfil del usuario seleccionado"
            />
          </InputGroup>
        </FormContainer>

        <ButtonContainer>
          <Button variant="secondary" onClick={onClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleAssign}>
            Asignar a Activo
          </Button>
        </ButtonContainer>
      </ModalContent>
    </Modal>
  );
}
