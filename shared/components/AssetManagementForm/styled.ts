import { styled } from '@/styled-system/jsx';

export const FormStyle = styled.form`
  margin-top: 24px;
`;
export const GroupButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  gap: 16px;
`;

export const ContainerMandatory = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 16px;
  padding: 16px 24px 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  > fieldset {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px 9px;
  }
`;

export const ContainerOptional = styled.div`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 16px;
  padding: 16px 24px 16px 24px;
  &.margin-top {
    margin-top: 16px;
  }
  > fieldset {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px 9px;
  }
`;

export const ContainerTitleLine = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  > span {
    flex: 1;
    width: 100%;
    height: 0px;
    border-bottom: 2px solid rgba(131, 131, 131, 1);
  }
  > p {
    margin: 8px 16px 8px 16px;
    color: rgba(131, 131, 131, 1) !important;
  }
`;

export const ScrollContainer = styled.div`
  margin-bottom: 12px;
`;

export const ScrollTitle = styled.div`
  margin-bottom: 8px;
`;

export const AlertsScroll = styled.div`
  display: flex;
  gap: 4px;
  overflow-x: auto;
  padding: 2px 1px;
  
  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const AlertCard = styled.div`
  flex: 0 0 180px;
  transform: scale(0.8);
  margin: -12px;  // Compensa el espacio creado por scale
`;

export const ButtonCancel = styled.button`
  width: 227px;
  height: 40px;
  border-radius: 8px;
  border: 2px solid rgba(132, 23, 23, 1);
  color: rgba(132, 23, 23, 1) !important;
  > p {
    color: rgba(132, 23, 23, 1) !important;
  }
`;

export const ButtonSave = styled.button`
  width: 227px;
  height: 40px;
  border-radius: 8px;
  background-color: rgba(14, 93, 157, 1);
  border: none;
  > p {
    color: white !important;
  }
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  width: 100%;
`;

// Formulario de documentacion:-------------

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: white;
  padding: 24px;
`;

export const InputRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

export const DocumentBlocksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 24px;
  margin-top: 16px;
`;

export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RightBlock = styled.div`
  background-color: white;
  min-height: 200px; // Espacio temporal para la futura tabla
`;