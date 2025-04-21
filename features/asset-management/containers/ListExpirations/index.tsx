'use client';

import { Fragment } from 'react';
import HeaderTitleBack from '@/shared/components/HeaderTitleBack';
import ListExpirationsView from '@/features/asset-management/components/ListExpirationsView';

export default function ListExpirations() {
  return (
    <Fragment>
      <HeaderTitleBack title="Listado de Vencimientos" />
      <ListExpirationsView />
    </Fragment>
  );
}
