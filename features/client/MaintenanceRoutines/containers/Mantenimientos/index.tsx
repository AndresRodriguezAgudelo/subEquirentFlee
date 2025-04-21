import AssetManagementChards from '../../../../../shared/components/AssetManagementChards'
import AssetManagementTable from '@/features/client/AssetFleet/components/AssetManagementTable'

import { LineSeparation } from './styled'

export default function AlertasVencimientos() {
  return (
    <>
      <AssetManagementChards
        title="Rutinas de Mantenimiento"
        icon="alarm-check"
      />
      <LineSeparation />
      <AssetManagementTable nuevoActivo={false} />
    </>
  )
}
