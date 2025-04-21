'use client';

import { styled } from '@/styled-system/jsx';

export const ModalContainer = styled.div`
  padding: 24px;
  background-color: white;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const ContentContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  
  @media (max-width: 950px) {
  
    flex-direction: column;
    text-align: center;
  }
`;

export const IconContainer = styled.div`
  font-size: 48px;
  color: #012736;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #012736;
  margin: 0;
  font-weight: 700;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;
  margin-top: 8px;
`;

export const DetailRow = styled.div`
  display: flex;
  gap: 8px;
  
  @media (max-width: 950px) {
    justify-content: center;
  }
`;

export const DetailLabel = styled.span`
  font-weight: bold;
  color: #012736;
  font-size: 14px;
`;

export const DetailValue = styled.span`
  color: #4a5568;
  font-size: 14px;
`;
