'use client';

import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import Text from '@/shared/components/Text';

import {
  HeaderNavStyle,
  ListItem,
  ListNav,
  NavRightBackgroundStyle,
  NavRightBodyStyle,
  NavRightStyle,
} from './styled';
import Icon from '../Icons';

export default function NavBarRight() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const pathname = usePathname();

  if (!pathname) return null;

  // Rutas excluidas para este componente
  const excludedRoutes = ['/admin/login', '/admin/forgotPassword', '/admin/changePassword'];

  // if (pathname && pathname.split('/')?.length > 3) return null;
  if (excludedRoutes.includes(pathname)) {
    return null;
  }

  return (
    <NavRightStyle className={open ? 'open' : ''}>
      <NavRightBackgroundStyle>
        <span>
          <div onClick={handleOpen}>
            <Icon
              icon={open ? 'chevron-left' : 'chevron-right'}
              size={32}
              color="#FFFFFF"
            />
          </div>
        </span>
      </NavRightBackgroundStyle>
      <NavRightBodyStyle>
        <HeaderNavStyle>
          <Image
            src="/images/Logo_Equisoft.png"
            alt="Logo"
            width={163}
            height={42}
          />
        </HeaderNavStyle>
        <ListNav onClick={handleOpen}>
          <ListItem
            href="/admin/home"
            className={pathname === '/admin/home' ? 'isSelect' : ''}
          >
            <Icon icon="home" size={32} color="#FFFFFF" />
            <Text styleName={'Caption Accent / SemiBold'}>Inicio</Text>
          </ListItem>
          <ListItem
            href="/admin/customerManagement"
            className={pathname === '/admin/customerManagement' ? 'isSelect' : ''}
          >
            <Icon icon="user-cog" size={32} color="#FFFFFF" />
            <Text styleName={'Caption Accent / SemiBold'}>Gestión de usuarios</Text>
          </ListItem>

          <Text styleName={'Caption Accent / SemiBold'} color="white">
            GESTION DE FLOTAS Y ACTIVOS
          </Text>

          <ListItem
            href="/admin/assetFleet"
            className={pathname === '/admin/assetFleet' ? 'isSelect' : ''}
          >
            <Icon icon="car" size={32} color="#FFFFFF" />
            <Text styleName={'Caption Accent / SemiBold'}>Flota y Activos</Text>
          </ListItem>

          <ListItem href="/admin/alertsExpirations">
            <Icon icon="bell-ring" size={32} color="#FFFFFF" />
            <Text styleName={'Caption Accent / SemiBold'}>
              {' '}
              Alertas y Vencimientos{' '}
            </Text>
          </ListItem>

          <Text styleName={'Caption Accent / SemiBold'} color="white">
            MANTENIMIENTOS
          </Text>

          <ListItem href="/admin/maintenance">
            <Icon icon="alarm-check" size={32} color="#FFFFFF" />
            <Text styleName={'Caption Accent / SemiBold'}>
              {' '}
              Rutinas y Mantenimiento{' '}
            </Text>
          </ListItem>

          <ListItem href="/admin/inspections">
            <Icon icon="clipboard-list" size={32} color="#FFFFFF" />
            <Text styleName={'Caption Accent / SemiBold'}>
              {' '}
              Inspecciones Preoperacionales{' '}
            </Text>
          </ListItem>

          <ListItem href="/admin/inspections">
            <Icon icon="wrench" size={32} color="#FFFFFF" />
            <Text styleName={'Caption Accent / SemiBold'}>
              {' '}
              Gestion de Mantenimientos{' '}
            </Text>
          </ListItem>
        </ListNav>
      </NavRightBodyStyle>
    </NavRightStyle>
  );
}
