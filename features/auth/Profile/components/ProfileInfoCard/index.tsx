'use client';

import React from 'react';
import Text from '@/shared/components/Text';
import Icon from '@/shared/containers/Icons';
import {
  ProfileInfoSection,
  RoleSection,
  RoleTitle,
  RoleInfo,
  RoleTextOrange,
  PermissionsSection,
  PermissionItem,
  StatusBar,
  StatusBarItem,
} from './styled';

const permissionStyles = {
  'Flota y activos': {
    background: '#E1F5E1',
    color: '#083C08',
  },
  'Alertas y vencimientos': {
    background: '#FFECDF',
    color: '#5B2806',
  },
  'Rutinas de mantenimientos': {
    background: '#EFEFEF',
    color: '#021625',
  },
  'Gestión de mantenimientos': {
    background: '#E9F0F4',
    color: '#021625',
  },
  'Gestión de usuarios': {
    background: '#DDF1F9',
    color: '#012635',
  },
};

const getPermissionStyle = (name: string) => {
  const normalizedPermission = name.toLowerCase().replace(/[^a-z\s]/g, '');
  const style = Object.entries(permissionStyles).find(([key]) => 
    key.toLowerCase().replace(/[^a-z\s]/g, '') === normalizedPermission
  );
  return style ? style[1] : {
    background: '#EFEFEF',
    color: '#021625',
  };
};

interface ProfileInfoCardProps {
  role: string;
  permissions: Array<Array<{
    name: string;
    active: boolean;
  }>>;
}

const ProfileInfoCard: React.FC<ProfileInfoCardProps> = ({ role, permissions }) => {
  return (
    <ProfileInfoSection>
      <div>
        <RoleTitle>
          <Text styleName="Heading 4">Rol</Text>
          <Icon size={24} icon="alert-circle" color="#666666" />
        </RoleTitle>
        <RoleSection>
          <RoleInfo>
            <RoleTextOrange>{role}</RoleTextOrange>
          </RoleInfo>
        </RoleSection>
      </div>

      <PermissionsSection>
        {permissions.map((group, index) => (
          <PermissionItem key={index}>
            <StatusBar>
              {group.map((perm, i) => (
                <StatusBarItem
                  key={i}
                  style={getPermissionStyle(perm.name)}
                >
                  {perm.name}
                </StatusBarItem>
              ))}
            </StatusBar>
          </PermissionItem>
        ))}
      </PermissionsSection>
    </ProfileInfoSection>
  );
};

export default ProfileInfoCard;
