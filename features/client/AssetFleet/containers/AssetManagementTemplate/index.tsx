
import AssetManagementChards from '@/shared/components/AssetManagementChards'

import { LineSeparation } from './styled'
import AssetManagementTable from '../../components/AssetManagementTable'

export default function AssetManagementTemplate() {
  return (
    <>
      <AssetManagementChards title="Flota y Activos" icon="car" />
      <LineSeparation />
      <AssetManagementTable nuevoActivo={true} />
    </>
  )
}
