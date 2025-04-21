import Link from 'next/link';

import { styled } from '@/styled-system/jsx';

export const NavRightStyle = styled.section`
  grid-area: NavBarRight;
  max-height: 100vh;
  height: 100vh;
  width: 79px;
  z-index: 2;
  position: relative;
  top: 0;





  @media (max-width: 950px) {
    display: none;
  }






  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    backdrop-filter: blur(0px);
    transition:
      background 1s,
      backdrop-filter 0.3s;
    visibility: 0;
    z-index: -2;
    pointer-events: none;
  }
  &.open {
    z-index: 3;
    &::before {
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(8px);
      visibility: 1;
      pointer-events: all;
    }
    & > div:nth-child(1),
    & > div:nth-child(2) {
      left: 0;
    }
  }
`;

export const NavRightBackgroundStyle = styled.div`
  --size-button: 80px;
  transition: left 1s;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-width: 400px;
  left: -321px;
  span {
    width: 80px;
    height: 80px;
    position: absolute;
    top: 0;
    margin: auto;
    right: calc((var(--size-button) / 2) * -1);
    border-radius: 50%;
    bottom: 0;
    padding: 16px;
    z-index: 1;
    > div {
      height: 100%;
      width: 100%;
      background: rgba(2, 22, 37, 1);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 2;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      right: calc(var(--size-button) / 2.3);
      width: calc(400px + 5px);
      height: calc(var(--size-button) / 1.4);
      background-color: rgba(2, 22, 37, 1);
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      border-left: none;
      mask-image: radial-gradient(
        circle at right,
        transparent 0,
        transparent 38px,
        black 39px
      );
    }
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(50% - (var(--size-button) / 3.5));
    background-color: rgba(2, 22, 37, 1);
    border-radius: 0 0 calc(var(--size-button) / 2) 0;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(50% - (var(--size-button) / 3.5));
    background-color: rgba(2, 22, 37, 1);
    border-radius: 0 40px 0 0;
  }
`;

export const NavRightBodyStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100%;
  min-width: 400px;
  padding: 0px 0;
  left: -321px;
  position: fixed;
  transition: left 1s;
  pointer-events: none;
`;

export const HeaderNavStyle = styled.div`
  pointer-events: all;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 42px;
  width: 100%;
  margin: 34px 0 0 24px;
  padding: 0 23px 0 88;
  position: relative;
`;

export const ListNav = styled.div`
  pointer-events: all;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: fit-content;
  width: 70%;
  /* border: 1px solid blue; */
  gap: 15px;
  margin: 100px 0 0 30px;
`;

export const ListItem = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 49px;
  padding: 8px 16px;
  gap: 12px;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  span {
    color: #fff !important;
  }
  &:hover,
  &.isSelect {
    background: rgba(255, 255, 255, 0.16);
    &::after {
      display: block;
    }
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -32px;
    width: 16px;
    height: 100%;
    background: rgba(46, 168, 224, 1);
    border-radius: 0 8px 8px 0;
    display: none;
  }
`;
