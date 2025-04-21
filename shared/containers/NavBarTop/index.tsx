'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import BotoneraPerfil from '@/shared/components/BotoneraPerfil';
import { TopHeaderStyle } from './styled';

export default function NavBarTop() {
  const pathname = usePathname();

  if (!pathname) return null;

  // Rutas excluidas para este componente
  const excludedRoutes = ['/admin/login', '/admin/forgotPassword', '/admin/changePassword'];
  
  // No renderizar este componente si estamos en el login
  if (excludedRoutes.includes(pathname)) {
    return null;
  }

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
