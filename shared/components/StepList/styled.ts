'use client';
import { styled } from '@/styled-system/jsx';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
  background-color: #f7f7f7;
  transition: all 0.3s ease;

  &[data-inmodal="true"] {
    transform: scale(0.9);
  }

  &[data-inmodal="false"] {
    transform: scale(1);
    margin: 36px 0;
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  gap: 16px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 8px;
`;

export const ButtonBack = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 32px;
  border-radius: 10px;
  background-color: rgba(233, 240, 244, 1);
  border: none;
  transition: background-color 0.3s;
  padding: 0 6px;
  &.active {
    gap: 8px;
    background-color: rgba(14, 93, 157, 1);
    > p {
      color: white !important;
    }
    > svg {
      fill: white !important;
    }
  }
  > p {
    color: rgba(80, 80, 80, 1) !important;
    min-width: 20px;
  }
  > svg {
    fill: rgba(80, 80, 80, 1) !important;
  }
`;

export const ButtonNext = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 32px;
  border-radius: 10px;
  background-color: rgba(233, 240, 244, 1);
  border: none;
  transition: background-color 0.3s;
  padding: 0 6px;
  &.active {
    gap: 8px;
    background-color: rgba(14, 93, 157, 1);
    > p {
      color: white !important;
    }
    > svg {
      fill: white !important;
    }
  }
  > p {
    color: rgba(80, 80, 80, 1) !important;
    min-width: 20px;
  }
  > svg {
    fill: rgba(80, 80, 80, 1) !important;
  }
`;

export const Circle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(233, 240, 244, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(80, 80, 80, 1);
  
  &.active {
    background-color: rgba(14, 93, 157, 1);
    color: white !important;
  }
`;