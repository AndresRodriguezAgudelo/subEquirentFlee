'use client'

import AuthContainer from "@/shared/containers/AuthContainer"

import { LoginForm, Form, Input, InputWrapper, StyledLabel, SubmitButton, ReturnButton } from './styled';

export const ForgotPassword = () => {

  return (
    <AuthContainer>
      <LoginForm>
        <h2>¿Olvidaste tu contraseña?</h2>
        <br />
        <p>Ecribe tu correo eléctronico para recuperar tu contraseña</p>
        <br />
        <Form>
          <InputWrapper>
            <StyledLabel htmlFor="email">Correo registrado</StyledLabel>
            <Input
              type="email"
              id="email"
              name="email"
              required
            />
          </InputWrapper>
          <SubmitButton type='submit'>Enviar</SubmitButton>
          <ReturnButton>Volver al Login</ReturnButton>
        </Form>
      </LoginForm>
    </AuthContainer>
  )
}
