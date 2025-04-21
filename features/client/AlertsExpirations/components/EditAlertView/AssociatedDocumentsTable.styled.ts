'use client';

import { styled } from '@/styled-system/jsx';

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const TableContainer = styled.div`
  width: 100%;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  background: #F5F5F5;
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #E0E0E0;
`;

export const Td = styled.td`
  padding: 12px 16px;
  border-bottom: 1px solid #E0E0E0;
`;

export const Tr = styled.tr`
  &:hover {
    background: #F8F8F8;
  }
`;
