'use client';
import React, { ReactNode } from 'react';
import {
  ModalOverlay,
  ModalContainer,
  ModalContent,
  ButtonsContainer,
  ActionButton,
} from './styled';

type ModalProps = {
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

export default function Modal({
  isOpen,
  onClose,
  children,
  button1,
  button2,
  button1Style = false,
  button2Style = false,
  onButton1Click,
  onButton2Click,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalContent>
          {children}
          {(button1 || button2) && (
            <ButtonsContainer>
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
            </ButtonsContainer>
          )}
        </ModalContent>
      </ModalContainer>
    </ModalOverlay>
  );
}
