import { styled } from '@/styled-system/jsx';

export const Container = styled.div`
  background-color: white;
  width: 400px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  border-radius: 8px;
  padding: 0 24px;

  @media (max-width: 950px) {
    display: none;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

export const ProfileImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #ffffff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  width: 320px;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const StyledDropdownToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  cursor: pointer;
`;

export const DropdownToggle = {
  Root: StyledDropdownToggle,
  getBorderRadius: (isOpen: boolean) => isOpen ? '8px 8px 0 0' : '8px',
  getBackgroundColor: (isOpen: boolean) => isOpen ? '#F8F8F8' : 'transparent',
  getBoxShadow: (isOpen: boolean) => isOpen ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none'
};

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  background-color: #f8f8f8;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
  overflow: hidden;
`;

export const DropdownItem = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;
