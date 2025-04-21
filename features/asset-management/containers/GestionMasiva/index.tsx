'use client';

import { Fragment } from 'react';
import HeaderTitleBack from '@/shared/components/HeaderTitleBack';
import MassiveManagementView from '@/features/asset-management/components/MassiveManagementView';

export default function GestionMasiva() {
  return (
    <Fragment>
      <HeaderTitleBack title="Gestion Masiva" />
      <MassiveManagementView />
    </Fragment>
  );
}
