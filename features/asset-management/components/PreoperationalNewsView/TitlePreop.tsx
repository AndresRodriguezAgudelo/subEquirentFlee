'use client';

import React from 'react';
import Icon from '@/shared/containers/Icons';
import {
  TitleContainer,
  TitleIcon,
  TitleText
} from './styled';

export default function TitlePreop() {
  return (
    <TitleContainer>
      <TitleIcon>
        <Icon icon="clipboard-list" size={34} color="#006a94" />
      </TitleIcon>
      <TitleText>Preoperacional y Novedades</TitleText>
    </TitleContainer>
  );
}
