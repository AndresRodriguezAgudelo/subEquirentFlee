import { styled } from '@/styled-system/jsx';

interface ActionButtonProps {
  variant?: 'primary' | 'secondary' | 'maintenance';
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

  &[data-variant='maintenance'] {
    background-color: #50ba50;
    color: white;
    border: none;
    &:hover {
      background-color: #45a445;
    }
  }
`;
