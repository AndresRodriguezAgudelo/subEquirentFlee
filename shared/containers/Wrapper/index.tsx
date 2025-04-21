import { ReactNode } from 'react';

import { WrapperBodyStyled, WrapperStyled } from './styled';
import NavBarRight from '../NavBarRight';
import NavBarTop from '../NavBarTop';

interface WrapperProps {
  children: ReactNode;
}
export default function Wrapper({ children }: Readonly<WrapperProps>) {
  return (
    <WrapperStyled>
      <NavBarTop />
      <NavBarRight />
      <WrapperBodyStyled>{children}</WrapperBodyStyled>
    </WrapperStyled>
  );
}
