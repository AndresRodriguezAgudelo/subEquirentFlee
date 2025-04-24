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
import ProfileImageUploader from '../ProfileUploadImage';
import ProfileInfoCard from '../ProfileInfoCard';
import { permissions } from '../../Utils/permissions';
import { EditName } from '../Modals/EditName';
import { ConfirmPassword } from '../Modals/ConfirmPassword';


export const ProfileClient = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isOpenName, setIsOpenName] = useState(false);
  const [isOpenConfirmPassword, setIsOpenConfirmPassword] = useState(false);
  const closeModal = () => {
    setIsOpenName(false);
    setIsOpenConfirmPassword(false);
  };

  return (
    <div>
      <ProfileContainer>
        <ProfileImageSection>
          <ProfileImageUploader
            image={profileImage}
            onChange={setProfileImage}
          />
        </ProfileImageSection>

        <ProfileInfoCard role="Administrador" permissions={permissions}/>
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
            <ActionIcon style={{ top: '55px' }} onClick={() => setIsOpenName(true)}>
              <Icon size={25} icon="edit-3" />
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
              type="text"
              disabled
              tooltipData="Información sobre la contraseña"
            />
            <ActionIcon style={{ top: '55px' }} onClick={() => setIsOpenConfirmPassword(true)}>
              <Icon size={25} icon="edit-3" />
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
              type="password"
            />
          </FormInputWrapper>
        </FormGroup>

        {/* NIT */}
        <FormGroup>
          <FormInputWrapper>
            <InputText
              value="NIT 321456147-3"
              disabled
              type="password"
            />
          </FormInputWrapper>
        </FormGroup>

        {/* Address */}
        <FormGroup>
          <FormInputWrapper>
            <InputText
              value="Av. Caracas #28A - 17, Teusaquillo, Bogotá, Cundinamarca"
              disabled
              type="password"
            />
          </FormInputWrapper>
        </FormGroup>

        {/* Phone */}
        <FormGroup>
          <FormInputWrapper>
            <InputText
              value="314 ### ####"
              disabled
              type="password"
            />
          </FormInputWrapper>
        </FormGroup>
      </FormSection>
      <EditName isOpen={isOpenName} onClose={closeModal} />
      <ConfirmPassword isOpen={isOpenConfirmPassword} onClose={closeModal} />
    </div>
  );
};
