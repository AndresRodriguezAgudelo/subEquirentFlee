'use client';
import React, { useState } from 'react';
import Text from '@/shared/components/Text';
import InputText from '@/shared/components/InputText';
import Icon from '@/shared/containers/Icons';
import {
  ProfileContainer,
  FormSection,
  ProfileImageSection,
  FormGroup,
  FormInputWrapper,
  ActionIcon,
} from './styled';
import ProfileImageUploader from './ProfileUploadImage';
import ProfileInfoCard from './ProfileInfoCard';
import { permissions } from '../Utils/permissions';

export const ProfileClient = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  return (
    <div>
      <ProfileContainer>  
        <ProfileImageSection>
          <ProfileImageUploader
            image={profileImage}
            onChange={setProfileImage}
          />
        </ProfileImageSection>

        <ProfileInfoCard
          role="Administrador"
          permissions={permissions}
        />
      </ProfileContainer>

      <FormSection>
        {/* Username */}
        <FormGroup>
          <FormInputWrapper>
            <InputText
              label="Nombre de usuario"
              value="nombre espacio"
              disabled
              tooltipData="Información del nombre de usuario"
            />
            <ActionIcon style={{ top: '55px' }}>
              <Icon size={18} icon="edit-3" />
            </ActionIcon>
          </FormInputWrapper>
        </FormGroup>

        {/* Email */}
        <FormGroup>
          <InputText label="Email" value="nombre@gmail.com" disabled />
        </FormGroup>

        {/* Password */}
        <FormGroup>
          <FormInputWrapper>
            <InputText
              label="Contraseña"
              value="************"
              type="password"
              disabled
              tooltipData="Información sobre la contraseña"
            />
            <ActionIcon style={{ top: '55px' }}>
              <Icon size={18} icon="edit-3" />
            </ActionIcon>
          </FormInputWrapper>
        </FormGroup>

        {/* Company */}
        <FormGroup>
          <FormInputWrapper>
            <InputText
              label="Empresa"
              value="Imaginamos"
              disabled
              tooltipData="Información sobre la empresa"
            />
            <ActionIcon style={{ top: '55px' }}>
              <Icon size={18} icon="eye-off" />
            </ActionIcon>
          </FormInputWrapper>
        </FormGroup>

        {/* NIT */}
        <FormGroup>
          <FormInputWrapper>
            <InputText value="NIT 321456147-3" disabled />
            <ActionIcon style={{ top: '20px' }}>
              <Icon size={18} icon="eye-off" />
            </ActionIcon>
          </FormInputWrapper>
        </FormGroup>

        {/* Address */}
        <FormGroup>
          <FormInputWrapper>
            <InputText
              value="Av. Caracas #28A - 17, Teusaquillo, Bogotá, Cundinamarca"
              disabled
            />
            <ActionIcon style={{ top: '20px' }}>
              <Icon size={18} icon="eye-off" />
            </ActionIcon>
          </FormInputWrapper>
        </FormGroup>

        {/* Phone */}
        <FormGroup>
          <FormInputWrapper>
            <InputText value="314 ### ####" disabled />
            <ActionIcon style={{ top: '20px' }}>
              <Icon size={18} icon="eye-off" />
            </ActionIcon>
          </FormInputWrapper>
        </FormGroup>
      </FormSection>
    </div>
  );
};
