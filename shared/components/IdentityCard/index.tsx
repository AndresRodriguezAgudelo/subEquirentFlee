'use client';

import React from 'react';
import {
  Card,
  TopSection,
  HeaderInfo,
  StatusInfo,
  BottomSection,
  Divider,
  CarInfo,
  SpecsInfo,
  StatusDot,
  StatusRow,
  StatusContainer,
} from './styled';
import Text from '@/shared/components/Text';

interface IdentityCardProps {
  plate: string;
  id: number;
  status: string;
  administration: string;
  brand: string;
  line: string;
  model: string;
  kilometers?: number;
  class: string;
  responsable: string;
  chassisNumber: string;
}

export default function IdentityCard({
  plate,
  id,
  status,
  administration,
  brand,
  line,
  model,
  kilometers = 0,
  class: carClass,
  responsable,
  chassisNumber,
}: IdentityCardProps) {
  return (
    <Card>
      <TopSection>
        <HeaderInfo>
          <Text styleName="Heading 5">{plate}</Text>
          <Text color="#7E7E7E">ID: {id}</Text>
        </HeaderInfo>
        <StatusInfo>
          <StatusRow>
            <StatusContainer>
              <StatusDot />
              <Text>
                {status === 'active' ? 'Disponible' : 'No disponible'}
              </Text>
            </StatusContainer>
          </StatusRow>
          <StatusRow>
            <StatusContainer>
              <StatusDot />
              <Text>
                {administration ? 'En Administración' : 'Sin Administración'}
              </Text>
            </StatusContainer>
          </StatusRow>
        </StatusInfo>
      </TopSection>

      <BottomSection>
        <CarInfo>
          <Text>{brand}</Text>
          <Text>{line}</Text>
          <Text>{model}</Text>
        </CarInfo>

        <Divider />

        <SpecsInfo>
          <Text>{kilometers.toLocaleString()} km</Text>
          <Text>{carClass}</Text>
        </SpecsInfo>
      </BottomSection>
    </Card>
  );
}
