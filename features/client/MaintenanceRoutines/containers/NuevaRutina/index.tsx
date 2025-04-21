'use client'

import HeaderTitleBack from '@/shared/components/HeaderTitleBack'
import VistaNuevaRutina from '@/features/client/MaintenanceRoutines/components/NuevaRutinaVista'

export default function NuevaRutina() {
  return (
    <>
      <HeaderTitleBack title="Crear Rutina de Mantenimiento" />
      <VistaNuevaRutina />
    </>
  )
}
