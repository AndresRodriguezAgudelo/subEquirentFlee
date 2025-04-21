'use client';

import React from 'react';
import Modal from '@/shared/components/Modal';
import Text from '@/shared/components/Text';
import Icon from '@/shared/containers/Icons';
import { ModalContent, TitleContainer, IconContainer, TextContainer, TextGroup } from './styled';

interface CargarDatosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CargarDatosModal({ isOpen, onClose }: CargarDatosModalProps) {
  return (
    <Modal 
    isOpen={isOpen} 
    onClose={onClose}
    button1='Volver'
    button2='Aceptar'
    button1Style={true}
    >
      <ModalContent>
        <IconContainer>
          <Icon icon="alert-triangle" color='#ded63e'/>
        </IconContainer>
        <TextContainer>
          <TextGroup>
            <TitleContainer>
            <Text styleName="Heading 4">Cargar Datos</Text>
            </TitleContainer>
            <Text styleName="Body Medium">Esta acción no se podrá deshacer</Text>
            <Text styleName="Body Medium">Una vez cargada la informacion, podra ajustarla desde la herramienta de edicion de cada activo o mediante una nueva carga masiva.</Text>
          </TextGroup>
        </TextContainer>
      </ModalContent>
    </Modal>
  );
}
