'use client';

import { Fragment } from 'react';
import HeaderTitleBack from '@/shared/components/HeaderTitleBack';
import CreateAlertView from '@/features/asset-management/components/CreateAlertView';

export default function CreateAlert() {
  return (
    <Fragment>
      <HeaderTitleBack title="Crear Vencimiento" />
      <CreateAlertView />
    </Fragment>
  );
}
