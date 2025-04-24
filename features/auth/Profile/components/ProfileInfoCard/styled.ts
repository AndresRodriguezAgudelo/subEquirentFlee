import { styled } from '@/styled-system/jsx';


export const ProfileInfoSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const RoleSection = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;

export const RoleTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RoleInfo = styled.div`
  border-radius: 8px;
  padding: 16px;
`;

export const RoleTextTeal = styled.div`
  font-size: 14px;
  background-color: #00a8a1;
  color: #ffffff;
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
  font-weight: 500;
`;

export const RoleTextOrange = styled.div`
  font-size: 14px;
  background-color: #e27023;
  color: #ffffff;
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
  font-weight: 500;
`;

export const RoleTextBlue = styled.div`
  font-size: 14px;
  background-color: #0066cc;
  color: #ffffff;
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
  font-weight: 500;
`;

export const PermissionsSection = styled.div`
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 16px;
`;

export const PermissionItem = styled.div`
  margin-bottom: 12px;
`;


export const StatusBar = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

export const StatusBarItem = styled.div`
  padding: 4px 8px;
  border-radius: 24px;
  font-size: 14px;
`;

export const StatusBarItemActive = styled.div`
  padding: 4px 8px;
  border-radius: 24px;
  background-color: #f8ad4d;
  color: #ffffff;
  font-size: 14px;
`;

export const StatusBarItemInactive = styled.div`
  padding: 4px 8px;
  border-radius: 24px;
  background-color: #f0f0f0;
  color: #666666;
  font-size: 14px;
`;
