'use client';
import React, { useState } from 'react';
import InputText from '@/shared/components/InputText';
import Button from '@/shared/components/Button';
import { Container, ContainerTitle, SectionTitle, Divider, FormGroup, Select, ButtonContainer } from './styled';

export type FieldType = 'text' | 'email' | 'select' | 'number' | 'password';

export interface SelectOption {
  value: string;
  label: string;
}

export interface FormField {
  name: string;
  label: string;
  type: FieldType;
  tooltipData?: string;
  options?: SelectOption[]; 
  required?: boolean;
  placeholder?: string;
}
export interface BaseFormProps {
  title: string;
  sectionTitle: string;
  fields: FormField[];
  initialValues?: Record<string, any>;
  onSubmit: (data: Record<string, any>) => void;
  onCancel?: () => void;
  submitButtonText?: string;
  cancelButtonText?: string;
  children?: React.ReactNode;
  layout?: React.ComponentType<{ title: string; children: React.ReactNode }>;
}

export const BaseForm: React.FC<BaseFormProps> = ({
  title,
  sectionTitle,
  fields,
  initialValues = {},
  onSubmit,
  onCancel,
  submitButtonText = 'Guardar',
  cancelButtonText = 'Cancelar',
  children,
  layout: Layout,
}) => {
  const [formData, setFormData] = useState<Record<string, any>>(() => {
    const initialData: Record<string, any> = {};
    fields.forEach((field) => {
      initialData[field.name] = initialValues[field.name] || '';
    });
    return initialData;
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInputChange = async (
    name: string,
    value: string
  ): Promise<void> => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    return Promise.resolve();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const renderField = (field: FormField) => {
    switch (field.type) {
      case 'select':
        return (
          <FormGroup key={field.name}>
            <Select
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
            >
              <option value="">
                {field.placeholder || `Selecciona ${field.label.toLowerCase()}`}
              </option>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </FormGroup>
        );
      default:
        return (
          <FormGroup key={field.name}>
            <InputText
              label={field.label}
              value={formData[field.name]}
              type={
                field.type === 'password'
                  ? 'password'
                  : field.type === 'email'
                    ? 'email'
                    : 'text'
              }
              name={field.name}
              onChange={(e) => {
                return handleInputChange(field.name, e.target.value);
              }}
              tooltipData={field.tooltipData}
              placeholder={field.placeholder}
            />
          </FormGroup>
        );
    }
  };

  const formContent = (
    <Container>
      <form onSubmit={handleSubmit}>
        <ContainerTitle>
          <SectionTitle>{sectionTitle}</SectionTitle>
          <Divider />
        </ContainerTitle>

        {fields.map(renderField)}

        {children}
      </form>
    </Container>
  );

  const buttons = (
    <ButtonContainer>
      {onCancel && (
        <Button type="button" onClick={onCancel} variant="secondary">
          {cancelButtonText}
        </Button>
      )}
      <Button type="submit" variant="primary" onClick={handleSubmit}>
        {submitButtonText}
      </Button>
    </ButtonContainer>
  );

  if (Layout) {
    return (
      <>
        <Layout title={title}>{formContent}</Layout>
        {buttons}
      </>
    );
  }

  return (
    <>
      {formContent}
      {buttons}
    </>
  );
};

export default BaseForm;
