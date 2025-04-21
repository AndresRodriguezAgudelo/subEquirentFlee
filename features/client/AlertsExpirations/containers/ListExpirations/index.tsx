'use client'
import HeaderTitleBack from '@/shared/components/HeaderTitleBack'
import ListExpirationsView from '@/features/client/AlertsExpirations/components/ListExpirationsView'

export default function ListExpirations() {
  return (
    <>
      <HeaderTitleBack title="Listado de Vencimientos" />
      <ListExpirationsView />
    </>
  )
}
