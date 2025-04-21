'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
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

interface GuardarAlertaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GuardarAlertaModal({
  isOpen,
  onClose,
}: GuardarAlertaModalProps) {
  const router = useRouter();

  const handleAccept = () => {
    router.push('/admin/alertasVencimientos');
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      button1="Aceptar"
      onButton1Click={handleAccept}
    >
      <ModalContent>
        <IconContainer>
          <Icon icon="check-circle" size={148} color="#50ba50" />
        </IconContainer>
        <TextContainer>
          <TitleContainer>
            <Text styleName="Heading 4">Vencimiento Creado</Text>
          </TitleContainer>
          <TextGroup>
            <Text styleName="Body Medium">
              Esta acción no se podrá deshacer
            </Text>
            <Text styleName="Body Medium">
              Administra los vencimientos creados en el sistema desde la vista "Alertas y Vencimientos"
            </Text>
          </TextGroup>
        </TextContainer>
      </ModalContent>
    </Modal>
  );
}
