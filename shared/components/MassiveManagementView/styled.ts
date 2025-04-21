import { styled } from '@/styled-system/jsx';

export const GeneralContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin: 40px 0 0 0;
`;

export const Container = styled.div`
  gap: 24px;
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: auto;
  max-width: 70%;
`;

export const TopBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 700px;
  align-items: center;
  gap: 48px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px 36px;
`;

export const UploadSection = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  height: 170px;
`;

export const ButtonsSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const DownloadButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 200px;
  height: 44px;
  border: none;
  background: transparent;
  > p {
    color: #006a94;
  }
  > svg {
    fill: #006a94;
  }
`;

export const UpdateButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 200px;
  height: 44px;
  border-radius: 8px;
  border: none;
  background: #2fa8e0;
  > p {
    color: white !important;
  }
`;

export const BottomBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: auto;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: auto;
  gap: 8px;
  margin-bottom: 16px;
`;
