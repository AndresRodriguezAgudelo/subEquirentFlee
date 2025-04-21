import React from 'react';
import Text from '@/shared/components/Text';
import {
  Container,
  InfoBlock,
  StatusBlock,
  StatusRow,
  StatusDot,
} from './styled';

interface TitleModalInformationProps<T = any> {
  data: T & {
    plate?: string;
    administration?: string;
    brand?: string;
    line?: string;
  };
}

const TitleModalInformation = <T extends Record<string, any>>({
  data,
}: TitleModalInformationProps<T>) => {
  return (
    <Container>
      {/* Bloque 1: Placa */}
      <InfoBlock>
        <Text styleName="Heading 1">{data.plate || '-'}</Text>
      </InfoBlock>

      {/* Bloque 2: Estado y Administración */}
      <StatusBlock>
        <StatusRow>
          <StatusDot data-active="true" />
          <Text styleName="Body Medium">Disponible</Text>
        </StatusRow>
        <StatusRow>
          <StatusDot data-active={!!data.administration} />
          <Text styleName="Body Medium">
            {data.administration
              ? `En ${data.administration}`
              : 'Sin administración'}
          </Text>
        </StatusRow>
      </StatusBlock>

      {/* Bloque 3: Marca */}
      <InfoBlock>
        <Text styleName="Content Accent">Marca:</Text>
        <Text styleName="Body Medium">{data.brand || '-'}</Text>
      </InfoBlock>

      {/* Bloque 4: Línea */}
      <InfoBlock>
        <Text styleName="Content Accent">Línea:</Text>
        <Text styleName="Body Medium">{data.line || '-'}</Text>
      </InfoBlock>

      {/* Bloque 5: Fecha de Matrícula */}
      <InfoBlock>
        <Text styleName="Content Accent">Fecha de matrícula:</Text>
        <Text styleName="Body Medium">15/12/2023</Text>
      </InfoBlock>
    </Container>
  );
};

export default TitleModalInformation;
