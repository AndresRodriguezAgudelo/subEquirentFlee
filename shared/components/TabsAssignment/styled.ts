import { styled } from '@/styled-system/jsx';

export const ContainerLabel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const TabsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 8px 12px;
  background-color: #f7f7f7;
  border-radius: 8px;
  min-height: 42px;
  height: auto;
  box-sizing: border-box;
`;

export const TabItem = styled('button')`
  padding: 8px 16px;
  border-radius: 10px;
  background-color: #828282;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #666666;
  }

  .close-icon {
    font-size: 16px;
    font-weight: bold;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;

export const LastTabItem = styled('button')`
  appearance: none;
  background: none;
  outline: none;
  padding: 8px 16px;
  border-radius: 10px;
  background-color: white;
  color: #50ba50;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 1px solid #e0e0e0;

  &:hover {
    background-color: #f5f5f5;
    border-color: #50ba50;
  }
`;
