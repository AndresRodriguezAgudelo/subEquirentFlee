'use client';
import { styled } from '@/styled-system/jsx';

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  height: 100%;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 100%;
`;

export const UploadContainer = styled.div`
  flex: 1;
  min-height: 40px;
  height: 100%;
  border: 1px dashed #cbd5e0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  background-color: white;
  transition: all 0.2s ease-in-out;
  padding: 0 16px;

  &:hover {
    border-color: #718096;
    background-color: #f7fafc;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  > svg {
    fill: #e53e3e;
  }

  &:hover {
    background-color: #fed7d7;
    border-radius: 8px;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;
