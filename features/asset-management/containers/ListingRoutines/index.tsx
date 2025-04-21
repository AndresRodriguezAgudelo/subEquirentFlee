'use client';

import { Fragment } from 'react';
import HeaderTitleBack from '@/shared/components/HeaderTitleBack';
import VistaListadoRutinas from '@/features/asset-management/components/ListingRoutinesView';

export default function ListadoRutinas() {
  return (
    <Fragment>
      <HeaderTitleBack title="Listado de Rutinas" />
      <VistaListadoRutinas />
    </Fragment>
  );
}
