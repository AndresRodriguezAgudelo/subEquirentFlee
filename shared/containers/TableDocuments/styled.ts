'use client';
import { styled } from '@/styled-system/jsx';

export const TableContainer = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  border-radius: 12px;
  overflow: hidden;
  padding: 16px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
`;

export const Th = styled.th`
  padding: 12px 16px;
  text-align: left;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
`;

export const Td = styled.td`
  padding: 12px 16px;
  border-bottom: 1px solid #e0e0e0;
`;

export const Tr = styled.tr`
  &:hover {
    background-color: #e9f0f5;
  }
`;

export const ActionIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }

  > svg {
    fill: #505050;
  }
`;
