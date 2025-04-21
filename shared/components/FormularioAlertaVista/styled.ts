'use client';
import { styled } from '@/styled-system/jsx';

export const ContainerMandatory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background: #FFFFFF;
  border-radius: 8px;
`;

export const ContainerTitleLine = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  span {
    width: 100%;
    height: 1px;
    background: #E0E0E0;
  }
`;

export const AlertContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px 0;
`;

export const VerticalSeparator = styled.div`
  width: 1px;
  height: 40px;
  background: #E0E0E0;
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
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  margin-top: 24px;
`;

export const FormBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const SelectBlock = styled.div`
  margin-top: 24px;
`;

export const TablePlaceholder = styled.div`
  margin-top: 24px;
  padding: 16px;
  background: #F5F5F5;
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
