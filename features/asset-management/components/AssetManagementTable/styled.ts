import Link from 'next/link';
import { styled } from '@/styled-system/jsx';
import { ComponentProps } from 'react';

export const ContTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
`;

export const GroupButtons = styled.div`
  width: auto;
  display: flex;
  gap: 24px;
  justify-content: flex-start;
  align-items: center;
`;

export const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 277px;
  height: 44px;
  border-radius: 8px;
  background: rgba(81, 187, 81, 1);
  > p {
    color: rgba(255, 255, 255, 1) !important;
  }
  > svg {
    fill: rgba(255, 255, 255, 1);
  }

  &.maintenance {
    background: #1e5e9e;
  }
`;

export const ButtonSecondary = styled(Link)`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 207px;
  height: 44px;
  border-radius: 8px;
  border: 2px solid rgba(8, 60, 8, 1);
  text-decoration: none;
  > p {
    color: rgba(8, 60, 8, 1);
  }
  > svg {
    fill: rgba(8, 60, 8, 1);
  }
`;

export const DownloadButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 207px;
  height: 44px;
  border-radius: 8px;
  border: 2px solid rgba(8, 60, 8, 1);
  background: transparent;
  > p {
    color: rgba(8, 60, 8, 1);
  }
  > svg {
    fill: rgba(8, 60, 8, 1);
  }
`;
