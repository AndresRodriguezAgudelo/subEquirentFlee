'use client';
import React, { ReactNode } from 'react';
import {
  ModalOverlay,
  ModalContainer,
  ModalContent,
  ButtonsContainer as OriginalButtonsContainer,
  ActionButton,
} from '@/shared/components/Modal/styled';
import styled from 'styled-components';

// Creamos un contenedor de botones personalizado que centra los botones
const CenteredButtonsContainer = styled(OriginalButtonsContainer)`
  justify-content: center;
`;

type CenteredModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  button1?: string;
  button2?: string;
  button1Style?: boolean;
  button2Style?: boolean;
  onButton1Click?: () => void;
  onButton2Click?: () => void;
};

export default function CenteredButtonsModal({
  isOpen,
  onClose,
  children,
  button1,
  button2,
  button1Style = false,
  button2Style = false,
  onButton1Click,
  onButton2Click,
}: CenteredModalProps) {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalContent>
          {children}
          {(button1 || button2) && (
            <CenteredButtonsContainer>
              {button1 && (
                <ActionButton
                  type="button"
                  data-variant={button1Style ? 'secondary' : 'primary'}
                  onClick={onButton1Click || onClose}
                >
                  {button1}
                </ActionButton>
              )}
              {button2 && (
                <ActionButton
                  type="button"
                  data-variant={button2Style ? 'secondary' : 'primary'}
                  onClick={onButton2Click || onClose}
                >
                  {button2}
                </ActionButton>
              )}
            </CenteredButtonsContainer>
          )}
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
}
