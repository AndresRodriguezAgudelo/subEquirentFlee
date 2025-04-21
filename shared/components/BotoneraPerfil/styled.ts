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
