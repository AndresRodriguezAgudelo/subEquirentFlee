import { styled } from '@/styled-system/jsx';

export const ModalContent = styled.div`
  display: flex;
  gap: 24px;
  padding: 34px;
  width: auto;
  max-width: 670px;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 95px;
    height: 95px;
  }
`;

export const TitleContainer = styled.div`
  border-bottom: 1px solid #E0E0E0;
  padding-bottom: 4px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;