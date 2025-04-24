import { styled } from '@/styled-system/jsx';

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

export const ProfileImageSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
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