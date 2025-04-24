import React, { useState } from 'react';
import ProfileImageUploader from '../ProfileUploadImage';
import { ContainerProfileAdmin, RoleTitle, RoleSection, ContainerButton, ActionButton } from './styled';
import Text from '@/shared/components/Text';
import Icon from '@/shared/containers/Icons';
import { RoleInfo, RoleTextOrange } from '../ProfileInfoCard/styled';
import InputText from '@/shared/components/InputText';
import { ActionIcon, FormInputWrapper } from '../ProfileClient/styled';
import { EditName } from '../Modals/EditName';
import { EditDocument } from '../Modals/EditDocument';
import { ConfirmPassword } from '../Modals/ConfirmPassword';

export const ProfileAdmin = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isOpenName, setIsOpenName] = useState(false);
  const [isOpenDocument, setIsOpenDocument] = useState(false);
  const [isOpenConfirmPassword, setIsOpenConfirmPassword] = useState(false);
  const closeModal = () => {
    setIsOpenName(false);
    setIsOpenDocument(false);
    setIsOpenConfirmPassword(false);
  };
  
  const role = 'Administrador';

  return (
    <ContainerProfileAdmin>
      <ProfileImageUploader image={profileImage} onChange={setProfileImage} />

      <RoleTitle>
        <Text
          style={{
            fontSize: '18px',
            fontWeight: '600',
          }}
        >
          Rol
        </Text>
        <Icon size={18} icon="alert-circle" color="#666666" />
      </RoleTitle>
      <RoleSection>
        <RoleInfo>
          <RoleTextOrange>{role}</RoleTextOrange>
        </RoleInfo>
      </RoleSection>
      <FormInputWrapper>
        <InputText
          label="Nombre de usuario"
          value="nombre usuario"
          type="text"
          disabled
          tooltipData="Información sobre el nombre de usuario"
        />
        <ActionIcon style={{ top: '55px' }} onClick={() => setIsOpenName(true)}>
          <Icon size={25} icon="edit-3" />
        </ActionIcon>
      </FormInputWrapper>
      <InputText label="Email" value="nombre@gmail.com" type="text" disabled />
      <FormInputWrapper>
        <InputText
          label="No. documento"
          value="123456789"
          type="text"
          disabled
          tooltipData="Información sobre el número de documento"
        />
        <ActionIcon style={{ top: '55px' }} onClick={() => setIsOpenDocument(true)}>
          <Icon size={25} icon="edit-3" />
        </ActionIcon>
      </FormInputWrapper>
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
      <ContainerButton>
        <ActionButton
          type="button"
          data-variant="secondary"
        >
         Cancelar
        </ActionButton>
        <ActionButton
          type="button"
          data-variant="primary"
        >
         Guardar usuario
        </ActionButton>
      </ContainerButton>
      <EditName isOpen={isOpenName} onClose={closeModal} />
      <EditDocument isOpen={isOpenDocument} onClose={closeModal} />
      <ConfirmPassword isOpen={isOpenConfirmPassword} onClose={closeModal} />
    </ContainerProfileAdmin>
  );
};
