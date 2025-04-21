import { Fragment } from 'react';

import AssetManagementChards from '../../components/AssetManagementChards';
import AssetManagementTable from '../../components/AssetManagementTable';
import { LineSeparation } from './styled';

export default function AssetManagementTemplate() {
  return (
    <Fragment>
      <AssetManagementChards title="Flota y Activos" icon="car" />
      <LineSeparation />
      <AssetManagementTable nuevoActivo={true} />
    </Fragment>
  );
}
