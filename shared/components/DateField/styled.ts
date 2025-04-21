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

  .react-datepicker-wrapper,
  .react-datepicker__input-container {
    width: 100%;
  }
`;

export const EyeContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0px 5px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  stroke: #76767c;
`;

export const Eye = styled.button`
  background: transparent;
  border: none;
  padding: 0;
`;
