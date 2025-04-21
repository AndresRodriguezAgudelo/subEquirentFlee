import { styled } from '@/styled-system/jsx';

export const ContTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  .cont-icon {
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 1);
  }
`;

export const ContChards = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  min-height: 350px;
`;

export const ContChard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
`;

export const SelectContainer = styled.div`
  flex: 1;
  max-width: 200px;
`;

export const TitleContainer = styled.div`
  white-space: nowrap;
`;
