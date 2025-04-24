import { styled } from '@/styled-system/jsx';

export const ContainerLabel = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

export const ContInput = styled.div`
  position: relative;
  background-color: transparent;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  > span {
    color: rgba(131, 131, 131, 1) !important;
  }
`;

export const Input = styled.input`
  font-size: 14px;
  width: 100%;
  height: 100%;
  padding: 4px 8px;
  box-sizing: border-box;
  border-radius: 8px;
  color: rgba(0, 0, 0, 1);
  background-color: white;
  border: 1px solid rgba(131, 131, 131, 1);
  height: 42px;
  &[type='date'],
  &[type='time'] {
    -webkit-appearance: none;
  }
  &[data-type='password'] {
    padding-right: 32px;
  }
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: fit-content;
  gap: 6px;
  display: flex;
  flex-direction: column;
`;

export const EyeContainer = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  padding: 0px 5px;
  display: flex;
  align-items: center;
  color: #76767c;
  z-index: 10;
`;

export const Eye = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  z-index: 100;
  cursor: pointer;
`;
