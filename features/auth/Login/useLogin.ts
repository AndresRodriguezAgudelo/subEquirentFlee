import { useState, useEffect } from 'react'
import { loginUser } from '../../../shared/data/services/authService' // Importamos la función del servicio

// Función auxiliar para verificar si estamos en el navegador
const isBrowser = () => typeof window !== 'undefined';
export const useLogin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [error, setError] = useState('')

  // Llamada al backend para hacer login usando el servicio
  const handleLogin = async (e: any) => {
    e.preventDefault()

    try {
      const { success, data } = await loginUser(username, password)

      if (success) {
        // Si "Recordar contraseña" está activado, almacenamos las credenciales en localStorage
        if (rememberMe && isBrowser()) {
          localStorage.setItem('username', username)
          localStorage.setItem('password', password)
        }
        
        return { success: true, message: 'Login exitoso' }
      } else {
        return { success: false, message: 'Credenciales incorrectas' }
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message || 'Error desconocido')
        return { success: false, message: error.message || 'Error desconocido' }
      } else {
        setError('Error desconocido')
        return { success: false, message: 'Error desconocido' }
      }
    }
  }

  // Autocompletar campos desde localStorage si "Recordar contraseña" esta activado
  useEffect(() => {
    // Solo ejecutar en el cliente
    if (isBrowser()) {
      const savedUsername = localStorage.getItem('username')
      const savedPassword = localStorage.getItem('password')
      
      if (savedUsername && savedPassword) {
        setUsername(savedUsername)
        setPassword(savedPassword)
        setRememberMe(true)
      }
    }
  }, [])

  return {
    username,
    password,
    rememberMe,
    termsAccepted,
    error,
    setUsername,
    setPassword,
    setRememberMe,
    setTermsAccepted,
    handleLogin
  }
}
