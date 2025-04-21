import { styled } from '@/styled-system/jsx';

export const LoginForm = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 90%;
  height: 90%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 0.5rem;
  text-align: left;
  display: block;
`;

export const Input = styled.input`
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
`;

export const TermsContainer = styled.div`
  display: flex;
  align-items: left;
  gap: 0.5rem;
  font-size: 14px;
  text-align: left;
  margin-top: 0.5rem;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #E27023; 
  cursor: pointer;
`;

export const CheckboxPassword = styled.input`
  width: 14px;
  height: 16px;
  accent-color: #28A745; 
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  padding: 0.8rem;
  background-color: #E27023;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  margin-top: 1rem;
  
  &:hover {
    background-color: #E27023;
  }

  &:disabled {
    background-color: #E1E1E1;
    cursor: not-allowed;
  }
`;

export const ForgotPassword = styled.a`
  color: #007bff;
  font-size: 12px;
  text-decoration: none;
  margin-left: auto;
  
  &:hover {
    text-decoration: underline;
  }
`;

