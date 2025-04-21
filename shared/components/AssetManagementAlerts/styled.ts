


import { styled } from '@/styled-system/jsx';

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #f9f9f9; /* Fondo del contenedor */
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
  display: flex;
  gap: 16px;
  padding: 16px;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const Card = styled.div`
  width: 100px;
  height: 100px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  flex-shrink: 0; /* Evita que las cards se reduzcan */
`;
