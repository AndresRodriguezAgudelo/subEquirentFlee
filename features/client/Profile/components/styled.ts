import { styled } from '@/styled-system/jsx';

export const ProfileContainer = styled.div`
  display: flex;
  gap: 74px;
  width: 100%;
  padding: 16px;
`;

export const FormSection = styled.section`
  width: 100%;
  max-width: 1000px;
  margin: 30px auto;
  padding: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

export const FormInputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;
`;

export const ActionIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileImageSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const ImageUploadCircle = styled.div`
  width: 254px;
  height: 254px;
  border-radius: 50%;
  background-color: #E1E1E1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: visible;
  z-index: 1;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  z-index: 1;
  position: relative;
`;

export const UploadButton = styled.label`
  position: absolute;
  bottom: 10px;
  left: 80%;
  transform: translateX(-50%);
  background-color: #0e5d9d;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  overflow: visible;
`;







// export const RoleText = styled.div`
//   font-size: 14px;
//   color: #ffffff;
//   padding: 4px 8px;
//   border-radius: 4px;
//   display: inline-block;
//   font-weight: 500;
// `;








