'use client';

import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import StepList from '@/features/asset-management/components/StepList';
import { StepRenderer } from '@/shared/components/StepRenderer';
import FormInformationBasic from './FormInformationBasic';
import FormInformationDetailed from './FormInformationDetailed';
import FormExpirationsAndMaintenance from './FormExpirationsAndMaintenance';
import FormDocumentation from './FormDocumentation';
import Text from '@/shared/components/Text';
import { AssetManagementFormValues } from '../../types/general';

interface FormActivoProps {
  isEditing?: boolean;
  initialData?: AssetManagementFormValues;
}

export default function FormActivo({
  isEditing = false,
  initialData,
}: FormActivoProps) {
  const [activeStep, setActiveStep] = useState(0);
  const methods = useForm<AssetManagementFormValues>({
    defaultValues: initialData,
  });

  return (
    <FormProvider {...methods}>
      <div>
        <Text styleName="Heading 4" style={{ marginBottom: '2rem' }}>
          {isEditing ? 'Editar Activo' : 'Añadir Activo'}
        </Text>

        <StepList
          steps={[
            'Información Básica',
            'Información Detallada',
            'Vencimientos y Mantenimiento',
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
      </div>
    </FormProvider>
  );
}
