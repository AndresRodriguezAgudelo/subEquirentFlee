import { styled } from '@/styled-system/jsx';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background-color: white;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

export const IconContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #50ba50;
  border-radius: 50%;
  background-color: white;
`;

export const IconBorder = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #50ba50;
  border-radius: 50%;
  background-color: #e0e0e0;
`;



export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 16px;
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f5f5f5;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

export const ItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const IconCircle = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  background-color: #50ba50;

  & > svg {
    color: white;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #f2f6fa;
  padding: 4px 4px;
`;


