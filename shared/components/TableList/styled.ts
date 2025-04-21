import { styled } from '@/styled-system/jsx';

export const TableContainer = styled.div`
  width: 100%;

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  thead {
    background-color: rgba(248, 248, 248, 1);
    border-bottom: 1px solid rgba(225, 225, 225, 1);
  }

  tbody {
    background-color: rgba(255, 255, 255, 1);
  }

  th {
    padding: 10px 15px;
    text-align: left;
    font-weight: 500;
    font-size: 14px;
    color: #333;
  }

  td {
    padding: 10px 15px;
    border-bottom: 1px solid #e0e0e0;
    font-size: 14px;
    color: #666;
  }

  tr:hover {
    background-color: rgba(248, 248, 248, 0.5);
  }
`;
