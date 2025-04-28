import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  padding: 2rem;
  z-index: 1000;
  max-width: 500px;
  width: 90%;
`;

export const ModalTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #333;
`;

export const ModalList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 1.5rem;
  max-height: 300px;
  overflow-y: auto;

  & > li {
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    label {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1rem;
      color: #555;
    }
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  button {
    padding: 0.5rem 1.25rem;
    border-radius: 8px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;

    &:first-child {
      background-color: #e0e0e0;
      color: #333;

      &:hover {
        background-color: #d5d5d5;
      }
    }

    &:last-child {
      background-color: #0070f3;
      color: white;

      &:hover {
        background-color: #005dc1;
      }

      &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
      }
    }
  }
`;

export const ContTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const ContChards = styled.div`
  display: grid;
  gap: 1.5rem;
  width: 100%;
  grid-template-columns: repeat(12, 1fr);
  min-height: 100vh;
  padding: 1rem;

  /* Fila 1: tarjetas 1, 2, 3 */
  & > *:nth-child(1),
  & > *:nth-child(2),
  & > *:nth-child(3) {
    grid-column: span 4;
  }

  /* Fila 2: tarjetas 4 y 5 */
  & > *:nth-child(4),
  & > *:nth-child(5) {
    grid-column: span 6;
  }

  /* Fila 3: tarjetas 6 y 7 */
  & > *:nth-child(6),
  & > *:nth-child(7) {
    grid-column: span 6;
  }
`;

interface ContChardProps {
  $editMode: boolean
}

export const ContChard = styled.div<ContChardProps>`
  width: 100%;
  height: 100%;
  min-height: 400px;
  cursor: grab;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  &:active {
    cursor: grabbing;
  }

  & > * {
    height: 100%;
    border-radius: 12px;
    background: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    pointer-events: ${({ $editMode }) => ($editMode ? 'none' : 'auto')};
    opacity: ${({ $editMode }) => ($editMode ? 0.5 : 1)};
  }

  ${({ $editMode }) => $editMode && `
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(200, 200, 200, 0.6);
      border-radius: 12px;
    }
  `}
`;

export const EditOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  pointer-events: auto; /* Cambiado de 'none' a 'auto' para permitir clics */
  background-color: rgba(200, 200, 200, 0.3);
  padding: 20px;
  border-radius: 8px;

  & > svg {
    color: #555;
    width: 32px;
    height: 32px;
  }

  & > span {
    color: #555;
    font-weight: bold;
    font-size: 1rem;
  }
`;

export const EditBlocker = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(200, 200, 200, 0.3);
  z-index: 5;
  pointer-events: auto; /* Mantiene la capacidad de arrastrar */
  border-radius: 12px;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const SelectContainer = styled.div`
  width: 150px;
`;

export const DragHandle = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-bottom: 8px;
  cursor: grab;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  &:active {
    cursor: grabbing;
  }
`;
