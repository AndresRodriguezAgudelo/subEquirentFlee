import { styled } from '@/styled-system/jsx';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 24px;
  width: 100%;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 0 20px 0;
  border-bottom: 1px solid #e0e0e0;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 3px solid #50ba50;
  border-radius: 50%;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 0 20px 0;
  border-bottom: 1px solid #e0e0e0;
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  width: 100%;
  > * {
    flex: 1;
  }
`;

export const RowInputGroup = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
  width: 100%;
  > * {
    flex: 1;
    min-width: 0; /* Previene que los elementos se desborden */
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const CircleSeparator = styled.div`
  width: 8px;
  height: 8px;
  border: 2px solid #006a94;
  border-radius: 50%;
  background-color: transparent;
`;

export const FutureTabsPlaceholder = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  color: #666666;
`;

export const ThirdSection = styled.div`
  min-height: 200px;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

export const SectionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: #e0e0e0;
  }
`;

export const SubSectionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 24px 0;

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: #e0e0e0;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 32px;
`;