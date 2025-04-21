'use client';

import { styled } from '@/styled-system/jsx';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 24px;
  background-color: #f8f8f8;
`;

export const TitleContainer = styled.div`
  width: 100%;
  padding: 16px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const IconContainer = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 5px solid #50ba50;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  background-color: #f7f7f7;
  border-radius: 8px;
  padding: 24px;
  width: 100%;
`;

export const SelectedTabsHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const TabsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px;
  background-color: #ffffff;
  border-radius: 8px;
`;

export const TabItem = styled.button`
  padding: 8px 16px;
  border-radius: 10px;
  background-color: #e36f22;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    opacity: 0.9;
  }

  .close-icon {
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
`;

export const AvailableTabsContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;

  > div {
    flex: 1;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px;
  overflow-y: auto;
  max-height: 400px;

  table {
    width: 100%;
    border-collapse: collapse;

    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #e1e1e1;
    }

    th {
      font-weight: 500;
      color: #083d69;
    }

    td {
      color: #333;
    }

    tr:hover {
      background-color: #f8f8f8;
    }
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    cursor: pointer;
  }
`;

