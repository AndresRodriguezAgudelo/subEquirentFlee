import { styled } from '@/styled-system/jsx';

export const WrapperStyled = styled.main`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 110px 1fr;
  min-height: 100vh;
  background-color: rgba(248, 248, 248, 1);
  grid-template-areas:
    'NavBarRight NavBarTop'
    'NavBarRight Body';
`;

export const WrapperBodyStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  z-index: 1;
  padding: 32px 70px 32px 70px;
  position: relative;
  grid-area: Body;




  @media (max-width: 950px) {
    padding: 2px 14px;
  }
  
  




`;
