'use client';

import React from 'react';
import Image from 'next/image';
import BotoneraPerfil from '@/shared/components/BotoneraPerfil';
import { TopHeaderStyle } from './styled';

export default function NavBarTop() {
  return (
    <TopHeaderStyle
      style={{
        height: '80px',
      }}
    >
      <div>
        <Image
          src="/images/LogoDeColor.png"
          alt="Logo"
          width={150}
          height={44}
        />
      </div>

      <BotoneraPerfil />
    </TopHeaderStyle>
  );
}
