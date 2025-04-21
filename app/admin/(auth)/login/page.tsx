
import type { Metadata } from 'next'

import { Login } from '@/features/auth/Login'

export const metadata: Metadata = {
  title: 'Equisoft Fleet',
  description: 'Equisoft Fleet | Iniciar Sesión'
}

export default function Home() {
  return <Login />
}
