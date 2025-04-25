import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
  background-color: white;
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 16px;
  color: #333;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

export const ContainerTitle = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;

export const Divider = styled.div`
  width: 75%;
  height: 2px;
  background-color: #838383;
  margin: 24px 0;
`;

export const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 24px 0;
  color: #424242;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #333;
`;

export const InfoIcon = styled.span`
  margin-left: 8px;
  color: #757575;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
  &:focus {
    outline: none;
    border-color: #0066cc;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid rgba(131, 131, 131, 1);
  border-radius: 8px;
  font-size: 14px;
  appearance: none;
  background-color: white;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23757575' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  &:focus {
    outline: none;
    border-color: #0066cc;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

export const CancelButton = styled.button`
  padding: 12px 24px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  background-color: white;
  color: #333;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;
