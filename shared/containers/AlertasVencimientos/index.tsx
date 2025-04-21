import AssetManagementTable from '@/features/client/AssetFleet/components/AssetManagementTable';
import AssetManagementChards from '@/shared/components/AssetManagementChards';

import { LineSeparation } from './styled';

export default function AlertasVencimientos() {
  return (
    <>
      <AssetManagementChards title="Alertas y Vencimientos" icon="bell-ring" />
      <LineSeparation />
      <AssetManagementTable nuevoActivo={false} />
    </>
  );
}
