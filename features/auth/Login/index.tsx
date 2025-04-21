'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

import {
  LoginForm,
  Form,
  Label,
  Input,
  TermsContainer,
  Checkbox,
  SubmitButton,
  ForgotPassword,
  CheckboxPassword
} from './styled'
import { useLogin } from './useLogin'
import AuthContainer from '../../../shared/containers/AuthContainer/index'

const LoginComponent = () => {
  const router = useRouter()
  const [isBrowser, setIsBrowser] = useState(false)

  const {
    username,
    password,
    rememberMe,
    termsAccepted,
    setUsername,
    setPassword,
    setRememberMe,
    setTermsAccepted,
    handleLogin
  } = useLogin()

  // Estado para controlar si la contraseña es visible o no
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const { success, message } = await handleLogin(e)

      if (success) {
        router.push('/admin/home')
      } else {
        alert(message || 'Error de autenticación')
      }
    } catch (error) {
      console.error('Error al intentar login:', error)
      alert('Ocurrió un error al intentar iniciar sesión')
    }
  }

  const handleForgotPassword = () => {
    router.push('/admin/forgotPassword')
  }

  if (!isBrowser) {
    return null
  }

  return (
    <>
      <AuthContainer>
        <LoginForm onSubmit={onSubmit}>
          <h2 style={{ fontStyle: 'bold' }}>Bienvenido a Equisoft.</h2>
          <p>Por favor ingresa tus datos para acceder a la plataforma</p>
          <Form>
            <div>
              <Input
                type="text"
                id="username"
                name="username"
                placeholder="Usuario"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />
            </div>
            <div style={{ position: 'relative' }}>
              <Input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  top: '40%',
                  right: '10px',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer'
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            <TermsContainer>
              <Checkbox
                type="checkbox"
                id="terms"
                onChange={e => setTermsAccepted(e.target.checked)}
                checked={termsAccepted}
              />
              <Label htmlFor="terms">
                He leído y acepto los <a href="#">Términos y Condiciones</a> y
                la <a href="#">Política de Privacidad</a>.
              </Label>
            </TermsContainer>
            <SubmitButton type="submit" disabled={!termsAccepted}>
              Iniciar sesión
            </SubmitButton>
          </Form>
          <TermsContainer>
            <CheckboxPassword
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={e => setRememberMe(e.target.checked)}
            />
            <Label htmlFor="remember">Recordar contraseña</Label>
            <ForgotPassword href="#" onClick={handleForgotPassword}>
              Olvidé la contraseña
            </ForgotPassword>
          </TermsContainer>
        </LoginForm>
      </AuthContainer>
    </>
  )
}

export const Login = dynamic(() => Promise.resolve(LoginComponent), {
  ssr: false
})
