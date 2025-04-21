'use client';

import { Fragment } from 'react';
import  HeaderTitleBack from '@/shared/components/HeaderTitleBack';
import EditAlertView from '@/features/asset-management/components/EditAlertView';

export default function FormularioAlerta() {
  return (
    <Fragment>
      <HeaderTitleBack title="Soat" />
      <EditAlertView />
    </Fragment>
  );
}
