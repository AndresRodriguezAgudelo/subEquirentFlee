'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import Text from '@/shared/components/Text';
import DatePickerInput from '@/shared/components/DateField';
import Select from '@/shared/components/Select';
import { SwitchInput } from '@/shared/components/SwitchInput';
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
  TablePlaceholder
} from './styled';

interface FormularioAlertaVistaProps {
  percentage?: number;
}

const DynamicChart = dynamic(() => Promise.resolve(({ progress }: { progress: number }) => (
  <div style={{ position: 'relative', width: '70px', height: '70px' }}>
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
    <div style={{ 
      position: 'absolute', 
      top: '50%', 
      left: '50%', 
      transform: 'translate(-50%, -50%)'
    }}>
      <Icon icon="bell-ring" size={35} color="#011726" />
    </div>
  </div>
)), { ssr: false });

export default function FormularioAlertaVista({ percentage = 0 }: FormularioAlertaVistaProps) {
  return (
    <>
      {/* Sección Alerta */}
      <ContainerMandatory>
        <ContainerTitleLine>
          <Text styleName="Highligth Standard">Alerta</Text>
          <span />
        </ContainerTitleLine>

        <div style={{ 
          border: '1px solid #E0E0E0', 
          borderRadius: '8px', 
          padding: '16px' 
        }}>
          <AlertContainer>
            <DynamicChart progress={percentage} />
            <Text styleName="Heading 4">SOAT</Text>
            <VerticalSeparator />
            <DateGroup>
              <Text styleName="Body Medium">Vigencia desde</Text>
              <Text styleName="Body Medium">01/01/2024</Text>
            </DateGroup>
            <VerticalSeparator />
            <DateGroup>
              <Text styleName="Body Medium">Vigencia hasta</Text>
              <Text styleName="Body Medium">01/01/2025</Text>
            </DateGroup>
            <VerticalSeparator />
            <div style={{
              background: '#E0E0E0',
              padding: '8px 16px',
              borderRadius: '4px'
            }}>
              <Text styleName="Body Medium">Días</Text>
            </div>
            <SwitchContainer>
              <SwitchInput
                title=""
                option1="Activa"
                option2="Inactiva"
                initialStatus="option1"
                onChange={() => {}}
                tipData="Estado de la alerta"
              />
            </SwitchContainer>
          </AlertContainer>
        </div>
      </ContainerMandatory>

      {/* Sección Configuración */}
      <ContainerMandatory>
        <ContainerTitleLine>
          <Text styleName="Highligth Standard">Configuración</Text>
          <span />
        </ContainerTitleLine>

        <FormSection>
          <FormBlock>
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
            <DatePickerInput
              label="Fecha de expedición"
              name="fecha_expedicion"
              placeholder="Selecciona una fecha"
              onChange={() => {}}
              selected={null}
            />
            <DatePickerInput
              label="Número de documento"
              name="numero_documento"
              placeholder="Ingrese número"
              onChange={() => {}}
              selected={null}
            />
          </FormBlock>
          <InputUploadDocument
            onFileSelect={() => {}}
          />
        </FormSection>

        <SelectBlock>
          <Select
            label="Tipo de documento"
            addNewVariable={false}
            optionSelect={[
              { value: 'soat', label: 'SOAT' }
            ]}
            value="soat"
            onChangeSelect={() => {}}
          />
        </SelectBlock>

        <TablePlaceholder>
          <Text styleName="Body Medium">Futura tabla</Text>
        </TablePlaceholder>
      </ContainerMandatory>
    </>
  );
}