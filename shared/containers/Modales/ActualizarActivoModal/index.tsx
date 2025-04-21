'use client';

import React from 'react';
import Modal from '@/shared/components/Modal';
import Text from '@/shared/components/Text';
import Icon from '@/shared/containers/Icons';
import {
  ModalContent,
  TitleContainer,
  IconContainer,
  TextContainer,
  TextGroup,
} from './styled';

interface ActualizarActivoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ActualizarActivoModal({
  isOpen,
  onClose,
}: ActualizarActivoModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} button1="Aceptar">
      <ModalContent>
        <IconContainer>
          <Icon icon="check-circle" color="#50ba50" />
        </IconContainer>
        <TextContainer>
          <TextGroup>
            <TitleContainer>
              <Text styleName="Heading 4">Actualizar Activo</Text>
            </TitleContainer>
            <Text styleName="Body Medium">ID: 458745</Text>
            <Text styleName="Body Medium">
              El registro se actualizara automaticamente
            </Text>
          </TextGroup>
        </TextContainer>
      </ModalContent>
    </Modal>
  );
}
