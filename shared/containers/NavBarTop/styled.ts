import { styled } from '@/styled-system/jsx';

export const TopHeaderStyle = styled.header`
  grid-area: NavBarTop;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 0 10px;





  @media (max-width: 950px) {
  justify-content: center;
  }






`;
