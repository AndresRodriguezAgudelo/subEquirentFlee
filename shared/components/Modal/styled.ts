'use client';
import { styled } from '@/styled-system/jsx';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 5%;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  width: auto;
  max-width: 70%;
  height: auto;
  padding: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  padding: 0 24px 24px;


  @media (max-width: 950px) {
    flex-direction: column;
  }




`;

interface ActionButtonProps {
  variant?: 'primary' | 'secondary';
}

export const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 44px;
  padding: 0 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &[data-variant='primary'] {
    background-color: #0e5d9e;
    color: white;
    border: none;
    &:hover {
      background-color: #0d5490;
    }
  }

  &[data-variant='secondary'] {
    background-color: transparent;
    color: #000000;
    border: 1px solid #851817;
    &:hover {
      background-color: rgba(133, 24, 23, 0.05);
    }
  }
`;
