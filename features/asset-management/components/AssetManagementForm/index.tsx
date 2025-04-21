'use client';

import FormExpirationsAndMaintenance from './FormExpirationsAndMaintenance';
import { type AssetManagementFormValues } from '../../types/general';
import FormInformationDetailed from './FormInformationDetailed';
import FormInformationBasic from './FormInformationBasic';
import FormDocumentation from './FormDocumentation';
import { FormProvider, useForm } from 'react-hook-form';
import { useCallback, useMemo, useState, useEffect } from 'react';
import InputText from '@/shared/components/InputText';
import DatePickerInput from '@/shared/components/DateField';
import { StepRenderer } from '@/shared/components/StepRenderer';
import Select from '@/shared/components/Select';
import Text from '@/shared/components/Text';
import StepList from '../StepList';
import ConfirmationModal from '../../containers/Modales/ActualizarActivoModal';
import CargarDatosModal from '../../containers/Modales/CargarDatosModal';

import {
  ButtonCancel,
  ButtonSave,
  ContainerMandatory,
  ContainerTitleLine,
  FormStyle,
  GroupButtons,
} from './styled';
import { SwitchInput } from '@/shared/components/SwitchInput';

interface AssetManagementFormProps {
  isEditing?: boolean;
  initialData?: any;
}

export default function AssetManagementForm({
  isEditing = false,
  initialData,
}: AssetManagementFormProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const methods = useForm<AssetManagementFormValues>({
    defaultValues: initialData,
  });

  useEffect(() => {
    if (isEditing && initialData) {
      // Actualizar los valores del formulario cuando initialData cambie
      Object.keys(initialData).forEach(key => {
        methods.setValue(key as any, initialData[key]);
      });
    }
  }, [initialData, isEditing, methods]);

  const handleToggleChange = (state: 'option1' | 'option2') => {
    methods.setValue('state_physical', state);
  };

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    methods.setValue('registration_date', date ? date.toISOString() : '');
    setSelectedDate(date);
  };

  const onSubmit = useCallback(() => {
    if (activeStep < 3) {
      setActiveStep(prev => prev + 1);
    }
  }, [activeStep]);

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isCargarDatosModalOpen, setIsCargarDatosModalOpen] = useState(false);

  return (
    <FormProvider {...methods}>
      <FormStyle onSubmit={methods.handleSubmit(onSubmit)}>
        <ContainerMandatory>
          <ContainerTitleLine>
            <Text styleName={'Highligth Standard'}>
              Información Obligatoria
            </Text>
            <span />
          </ContainerTitleLine>
          <fieldset>
            <InputText
              tooltipData="Número de placa único que identifica al vehículo en el sistema de tránsito."
              {...methods.register('plate')}
              label="Placa"
              description="Ingresa un valor numérico"
              placeholder="Escribe"
              type="number"
              value={methods.watch('plate')}
            />

            <SwitchInput
              title="Estado en el Sistema"
              tipData="Estado actual del vehículo en el sistema, indica si está activo o inactivo."
              option1="En Administración"
              option2="Sin Administración"
              initialStatus={
                (methods.watch('state_physical') as 'option1' | 'option2') ||
                'option1'
              }
              onChange={handleToggleChange}
            />

            <Select
              label="Estado de Disponibilidad"
              addNewVariable={true}
              titleGroup="Marcas"
              optionSelect={[
                { value: '1', label: 'Disponible' },
                { value: '2', label: 'No disponible' },
              ]}
              value={methods.watch('displacement')}
              onClickHeadling={() => console.log('click')}
              onChangeSelect={({ value }) =>
                methods.setValue('displacement', value)
              }
              tooltipData="Estado actual de la condición física del vehículo."
            />
          </fieldset>
          <fieldset>
            <InputText
              label="Marca"
              placeholder="Escribe"
              type="number"
              tooltipData="Fabricante o marca comercial del vehículo, por ejemplo, Chevrolet, Toyota, Yamaha."
              {...methods.register('brand')}
              value={methods.watch('brand')}
            />
            <InputText
              label="Linea"
              placeholder="Escribe"
              type="number"
              tooltipData="Modelo o referencia específica del vehículo dentro de la marca."
              {...methods.register('line')}
              value={methods.watch('line')}
            />

            <DatePickerInput
              label="Fecha de Matricula"
              name="registration_date"
              placeholder="Selecciona una fecha"
              tooltipData="Fecha en que el vehículo fue registrado por primera vez en el sistema de tránsito."
              onChange={handleDateChange}
              selected={
                methods.watch('registration_date')
                  ? new Date(methods.watch('registration_date'))
                  : null
              }
            />
          </fieldset>
        </ContainerMandatory>

        <StepList
          steps={[
            'Información Básica ',
            'Información Detallada',
            'Vencimientos y Mantenimientos',
            'Documentación',
          ]}
          setActiveStep={setActiveStep}
          activeStep={activeStep}
          inModal={false}
        />

        <StepRenderer
          activeStep={activeStep}
          steps={[
            <FormInformationBasic key="step1" />,
            <FormInformationDetailed key="step2" />,
            <FormExpirationsAndMaintenance key="step3" />,
            <FormDocumentation key="step4" />,
          ]}
        />

        <GroupButtons>
          {/* abrir modales aqui */}

          <ButtonCancel
            type="button"
            onClick={() => setIsConfirmationModalOpen(true)}
          >
            <Text styleName={'Content Accent'}>Cancelar</Text>
          </ButtonCancel>
          <ButtonSave
            type="button"
            onClick={() => setIsCargarDatosModalOpen(true)}
          >
            <Text styleName={'Content Accent'}>Guardar</Text>
          </ButtonSave>
        </GroupButtons>

        <ConfirmationModal
          isOpen={isConfirmationModalOpen}
          onClose={() => setIsConfirmationModalOpen(false)}
        />

        <CargarDatosModal
          isOpen={isCargarDatosModalOpen}
          onClose={() => setIsCargarDatosModalOpen(false)}
        />
      </FormStyle>
    </FormProvider>
  );
}
