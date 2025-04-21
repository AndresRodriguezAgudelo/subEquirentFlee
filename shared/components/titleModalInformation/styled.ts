'use client';
import { styled } from '@/styled-system/jsx';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  padding: 12px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const InfoBlock = styled.div`
  padding: 8px;
  background-color: white;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  min-height: 80px;
  padding-left: 16px;
`;

export const StatusBlock = styled.div`
  padding: 8px;
  background-color: white;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  min-height: 80px;
  padding-left: 16px;
`;

export const StatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StatusDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--colors-gray-400);

  &[data-active='true'] {
    background-color: #51bb51;
  }
`;
