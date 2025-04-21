
import { Fragment } from 'react';
import AssetManagementChards from '../../components/AssetManagementChards';
import AssetManagementTable from '../../components/AssetManagementTable';

import { LineSeparation } from './styled';

export default function AlertasVencimientos() {
  return (
    <Fragment>
      <AssetManagementChards title="Rutinas de Mantenimiento" icon="alarm-check" />
      <LineSeparation />
      <AssetManagementTable nuevoActivo={false} />
    </Fragment>
  );
}
