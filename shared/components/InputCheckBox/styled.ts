import { styled } from '@/styled-system/jsx';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.div`
  font-weight: 600;
  color: var(--colors-gray-700);
  font-size: 14px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CheckboxInput = styled.input`
  width: 16px;
  height: 16px;
  margin: 0;
  cursor: pointer;
`;

export const Label = styled.label`
  font-size: 14px;
  color: var(--colors-gray-600);
  cursor: pointer;
`;
