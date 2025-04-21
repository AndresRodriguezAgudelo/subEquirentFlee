'use client';

import React from 'react';
import Modal from '@/shared/components/Modal';
import Icon from '@/shared/containers/Icons';
import {
  ModalContainer,
  ContentContainer,
  IconContainer,
  InfoContainer,
  Title,
  DetailsContainer,
  DetailRow,
  DetailLabel,
  DetailValue
} from './styled';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function TesResponsiveModal({ isOpen, onClose }: Props) {
  const handleButton1Click = () => {
    console.log('Botón 1 clickeado');
    onClose();
  };

  const handleButton2Click = () => {
    console.log('Botón 2 clickeado');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      button1="Aceptar"
      button2="Cancelar"
      button1Style={true}
      button2Style={false}
      onButton1Click={handleButton1Click}
      onButton2Click={handleButton2Click}
    >
      <ModalContainer>
        <ContentContainer>
          <IconContainer>
            <Icon icon="clipboard-check"  size={74} color="#50ba50" />
          </IconContainer>
          <InfoContainer>
            <Title>Novedades Reportadas</Title>
            <DetailsContainer>
              <DetailRow>
                <DetailLabel>Usuario:</DetailLabel>
                <DetailValue>Luis Perez</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Fecha:</DetailLabel>
                <DetailValue>14/02/2024</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Placa:</DetailLabel>
                <DetailValue>ABC123</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>ID:</DetailLabel>
                <DetailValue>04536469851</DetailValue>
              </DetailRow>
            </DetailsContainer>
          </InfoContainer>
        </ContentContainer>
      </ModalContainer>
    </Modal>
  );
}
