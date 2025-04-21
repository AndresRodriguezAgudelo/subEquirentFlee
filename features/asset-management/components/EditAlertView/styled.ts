'use client';
import { styled } from '@/styled-system/jsx';

export const ContainerMandatory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background: #ffffff;
  border-radius: 8px;
`;

export const ContainerTitleLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    width: 100%;
    height: 1px;
    background: #e0e0e0;
  }
`;

export const AlertContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 2px 16px;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
`;

export const VerticalSeparator = styled.div`
  width: 1px;
  height: 40px;
  background: #e0e0e0;
`;

export const DateGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  opacity: 0.6;
  min-width: 109px;
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 25%;
  padding: 8px 0;
`;

export const FormSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  margin-top: 24px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const FormBlockRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
  > * {
    flex: 1;
    width: 50%;
  }
`;

export const SelectBlock = styled.div`
  width: 32%;
  margin-top: 24px;
`;

export const TablePlaceholder = styled.div`
  margin-top: 24px;
  padding: 16px;
  background: #f5f5f5;
  border-radius: 8px;
  text-align: center;
`;

export const DaysContainer = styled.div`
  background: #E0E0E0;
  padding: 5px 34px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChartContainer = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

