import { styled } from '@/styled-system/jsx';

export const ModalContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px;
  gap: 24px;
`;

export const IconContainer = styled.div`
  width: 158px;
  height: 158px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  max-width: 520px;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TitleContainer = styled.div`
  margin-bottom: 8px;
`;
