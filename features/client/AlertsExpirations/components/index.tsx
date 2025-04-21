'use client'

import { useState } from 'react'
import AssetManagementChards from '@/shared/components/AssetManagementChards'
import AssetManagementTable from '@/features/client/AssetFleet/components/AssetManagementTable'
import AsignarResponsableModal from '@/shared/containers/Modales/AsignarResponsable'
import EligeVencimientoModal from '@/shared/containers/Modales/EligeVencimiento'
import { LineSeparation } from './styled'


interface CarRegister {
  id: number
  plate: string
  status: string
  responsable: string
  brand: string
  line: string
  model: string
  class: string
  administration: string
  kilometers?: number
  chassisNumber: string
  [key: string]: any
}

export default function AlertsExpirations() {
  const [isResponsableModalOpen, setIsResponsableModalOpen] = useState(false)
  const [isVencimientoModalOpen, setIsVencimientoModalOpen] = useState(false)
  const [selectedVehicle, setSelectedVehicle] = useState<CarRegister | null>(
    null
  )

  const handleResponsableClick = (vehicle: CarRegister) => {
    if (vehicle.responsable === 'Sin Asignar') {
      setSelectedVehicle(vehicle)
      setIsResponsableModalOpen(true)
    }
  }

  const handleVencimientoClick = () => {
    setIsVencimientoModalOpen(true)
  }

  const handleCloseResponsableModal = () => {
    setIsResponsableModalOpen(false)
    setSelectedVehicle(null)
  }

  const handleCloseVencimientoModal = () => {
    setIsVencimientoModalOpen(false)
  }

  return (
    <>
      <AssetManagementChards title="Alertas y Vencimientos" icon="bell-ring" />
      <LineSeparation />
      <AssetManagementTable
        nuevoActivo={false}
        onResponsableClick={handleResponsableClick}
        onVencimientoClick={handleVencimientoClick}
        screenType="alertasVencimientos"
      />
      <AsignarResponsableModal
        isOpen={isResponsableModalOpen}
        onClose={handleCloseResponsableModal}
        vehicle={selectedVehicle}
      />
      <EligeVencimientoModal
        isOpen={isVencimientoModalOpen}
        onClose={handleCloseVencimientoModal}
      />
    </>
  )
}
