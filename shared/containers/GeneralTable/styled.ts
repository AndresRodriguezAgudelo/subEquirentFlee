'use client';
import { styled } from '@/styled-system/jsx';

export const ContTable = styled.div`
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
`;

export const GroupHeadersTable = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0 0;
  border-bottom: 1px solid rgba(225, 225, 225, 1);

  > div:first-child {
    display: flex;
    gap: 24px;
    > button {
      width: 126px;
      height: 48px;
      background-color: rgba(233, 240, 244, 1);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px 8px 0 0;
      > svg {
        fill: rgba(7, 61, 104, 1);
      }
      &.active {
        background-color: rgba(2, 22, 37, 1);
        > svg {
          fill: rgba(255, 255, 255, 1);
        }
      }
    }
  }

  > div:last-child {
    gap: 8px;
    display: flex;
    > button {
      padding: 10px 16px 10px 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      &:first-child {
        > svg {
          fill: rgba(0, 0, 0, 1);
        }
      }
      &:last-child {
        > span {
          color: rgba(226, 112, 35, 1) !important;
        }
        > svg {
          fill: rgba(226, 112, 35, 1);
        }
      }
    }
  }
`;

export const ListGridContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
  padding: 8px 16px;
  font-size: 18px;
  font-weight: bold;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
`;

export const CardsWrapper = styled.div`
flex: 1;
width: 100%;
display: flex;
flex-direction: column;
gap: 16px;
padding: 16px;
margin: 10px 0px;
max-height: 400px;
background-color: rgb(255, 255, 255);
`;

export const AlertContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-y: hidden;
  overflow-x: scroll;

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

export const DataUserDiv = styled.div`
  display: flex;
  gap: 80px;
  background-color: rgb(255, 255, 255);
  width: 1435px;
`;

export const Card = styled.div`
  width: 200px;
  height: 150px;
  cursor: pointer;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`;

export const ButtonView = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #e2e8f0;
    border-radius: 4px;
  }
`;

export const DeletedButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: #2fa8e0;
  cursor: pointer;
  color: white;
`;

export const WhiteText = styled.span`
  color: white;
`;
