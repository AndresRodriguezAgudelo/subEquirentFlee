import { styled } from '@/styled-system/jsx';

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background-color: white;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

export const IconContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #50ba50;
  border-radius: 50%;
  background-color: white;
  margin-right: 16px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin-top: 16px;
`;

export const VehicleInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding: 16px;
  background-color: #f8f8f8;
  border-radius: 8px;
  min-width: 300px;
`;

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;



export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 200px;
`;

export const InputGroupFrom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 350px;
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #4CAF50;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 24px;
`;
