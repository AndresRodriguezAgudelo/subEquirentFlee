'use client';
import { styled } from '@/styled-system/jsx';

export const ContainerMandatory = styled.div`
  margin-bottom: 24px;
  background-color: #ffffff;
  border-radius: 8px;
`;

export const ContainerTitleLine = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;

  span {
    flex: 1;
    height: 1px;
    background-color: #e0e0e0;
  }
`;

export const AlertContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
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
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 8px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SelectBlock = styled.div`
  max-width: 300px;
`;

export const TablePlaceholder = styled.div`
  margin-top: 24px;
  padding: 16px;
  background: #f5f5f5;
  border-radius: 8px;
  text-align: center;
`;

export const ejemplo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 40px 0 0 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 32px;
`;

export const IconContainer = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  .circle-border {
    position: absolute;
    width: 70px;
    height: 70px;
    border: 7px solid #50ba50;
    border-radius: 50%;
  }
`;
