import { styled } from '@/styled-system/jsx';

import Text from '../Text';

export const ContainerHeaderTitleBack = styled.header`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Title = styled(Text)``;
