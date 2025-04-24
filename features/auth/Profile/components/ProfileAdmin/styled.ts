import { styled } from '@/styled-system/jsx';

export const ContainerProfileAdmin = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin-top: 36px;
`;
  
export const RoleTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`;
  
export const RoleSection = styled.div`
  width: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  padding: 0 24px 24px;
`;

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
    color: #841717;
    border: 1px solid #851817;
    &:hover {
      background-color: rgba(133, 24, 23, 0.05);
    }
  }
`;