'use client';

import React, { useState } from 'react';
import { type ChangeHandler } from 'react-hook-form';
import dynamic from 'next/dynamic';
import Text from '@/shared/components/Text';
import Select from '@/shared/components/Select';
import InputText from '@/shared/components/InputText';
import Button from '@/shared/components/Button';
import Icon from '@/shared/containers/Icons';
import GuardarAlertaModal from '../../containers/Modales/GuardarAlerta';
import {
  ContainerMandatory,
  ContainerTitleLine,
  AlertContainer,
  FormSection,
  FormBlock,
  SelectBlock,
  ButtonContainer,
  IconContainer,
} from './styled';

const DynamicChart = dynamic(
  () =>
    Promise.resolve(({ progress }: { progress: number }) => (
      <IconContainer>
        <div className="circle-border" />
        <Icon icon="bell-ring" size={35} color="#011726" />
      </IconContainer>
    )),
  { ssr: false }
);

export default function CreateAlertView() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleChange: ChangeHandler = async () => {
    // Handle input change
  };

  const handleSave = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <GuardarAlertaModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      <div style={{ padding: '32px', backgroundColor: '#ffffff', marginTop: '35px' }}>
        {/* Sección Superior - Nombre del Vencimiento */}
        <ContainerMandatory style={{ marginBottom: '32px' }}>
          <div
            style={{
              border: '1px solid #E0E0E0',
              borderRadius: '8px',
              padding: '24px',
              backgroundColor: '#ffffff',
            }}
          >
            <AlertContainer>
              <DynamicChart progress={0} />
              <InputText
                label=""
                name="nombreVencimiento"
                placeholder="Nombre del vencimiento"
                onChange={handleChange}
                value=""
              />
            </AlertContainer>
          </div>
        </ContainerMandatory>

        {/* Sección de Alerta */}
        <ContainerMandatory>
          <ContainerTitleLine style={{ marginBottom: '24px' }}>
            <Text styleName="Highligth Standard">Alerta</Text>
            <span />
          </ContainerTitleLine>

          <FormSection>
            <FormBlock style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
              <Select
                label="Vigencia"
                description="Tiempo de validez del documento"
                tooltipData="Define el período durante el cual el documento permanecerá vigente"
                addNewVariable={false}
                optionSelect={[
                  { value: '5m', label: '5 meses' },
                  { value: '1y', label: '1 año' },
                  { value: '2y', label: '2 años' },
                  { value: '5y', label: '5 años' },
                ]}
                value=""
                onChangeSelect={() => {}}
              />
              <Select
                label="Inicio de alerta"
                description="Primera notificación"
                tooltipData="Define cuándo se enviará la primera notificación antes del vencimiento"
                addNewVariable={false}
                optionSelect={[
                  { value: '30', label: '30 días antes' },
                  { value: '15', label: '15 días antes' },
                  { value: '10', label: '10 días antes' },
                  { value: '3', label: '3 días antes' },
                ]}
                value=""
                onChangeSelect={() => {}}
              />
              <Select
                label="Segunda alerta"
                description="Segunda notificación"
                tooltipData="Define cuándo se enviará la segunda notificación antes del vencimiento"
                addNewVariable={false}
                optionSelect={[
                  { value: '30', label: '30 días antes' },
                  { value: '15', label: '15 días antes' },
                  { value: '10', label: '10 días antes' },
                  { value: '3', label: '3 días antes' },
                ]}
                value=""
                onChangeSelect={() => {}}
              />
              <Select
                label="Tiempo Crítico para Gestión"
                description="Alerta crítica"
                tooltipData="Define el período crítico para gestionar el documento antes del vencimiento"
                addNewVariable={false}
                optionSelect={[
                  { value: '5', label: '5 días antes' },
                  { value: '4', label: '4 días antes' },
                  { value: '3', label: '3 días antes' },
                  { value: '2', label: '2 días antes' },
                  { value: '1', label: '1 día antes' },
                ]}
                value=""
                onChangeSelect={() => {}}
              />
            </FormBlock>

            <SelectBlock style={{ marginBottom: '32px' }}>
              <Select
                label="Tipo de documento"
                description="Categoría del documento"
                tooltipData="Selecciona el tipo de documento que se va a gestionar"
                addNewVariable={false}
                optionSelect={[{ value: 'soat', label: 'SOAT' }]}
                value=""
                onChangeSelect={() => {}}
              />
            </SelectBlock>
          </FormSection>

          <ButtonContainer style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
            <Button variant="secondary" onClick={() => {}}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Guardar y continuar
            </Button>
          </ButtonContainer>
        </ContainerMandatory>
      </div>
    </>
  );
}
