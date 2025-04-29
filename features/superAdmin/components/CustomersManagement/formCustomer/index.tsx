'use client';
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import BaseForm, { FormField } from '@/features/superAdmin/containers/BaseForm';
import LayoutCreateCustomerManagement from '@/features/superAdmin/containers/Layouts';

export const FormCustomerManagement: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const userId = params?.id as string || '';
  const formFields: FormField[] = [
    {
      name: 'username',
      label: 'Nombre de usuario',
      type: 'text',
      tooltipData: 'Información sobre el nombre de usuario',
      required: true,
    },
    {
      name: 'mail',
      label: 'Correo',
      type: 'text',
      tooltipData: 'Información sobre el correo',
      required: true,
    },
    {
      name: 'nameCompany',
      label: 'Nombre de la empresa',
      type: 'text',
      tooltipData: 'Información sobre el nombre de la empresa',
      required: true,
    },
    {
      name: 'nit',
      label: 'NIT',
      type: 'text',
      tooltipData: 'Información sobre el NIT',
      required: true,
    },
    {
      name: 'phone',
      label: 'Teléfono',
      type: 'text',
      tooltipData: 'Información sobre el teléfono',
      required: true,
    },
    {
      name: 'city',
      label: 'Ciudad',
      type: 'select',
      tooltipData: 'Información sobre la ciudad',
      required: true,
      options: [
        { value: 'Bogotá', label: 'Bogotá' },
        { value: 'Medellín', label: 'Medellín' },
        { value: 'Cali', label: 'Cali' },
        { value: 'Cartagena', label: 'Cartagena' },
        { value: 'Barranquilla', label: 'Barranquilla' },
        { value: 'Bucaramanga', label: 'Bucaramanga' },
        { value: 'Ibagué', label: 'Ibagué' },
        { value: 'Manizales', label: 'Manizales' },
        { value: 'Pereira', label: 'Pereira' },
        { value: 'Pasto', label: 'Pasto' },
        { value: 'Popayán', label: 'Popayán' },
        { value: 'Quindío', label: 'Quindío' },
        { value: 'Rionegro', label: 'Rionegro' },
        { value: 'Tunja', label: 'Tunja' },
        { value: 'Villavicencio', label: 'Villavicencio' },
        { value: 'Yopal', label: 'Yopal' },
      ],
    },
    {
      name: 'address',
      label: 'Dirección',
      type: 'text',
      tooltipData: 'Información sobre la dirección',
      required: true,
    },
  ];

  const handleSubmit = (formData: Record<string, any>) => {};

  const handleCancel = () => {
    router.push('/admin/customerManagement');
  };

  return (
    <BaseForm
      title={userId ? 'Editar cliente' : 'Creación de cliente'}
      sectionTitle="Datos del perfil"
      fields={formFields}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      submitButtonText="Guardar cliente"
      layout={LayoutCreateCustomerManagement}
    />
  );
};

export default FormCustomerManagement;
