'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Text from '@/shared/components/Text';
import DatePickerInput from '@/shared/components/DateField';
import InputText from '@/shared/components/InputText';
import Select from '@/shared/components/Select';
import { SwitchInput } from '@/shared/components/SwitchInput';
import AssociatedDocumentsTable from './AssociatedDocumentsTable';
import InputUploadDocument from '@/shared/components/InputUploadDocument';
import { RadialBarChart, RadialBar, PolarGrid } from 'recharts';
import Icon from '@/shared/containers/Icons';
import {
  ContainerMandatory,
  ContainerTitleLine,
  AlertContainer,
  VerticalSeparator,
  DateGroup,
  SwitchContainer,
  FormSection,
  FormBlock,
  SelectBlock,
  TablePlaceholder,
  ChartContainer,
  IconContainer,
  DaysContainer,
  FormBlockRow
} from './styled';

interface FormularioAlertaVistaProps {
  percentage?: number;
}

const DynamicChart = dynamic(
  () =>
    Promise.resolve(({ progress }: { progress: number }) => (
      <ChartContainer>
        <RadialBarChart
          width={70}
          height={70}
          data={[{ value: 100, fill: progress > 30 ? '#50ba50' : '#F44336' }]}
          startAngle={300}
          endAngle={-60}
          innerRadius={25}
          outerRadius={35}
        >
          <PolarGrid gridType="circle" radialLines={false} />
          <RadialBar dataKey="value" background cornerRadius={30} />
        </RadialBarChart>
        <IconContainer>
          <Icon icon="bell-ring" size={30} color="#011726" />
        </IconContainer>
      </ChartContainer>
    )),
  { ssr: false }
);

export default function FormularioAlertaVista({
  percentage = 0,
}: FormularioAlertaVistaProps) {
  return (
    <>
      {/* Sección Alerta */}
      <ContainerMandatory>
        <ContainerTitleLine>
          <Text styleName="Highligth Standard">Alerta</Text>
          <span />
        </ContainerTitleLine>

        
          <AlertContainer>
            <DynamicChart progress={percentage} />
            <Text styleName="Heading 4">SOAT</Text>
            <VerticalSeparator />
            <DateGroup>
              <Text styleName="Body Small">Vigencia desde</Text>
              <Text styleName="Body Medium">--/--/----</Text>
            </DateGroup>
            <DateGroup>
              <Text styleName="Body Small">Vigencia hasta</Text>
              <Text styleName="Body Small">--/--/----</Text>
            </DateGroup>
            <VerticalSeparator />
            <DaysContainer>
              <Text styleName="Body Small" color='white'>Días</Text>
            </DaysContainer>
            <SwitchContainer>
              <SwitchInput
                title=""
                option1="Activa"
                option2="Inactiva"
                initialStatus="option1"
                onChange={() => {}}
              />
            </SwitchContainer>
          </AlertContainer>
     
      </ContainerMandatory>

      {/* Sección Configuración */}
      <ContainerMandatory>
        <ContainerTitleLine>
          <Text styleName="Highligth Standard">Configuración</Text>
          <span />
        </ContainerTitleLine>

        <FormSection>
          <FormBlock>
          <FormBlockRow>
            <DatePickerInput
              label="Vigencia desde"
              name="vigencia_desde"
              placeholder="Selecciona una fecha"
              onChange={() => {}}
              selected={null}
            />
            <DatePickerInput
              label="Vigencia hasta"
              name="vigencia_hasta"
              placeholder="Selecciona una fecha"
              onChange={() => {}}
              selected={null}
            />
          </FormBlockRow>
          <FormBlockRow>
            <DatePickerInput
              label="Fecha de expedición"
              name="fecha_expedicion"
              placeholder="Selecciona una fecha"
              onChange={() => {}}
              selected={null}
            />
            <InputText
              label="Tipo de documento"
              name="tipo_documento"
              placeholder="Ingrese tipo de documento"
              tooltipData='prueba prueba prueba'
            /> 
          </FormBlockRow>
          </FormBlock>
          <InputUploadDocument onFileSelect={() => {}} />
        </FormSection>

        <SelectBlock>
          <Select
            label="Tipo de documento"
            addNewVariable={false}
            optionSelect={[{ value: 'soat', label: 'SOAT' }]}
            value="soat"
            onChangeSelect={() => {}}
          />
        </SelectBlock>

        <AssociatedDocumentsTable />
      </ContainerMandatory>
    </>
  );
}