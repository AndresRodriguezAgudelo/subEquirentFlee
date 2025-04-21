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

export const InputWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

export const StyledLabel = styled.label`
  font-size: 16px;
  margin-bottom: 0.5rem;
  display: block;
  text-align: left;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  display: block;
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
`;

export const ReturnButton = styled.button`
  padding: 0.8rem;
  background-color: #FFFFFF;
  color: black;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  margin-top: 1rem;
`;


