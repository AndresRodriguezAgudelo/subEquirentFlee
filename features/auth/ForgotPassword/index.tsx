'use client'

import AuthContainer from "@/shared/containers/AuthContainer"

import { LoginForm, Form, Input, InputWrapper, StyledLabel, SubmitButton, ReturnButton } from './styled';
import { useRouter } from 'next/navigation';

export const ForgotPassword = () => {
  const router = useRouter();
  return (
    <AuthContainer>
      <LoginForm>
        <h2>¿Olvidaste tu contraseña?</h2>
        <br />
        <p>Escribe tu correo eléctronico para recuperar tu contraseña</p>
        <br />
        <Form>
          <InputWrapper>
            <StyledLabel htmlFor="email">Correo registrado</StyledLabel>
            <Input
              type="email"
              id="email"
              name="email"
            />
          </InputWrapper>
          <SubmitButton type='submit'>Enviar</SubmitButton>
          <ReturnButton onClick={() => router.push('/admin/login')}>Volver al Login</ReturnButton>
        </Form>
      </LoginForm>
    </AuthContainer>
  )
}
