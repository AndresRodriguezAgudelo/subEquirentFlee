import { styled } from "@/styled-system/jsx";

export const HeaderProfileTemplate = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ContainerProfile = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin-top: 36px;
`;

export const BackgroundProfile = styled.div`
  width: 880px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

export const ContentCirculeIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
`;