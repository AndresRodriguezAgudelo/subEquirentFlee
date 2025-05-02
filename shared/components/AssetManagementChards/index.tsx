'use client';

import { useState, useMemo, useEffect } from 'react';
import Text from '@/shared/components/Text';
import Icon from '@/shared/containers/Icons';
import Select from '@/shared/components/Select';
import dynamic from 'next/dynamic';
import { ResponsiveContainer } from 'recharts';
import {
  ContChard,
  ContChards,
  ContTitle,
  HeaderContent,
  SelectContainer,
  TitleContainer,
} from './styled';
import { TrendingUp } from 'lucide-react';

const RechartsComponent2 = dynamic(
  () =>
    import(
      '../../../features/superAdmin/components/AssetManagementChardsHomeAdmin/RechartsWrapper'
    ),
  {
    ssr: false,
  }
);

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/components/Card/CardComponent';

import testData from './testData.json';

interface SelectOption {
  value: string;
  label: string;
}

interface AssetManagementChardsProps {
  title: string;
  icon: string;
}

export default function AssetManagementChards({
  title,
  icon,
}: AssetManagementChardsProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [selectedTime, setSelectedTime] = useState<string>('2024-1');
  const [selectedStatus, setSelectedStatus] = useState<
    'actual' | 'mensual' | 'trimestral'
  >('actual');
  const [selectedDistribution, setSelectedDistribution] =
    useState<string>('2024-01');

  // Tipo específico para las opciones de estado
  type StatusOption = 'actual' | 'mensual' | 'trimestral';

  // Función genérica para manejo de cambios en selects
  const handleSelectChange =
    <T extends string>(setter: (value: T) => void) =>
    (option: SelectOption) => {
      setter(option.value as T);
    };

  // Función específica para el select de estado
  const handleStatusChange = (option: SelectOption) => {
    if (
      option.value === 'actual' ||
      option.value === 'mensual' ||
      option.value === 'trimestral'
    ) {
      setSelectedStatus(option.value);
    }
  };

  const verticalChartData = useMemo(() => {
    return (
      testData.chartDataBySemester[
        selectedTime as keyof typeof testData.chartDataBySemester
      ] || testData.chartDataBySemester['2024-1']
    );
  }, [selectedTime]);

  const horizontalChartData = useMemo(() => {
    return (
      testData.horizontalChartDataByMonth[
        selectedDistribution as keyof typeof testData.horizontalChartDataByMonth
      ] || testData.horizontalChartDataByMonth['2024-01']
    );
  }, [selectedDistribution]);

  const getIncremento = useMemo(() => {
    const data = verticalChartData;
    if (data.length < 2) return 0;
    const ultimoMes = data[data.length - 1].valor;
    const penultimoMes = data[data.length - 2].valor;
    const incremento = ((ultimoMes - penultimoMes) / penultimoMes) * 100;
    return incremento.toFixed(1);
  }, [verticalChartData]);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <ContTitle>
        <Icon icon={icon} size={32} />
        <Text styleName="Heading 4">{title}</Text>
      </ContTitle>
      <ContChards>
        <ContChard>
          <Card>
            <CardHeader>
              <HeaderContent>
                <TitleContainer>
                  <CardTitle>Valor Mensual</CardTitle>
                </TitleContainer>
                <SelectContainer>
                  <Select
                    key="time-select"
                    label=""
                    addNewVariable={false}
                    optionSelect={testData.options.timeOptions}
                    value={selectedTime}
                    onChangeSelect={handleSelectChange(setSelectedTime)}
                  />
                </SelectContainer>
              </HeaderContent>
            </CardHeader>
            <CardContent>
              {isClient && (
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsComponent2
                    type="custom-label-bar"
                    data={verticalChartData}
                    height={300}
                    yDataKey="valor"
                    labelDataKey="categoria"
                    colors={['#A1A1A1']}
                  />
                </ResponsiveContainer>
              )}
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="flex gap-2 font-medium leading-none">
                Incremento del {getIncremento}% este mes{' '}
                <TrendingUp className="h-4 w-4" />
              </div>
              <div className="leading-none text-muted-foreground">
                Evolución mensual del valor de activos
              </div>
            </CardFooter>
          </Card>
        </ContChard>

        <ContChard>
          <Card>
            <CardHeader>
              <HeaderContent>
                <TitleContainer>
                  <CardTitle>Estado de Activos</CardTitle>
                </TitleContainer>
                <SelectContainer>
                  <Select
                    key="status-select"
                    label=""
                    addNewVariable={false}
                    optionSelect={testData.options.statusOptions}
                    value={selectedStatus}
                    onChangeSelect={handleStatusChange}
                  />
                </SelectContainer>
              </HeaderContent>
            </CardHeader>
            <CardContent>
              {isClient && (
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsComponent2
                    type="stacked-area"
                    data={testData.stackedAreaDataByStatus[selectedStatus]}
                    height={300}
                    xDataKey="mes"
                    stackedDataKeys={['Añadidos', 'Eliminados']}
                    colors={['#2A9D90', '#E76E50']}
                  />
                </ResponsiveContainer>
              )}
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="leading-none text-muted-foreground">
                Distribución por estado de los activos
              </div>
            </CardFooter>
          </Card>
        </ContChard>

        <ContChard>
          <Card>
            <CardHeader>
              <HeaderContent>
                <TitleContainer>
                  <CardTitle>Distribución de Activos</CardTitle>
                </TitleContainer>
                <SelectContainer>
                  <Select
                    key="distribution-select"
                    label=""
                    addNewVariable={false}
                    optionSelect={testData.options.distributionOptions}
                    value={selectedDistribution}
                    onChangeSelect={handleSelectChange(setSelectedDistribution)}
                  />
                </SelectContainer>
              </HeaderContent>
            </CardHeader>
            <CardContent>
              {isClient && (
                <ResponsiveContainer width="100%" height={300}>
                  <RechartsComponent2
                    type="stacked-bar"
                    data={testData.stackedBarData}
                    xDataKey="mes"
                    stackedDataKeys={['Sin administrar', 'Administrados']}
                    colors={['#0E5D9D', '#B3DDED']}
                    height={300}
                  />
                </ResponsiveContainer>
              )}
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
              <div className="leading-none text-muted-foreground">
                Mostrando la distribución total de activos
              </div>
            </CardFooter>
          </Card>
        </ContChard>
      </ContChards>
    </>
  );
}
