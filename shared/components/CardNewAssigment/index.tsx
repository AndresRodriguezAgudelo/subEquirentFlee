'use client';

import React from 'react';
import Text from '@/shared/components/Text';
import Icon from '@/shared/containers/Icons';
import dynamic from 'next/dynamic';
import { RadialBarChart, RadialBar, PolarGrid } from 'recharts';
import {
  Card,
  CardHeader,
  ContentContainer,
  TitleContainer,
  ChartContainer,
  InfoContainer,
  IconWrapper,
  HeaderText,
  HeaderTextWhite,
  SelectedTextContainer,
  TitleText,
  DetailText,
  CountdownContainer,
  VencimientoHeader,
  VencimientoText,
  StyledLink,
  CardContent,
  DynamicChartWrapper,
  DetailContainer,
  ButtonContainer,
  ButtonTitle,
} from './styled';
import Button from '@/shared/components/Button';

interface HeaderDataItem {
  texto1: string;
  texto2: string;
  color: string;
  textSelected: 0 | 1;
}

type DateData = {
  topTitle: string;
  topLabel: string;
  bottomTitle: string;
  bottomLabel: string;
};

type AlertaProps = {
  isNew: boolean | 'vencimiento' | 'mantenimiento' | 'botonera';
  CuentaRegresiva?: number | null;
  FechaVigencia?: string | null;
  Title?: string | null;
  ProgressNumber?: number;
  headerData?: HeaderDataItem[];
  dateData?: DateData;
  onClick?: () => void;
};

const DynamicChart = dynamic(
  () =>
    Promise.resolve(({ progress, progressColor, endAngle }: any) => (
      <RadialBarChart
        width={100}
        height={100}
        data={[{ value: 100, fill: progressColor }]}
        startAngle={300}
        endAngle={endAngle}
        innerRadius={35}
        outerRadius={45}
      >
        <PolarGrid gridType="circle" radialLines={false} />
        <RadialBar dataKey="value" background cornerRadius={30} />
      </RadialBarChart>
    )),
  { ssr: false }
);

export default function Alerta({
  isNew,
  CuentaRegresiva = null,
  FechaVigencia = null,
  Title: titleProp = null,
  ProgressNumber = 0,
  headerData = [],
  dateData,
  onClick,
}: AlertaProps) {
  if (isNew === 'mantenimiento') {
    return (
      <StyledLink href="/admin/alertsExpirations/alertForm">
        <Card>
          <CardHeader>
            <HeaderText>Preventivo</HeaderText>
            <SelectedTextContainer style={{ backgroundColor: '#011726' }}>
              <HeaderTextWhite>Básico</HeaderTextWhite>
            </SelectedTextContainer>
          </CardHeader>
          <CardContent>
            <TitleContainer>
              <TitleText>Mantenimiento preventivo</TitleText>
            </TitleContainer>
            <ContentContainer>
              <ChartContainer>
                <IconWrapper style={{ 
                  backgroundColor: 'transparent',
                  border: '2px solid #e0e0e0',
                  width: '85px',
                  height: '85px'
                }}>
                  <Icon
                    icon="plus-circle"
                    size={75}
                    color="#50ba50"
                  />
                </IconWrapper>
              </ChartContainer>
              <InfoContainer>
                <DetailText>Medida Actual</DetailText>
                <CountdownContainer>Sin Registrar</CountdownContainer>
                <DetailText>Rutina hasta</DetailText>
                <CountdownContainer>5000km</CountdownContainer>
              </InfoContainer>
            </ContentContainer>
          </CardContent>
        </Card>
      </StyledLink>
    );
  }

  if (isNew === 'vencimiento') {
    return (
      <StyledLink href="/admin/alertsExpirations/alertForm" onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}>
        <Card>
          <VencimientoHeader>
            <VencimientoText>Vencimiento</VencimientoText>
          </VencimientoHeader>
          <CardContent>
            <TitleContainer>
              <TitleText>SOAT</TitleText>
            </TitleContainer>
            <ContentContainer>
              <ChartContainer>
                <IconWrapper style={{ 
                  backgroundColor: 'transparent',
                  border: '2px solid #e0e0e0',
                  width: '85px',
                  height: '85px'
                }}>
                  <Icon
                    icon="plus-circle"
                    size={75}
                    color="#50ba50"
                  />
                </IconWrapper>
              </ChartContainer>
              <InfoContainer>
                <DetailText>Días registrados</DetailText>
                <CountdownContainer>Sin Registrar</CountdownContainer>
                <DetailText>Vigencia hasta</DetailText>
                <CountdownContainer>Sin registrar</CountdownContainer>
              </InfoContainer>
            </ContentContainer>
          </CardContent>
        </Card>
      </StyledLink>
    );
  }

  if (isNew === 'botonera') {
    return (
      <StyledLink href="/admin/alertsExpirations/alertForm">
        <Card>
          <ButtonContainer>
            <ButtonTitle>Mantenimiento Correctivo</ButtonTitle>
            <Button variant="primary">+ Crear agendamiento</Button>
            <Button variant="secondary" style={{ borderColor: '#063e69', color: '#063e69' }}>
              Registrar mantenimiento
            </Button>
          </ButtonContainer>
        </Card>
      </StyledLink>
    );
  }

  const displayTitle = isNew ? 'Nueva Alerta' : titleProp;
  const displayCuentaRegresiva = isNew
    ? 'Configurar'
    : CuentaRegresiva + ' dias';
  const displayFechaVigencia = isNew ? null : FechaVigencia;

  const calculateEndAngle = (percentage: number): number => {
    const totalAngleRange = 360;
    const angleToRotate = (percentage / 100) * totalAngleRange;
    return 300 - angleToRotate;
  };

  const getProgressColor = (progress: number) => {
    if (progress === 0) return 'transparent';
    if (progress < 30) return '#cf3c3c'; // Rojo
    if (progress < 60) return '#ded63e'; // Amarillo
    return '#50ba50'; // Verde
  };

  const progressColor = getProgressColor(ProgressNumber);
  const endAngle = calculateEndAngle(ProgressNumber);

  const getIconWrapperStyle = () => {
    return {
      backgroundColor: isNew ? 'white' : progressColor === 'transparent' ? '#cf3c3c' : 'transparent',
    };
  };

  return (
    <StyledLink href="/admin/alertsExpirations/alertForm">
      <Card>
        {headerData.map((header, index) => (
          <CardHeader key={index}>
            {header.textSelected === 0 ? (
              <>
                <SelectedTextContainer style={{ backgroundColor: header.color }}>
                  <HeaderTextWhite>{header.texto1}</HeaderTextWhite>
                </SelectedTextContainer>
                <HeaderText>{header.texto2}</HeaderText>
              </>
            ) : (
              <>
                <HeaderText>{header.texto1}</HeaderText>
                <SelectedTextContainer style={{ backgroundColor: header.color }}>
                  <HeaderTextWhite>{header.texto2}</HeaderTextWhite>
                </SelectedTextContainer>
              </>
            )}
          </CardHeader>
        ))}
        <CardContent>
          <TitleContainer>
            <TitleText>{displayTitle}</TitleText>
          </TitleContainer>
          <ContentContainer>
            <ChartContainer>
              {!isNew && (
                <DynamicChartWrapper>
                  <DynamicChart
                    progress={ProgressNumber}
                    progressColor={progressColor}
                    endAngle={endAngle}
                  />
                </DynamicChartWrapper>
              )}
              <IconWrapper style={getIconWrapperStyle()}>
                <Icon
                  icon={isNew ? 'plus-circle' : 'bell-ring'}
                  size={isNew ? 64 : 35}
                  color={
                    isNew
                      ? '#50ba50'
                      : progressColor === 'transparent'
                        ? '#ffffff'
                        : '#011726'
                  }
                />
              </IconWrapper>
            </ChartContainer>

            <InfoContainer>
              {dateData ? (
                <>
                  <DetailText>{dateData.topTitle}</DetailText>
                  <CountdownContainer>{dateData.topLabel}</CountdownContainer>
                  <DetailText>{dateData.bottomTitle}</DetailText>
                  <CountdownContainer>{dateData.bottomLabel}</CountdownContainer>
                </>
              ) : (
                <>
                  <DetailText>Cuenta Regresiva</DetailText>
                  <CountdownContainer>{CuentaRegresiva} días</CountdownContainer>
                  <DetailText>Fecha de Vigencia</DetailText>
                  <CountdownContainer>{FechaVigencia}</CountdownContainer>
                </>
              )}
            </InfoContainer>
          </ContentContainer>
        </CardContent>
      </Card>
    </StyledLink>
  );
}
