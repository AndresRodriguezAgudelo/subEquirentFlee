'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import BaseForm, { FormField } from '@/features/superAdmin/containers/BaseForm';
import LayoutCreateCustomerManagement from '@/features/superAdmin/containers/Layouts';
import { useParams } from 'next/navigation';

export const FormUserManagement: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const userId = params?.id as string || '';


  const formFields: FormField[] = [
    {
      name: 'role',
      label: 'Rol',
      type: 'select',
      tooltipData: 'Información sobre el rol',
      required: true,
      options: [
        { value: 'admin', label: 'Administrador' },
        { value: 'consultant', label: 'Consultor' },
        { value: 'user', label: 'Usuario' },
      ],
    },
    {
      name: 'username',
      label: 'Nombre de usuario',
      type: 'text',
      tooltipData: 'Información sobre el nombre de usuario',
      required: true,
    },
    {
      name: 'document',
      label: 'Documento',
      type: 'text',
      tooltipData: 'Información sobre el documento',
      required: true,
    },
    {
      name: 'email',
      label: 'Correo',
      type: 'email',
      tooltipData: 'Información sobre el correo',
      required: true,
    },
    {
      name: 'phone',
      label: 'Teléfono',
      type: 'text',
      tooltipData: 'Información sobre el teléfono',
    },
  ];

  const handleSubmit = (formData: Record<string, any>) => {};

  const handleCancel = () => {
    router.push('/admin/userManagement');
  };

  return (
    <BaseForm
      title={userId ? 'Editar usuario' : 'Creación de usuario'}
      sectionTitle="Datos del perfil"
      fields={formFields}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      submitButtonText="Guardar usuario"
      layout={LayoutCreateCustomerManagement}
    />
  );
};

export default FormUserManagement;
