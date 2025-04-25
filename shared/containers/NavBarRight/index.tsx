'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
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

// Custom hook to listen for localStorage changes
const useLocalStorage = (key: string, initialValue: string | null = null) => {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue;
    
    try {
      const item = localStorage.getItem(key);
      return item || initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Function to update value in localStorage and state
  const setValue = (value: string | null) => {
    try {
      if (value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
      }
      setStoredValue(value);
    } catch (error) {
      console.error(error);
    }
  };

  // Listen for changes in other tabs/windows
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key) {
        setStoredValue(e.newValue);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key]);

  return [storedValue, setValue] as const;
};

export default function NavBarRight() {
  const [open, setOpen] = useState(false);
  const [userRole, setUserRole] = useLocalStorage('role');
  
  // Force re-check of role on mount and focus
  useEffect(() => {
    const handleFocus = () => {
      const currentRole = localStorage.getItem('role');
      if (currentRole !== userRole) {
        setUserRole(currentRole);
      }
    };
    
    window.addEventListener('focus', handleFocus);
    handleFocus(); // Check on mount
    
    return () => window.removeEventListener('focus', handleFocus);
  }, [userRole, setUserRole]);
  
  const handleOpen = () => {
    setOpen(!open);
  };
  const pathname = usePathname();

  if (!pathname) return null;

  const excludedRoutes = ['/admin/login', '/admin/forgotPassword', '/admin/changePassword'];

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
          
          {/* Admin-only sections */}
          {userRole === 'admin' && (
            <>
              <ListItem
                href="/admin/userManagement"
                className={pathname === '/admin/userManagement' ? 'isSelect' : ''}
              >
                <Icon icon="user-cog" size={32} color="#FFFFFF" />
                <Text styleName={'Caption Accent / SemiBold'}>Gestión de usuarios</Text>
              </ListItem>
              <ListItem
                href="/admin/customerManagement"
                className={pathname === '/admin/customerManagement' ? 'isSelect' : ''}
              >
                <Icon icon="users" size={32} color="#FFFFFF" />
                <Text styleName={'Caption Accent / SemiBold'}>Gestión de clientes</Text>
              </ListItem>
            </>
          )}

          {/* Non-admin sections */}
          {userRole === 'client' && (
            <>
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
            </>
          )}
        </ListNav>
      </NavRightBodyStyle>
    </NavRightStyle>
  );
}
