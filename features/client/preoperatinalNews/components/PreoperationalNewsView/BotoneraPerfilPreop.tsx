'use client';

import React, { useState } from 'react';
import Icon from '@/shared/containers/Icons';
import {
  BotoneraPerfilContainer,
  BotoneraHeader,
  ProfileInfo,
  ProfileLabel,
  ProfileName,
  ArrowIcon,
  OptionsContainer,
  Option
} from './styled';

export default function BotoneraPerfilPreop() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <BotoneraPerfilContainer onClick={toggleOpen}>
      <BotoneraHeader>
        <ProfileInfo>
          <ProfileLabel>Perfil</ProfileLabel>
          <ProfileName>Alvaro Lopez</ProfileName>
        </ProfileInfo>
        <ArrowIcon>
          <Icon icon="chevron-down" size={20} color="#012736" />
        </ArrowIcon>
      </BotoneraHeader>

      {isOpen && (
        <OptionsContainer>
          <Option>
            <Icon icon="user" size={16} color="#012736" />
            <span>Mi Perfil</span>
          </Option>
          <Option>
            <Icon icon="log-out" size={16} color="#012736" />
            <span>Cerrar Sesión</span>
          </Option>
        </OptionsContainer>
      )}
    </BotoneraPerfilContainer>
  );
}
