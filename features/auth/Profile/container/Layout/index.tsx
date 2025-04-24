import React from 'react';
import {
  HeaderProfileTemplate,
  BackgroundProfile,
  ContainerProfile,
  ContentCirculeIcon,
} from './styled';
import Text from '@/shared/components/Text';
import Icon from '@/shared/containers/Icons';

export const LayoutProfile = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <HeaderProfileTemplate>
        <ContentCirculeIcon>
          <Icon size={32} icon="user" color="#006A93" />
        </ContentCirculeIcon>
        <Text style={{ fontSize: '40px', fontWeight: '600' }}>Mi perfil</Text>
      </HeaderProfileTemplate>
      <ContainerProfile>
        <BackgroundProfile>{children}</BackgroundProfile>
      </ContainerProfile>
    </>
  );
};
