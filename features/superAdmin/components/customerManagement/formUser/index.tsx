'use client';
import React, { useState } from 'react';
import Icon from '@/shared/containers/Icons';
import Button from '@/shared/components/Button';
import {
  Container,
  Divider,
  FormGroup,
  FormLabel,
  InfoIcon,
  Input,
  Select,
  ButtonContainer,
  CancelButton,
  ContainerTitle,
  SectionTitle,
} from './styled';
import LayoutCreateCustomerManagement from '@/features/superAdmin/containers/Layouts';
import InputText from '@/shared/components/InputText';

interface FormData {
  role: string;
  username: string;
  document: string;
  email: string;
  phone: string;
}

export const FormUser: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    role: '',
    username: '',
    document: '',
    email: '',
    phone: '',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to an API
  };

  const handleCancel = () => {
    // Handle cancel action, e.g., navigate back
    console.log('Form cancelled');
  };

  return (
    <>
      <LayoutCreateCustomerManagement title="Creación de usuario">
        <Container>
          <form onSubmit={handleSubmit}>
            <ContainerTitle>
              <SectionTitle>Datos del perfil</SectionTitle>
              <Divider />
            </ContainerTitle>

            <FormGroup>
              {/* <Input
              name="role"
              value={formData.role}
              type="text"
              onChange={handleChange}
              tooltipData="Información sobre el rol"
            /> */}
              <Select name="role" value={formData.role} onChange={handleChange}>
                <option value="">Selecciona un rol</option>
                <option value="admin">Administrador</option>
                <option value="consultant">Consultor</option>
                <option value="user">Usuario</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <InputText
                label="Nombre de usuario"
                value={formData.username}
                type="text"
                //   onChange={handleChange}
                tooltipData="Información sobre el nombre de usuario"
              />
            </FormGroup>

            <FormGroup>
              <InputText
                label="Documento"
                value={formData.document}
                type="text"
                //   onChange={handleChange}
                tooltipData="Información sobre el documento"
              />
            </FormGroup>

            <FormGroup>
              <InputText
                label="Correo"
                value={formData.email}
                type="email"
                //   onChange={handleChange}
                tooltipData="Información sobre el correo"
              />
            </FormGroup>

            <FormGroup>
              <InputText
                label="Teléfono"
                value={formData.phone}
                type="text"
                //   onChange={handleChange}
                tooltipData="Información sobre el teléfono"
              />
            </FormGroup>
          </form>
        </Container>
      </LayoutCreateCustomerManagement>
      <ButtonContainer>
        <Button type="button" onClick={handleCancel} variant="secondary">
          Cancelar
        </Button>
        <Button type="button" variant="primary">
          Guardar usuario
        </Button>
      </ButtonContainer>
    </>
  );
};

export default FormUser;
