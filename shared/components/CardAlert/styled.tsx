import { styled } from '@/styled-system/jsx';

export const CardAlertStyled = styled.div`
  background-color: #f8d7da;
  border-color: #f5c6cb;
  color: #721c24;
  padding: 16px 24px;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const ContHeaderAlert = styled.div`
  display: flex;
  align-items: center;
`;
export const ContAlert = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ContTextAlert = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContIconAlert = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 50%;
`;

export const ContBodyAlert = styled.div`
  display: flex;
  gap: 8px;
`;
