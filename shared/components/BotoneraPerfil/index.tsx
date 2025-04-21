'use client';

import React from 'react';
import { Container, ProfileInfo, ProfileImage } from './styled';
import Icon from '@/shared/containers/Icons';
import Text from '@/shared/components/Text';
import Image from 'next/image';

export default function BotoneraPerfil() {
  return (
    <Container>
      <Icon icon="bell" size={28} color="black" />
      <Icon icon="settings" size={28} color="black" />
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
          Perfil
        </Text>
        <Text color="black" styleName="Caption Standard">
          Andres Rodriguez
        </Text>
      </ProfileInfo>
    </Container>
  );
}
