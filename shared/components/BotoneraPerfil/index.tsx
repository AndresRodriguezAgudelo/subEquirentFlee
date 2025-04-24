'use client';
import React, { useState, useRef, useEffect } from 'react';
import {
  Container,
  DropdownContainer,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UserInfoWrapper,
} from './styled';
import Icon from '@/shared/containers/Icons';
import Text from '@/shared/components/Text';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ProfileImage, ProfileInfo } from './styled';

export default function BotoneraPerfil() {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <Icon icon="bell" size={28} color="black" />
      <Icon icon="settings" size={28} color="black" />
      <DropdownContainer ref={dropdownRef}>
        <DropdownToggle.Root 
          onClick={toggleDropdown}
          style={{
            borderRadius: DropdownToggle.getBorderRadius(isDropdownOpen),
            backgroundColor: DropdownToggle.getBackgroundColor(isDropdownOpen),
            boxShadow: DropdownToggle.getBoxShadow(isDropdownOpen)
          }}
        >
          <UserInfoWrapper>
            <ProfileImage>
              <Image
                src="/images/FotoDePerfilTest.png"
                alt="Profile"
                width={40}
                height={40}
              />
            </ProfileImage>
            <ProfileInfo>
              <Text color="black" styleName="Caption Standard">
                ¡Bienvenido!
              </Text>
              <Text color="black" styleName="Caption Standard">
                Santiago Lopera
              </Text>
            </ProfileInfo>
          </UserInfoWrapper>
          <Icon icon="chevron-down" size={24} color="black" />
        </DropdownToggle.Root>

        {isDropdownOpen && (
          <DropdownMenu>
            <DropdownItem onClick={() => router.push('/admin/profile')}>
              <Text color="black" styleName="Body Medium">
                Mi perfil
              </Text>
            </DropdownItem>
            <DropdownItem onClick={() => router.push('/admin/login')}>
              <Text color="black" styleName="Body Medium">
                Cerrar sesión
              </Text>
            </DropdownItem>
          </DropdownMenu>
        )}
      </DropdownContainer>
    </Container>
  );
}
