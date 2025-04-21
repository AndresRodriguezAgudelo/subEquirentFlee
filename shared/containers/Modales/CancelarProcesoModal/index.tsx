'use client';

import React from 'react';
import Modal from '@/shared/components/Modal';
import Text from '@/shared/components/Text';
import Icon from '@/shared/containers/Icons';
import { ModalContent, TitleContainer, IconContainer, TextContainer, TextGroup } from './styled';

interface CancelarProcesoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CancelarProcesoModal({ isOpen, onClose }: CancelarProcesoModalProps) {
  return (
    <Modal 
    isOpen={isOpen} 
    onClose={onClose}
    button1='Cancelar'
    button2='Volver al formulario'
    button1Style={true}
    >
      <ModalContent>
        <IconContainer>
          <Icon icon="package-x" color='#F44336'/>
        </IconContainer>
        <TextContainer>
          <TextGroup>
            <TitleContainer>
            <Text styleName="Heading 4">Cancelar Proceso</Text>
            </TitleContainer>
            <Text styleName="Body Medium">Esta acción no se podrá deshacer</Text>
            <Text styleName="Body Medium">El progreso en la creación del activo se perderá, ingresa a la opción 'añadir activo' para iniciar el proceso nuevamente</Text>
          </TextGroup>
        </TextContainer>
      </ModalContent>
    </Modal>
  );
}
