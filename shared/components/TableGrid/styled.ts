import { styled } from '@/styled-system/jsx';

export const TableContainer = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const TableCell = styled.td`
  padding: 16px;
  background-color: white;
  vertical-align: top;
`;

// flex: 1;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  background-color: rgb(255, 255, 255);
`;

export const DataUserDiv = styled.div`
  display: flex;
  gap: 80px;
  background-color: rgb(255, 255, 255);
  width: 1435px;
`;

export const PlateContainer = styled.div`
  border-right: 1.5px solid #e0e0e0;
  padding: 0px 10px 0 0;
`;


export const ResponsableContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  &[data-assignable='true'] {
    cursor: pointer;
  }
  &[data-assignable='false'] {
    cursor: default;
  }
`;












export const AlertContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: hidden;
  overflow-x: scroll;
  width: 100%;

  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
  }
`;
