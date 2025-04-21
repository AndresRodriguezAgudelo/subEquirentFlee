import styled from 'styled-components';

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
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
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.02);
  border-radius: 8px 8px 0 0;
  cursor: grab;
  opacity: 0.5;
  transition: all 0.2s ease;

  &:hover {
    opacity: 1;
    background: rgba(0, 0, 0, 0.05);
  }

  &:active {
    cursor: grabbing;
    background: rgba(0, 0, 0, 0.08);
  }

  svg {
    color: rgba(0, 0, 0, 0.5);
  }
`;
