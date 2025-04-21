'use client'
import HeaderTitleBack from '@/shared/components/HeaderTitleBack'
import CreateAlertView from '@/features/client/AlertsExpirations/components/CreateAlertView'

export default function CreateAlert() {
  return (
    <>
      <HeaderTitleBack title="Crear Vencimiento" />
      <CreateAlertView />
    </>
  )
}
