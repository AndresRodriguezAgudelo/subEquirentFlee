
import { Fragment } from 'react';
import AssetManagementChards from '../../components/AssetManagementChards';
import AssetManagementTable from '../../components/AssetManagementTable';

import { LineSeparation } from './styled';

export default function AlertasVencimientos() {
  return (
    <Fragment>
      <AssetManagementChards title="Alertas y Vencimientos" icon="bell-ring" />
      <LineSeparation />
      <AssetManagementTable nuevoActivo={false} />
    </Fragment>
  );
}
