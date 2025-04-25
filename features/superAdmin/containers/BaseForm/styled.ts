import { styled } from '@/styled-system/jsx';

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const ContainerTitle = styled.div`
  margin-bottom: 24px;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #e0e0e0;
  width: 100%;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
`;

export const InfoIcon = styled.span`
  margin-left: 8px;
  cursor: help;
  color: #0066cc;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #0066cc;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid rgba(131, 131, 131, 1);
  border-radius: 8px;
  font-size: 14px;
  background-color: white;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #0066cc;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
  padding: 0 20px 20px;
`;

export const CancelButton = styled.button`
  padding: 10px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background-color: white;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }
`;
