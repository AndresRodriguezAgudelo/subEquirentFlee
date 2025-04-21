import { styled } from '@/styled-system/jsx';

export const Card = styled.div`
  width: 350px;
  height: 160px;
  background: #f7f7f7;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px 10px;
`;

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const StatusInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  transform: scale(0.9);
  transform-origin: center;
`;

export const Divider = styled.div`
  height: 1px;
  background: #e0e0e0;
  margin: 1px 0;
`;

export const CarInfo = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-evenly;
`;

export const SpecsInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  background-color: #00a650;
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
`;

export const StatusRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

export const StatusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 2px 14px;
  border-radius: 4px;
  width: 200px;
  display: flex;
  align-items: center;
  border-radius: 18px;
  gap: 8px;
  transform: scale(0.8);
  transform-origin: center;
`;
