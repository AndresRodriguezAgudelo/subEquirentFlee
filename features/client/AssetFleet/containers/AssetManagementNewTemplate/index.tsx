'use client'
import { useSearchParams } from 'next/navigation'
import HeaderTitleBack from '@/shared/components/HeaderTitleBack'
import AssetManagementForm from '@/features/client/AssetFleet/components/AssetManagementForm'

export default function AssetManagementNewTemplate() {
  const searchParams = useSearchParams() ?? new URLSearchParams()
  const isEditing = searchParams.get('edit') === 'true'
  const assetId = searchParams.get('id')

  // En un caso real, aquí cargarías los datos del activo usando el ID
  const initialData = isEditing
    ? {
        // Aquí irían los datos del activo que se está editando
        id: assetId
        // ... otros datos
      }
    : undefined

  return (
    <>
      <HeaderTitleBack title={isEditing ? 'Editar Activo' : 'Añadir Activo'} />
      <AssetManagementForm isEditing={isEditing} initialData={initialData} />
    </>
  )
}
