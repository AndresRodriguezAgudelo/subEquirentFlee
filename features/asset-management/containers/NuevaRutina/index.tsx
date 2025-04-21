'use client';

import { Fragment } from 'react';
import HeaderTitleBack from '@/shared/components/HeaderTitleBack';
import VistaNuevaRutina from '@/features/asset-management/components/NewRoutineView';

export default function NuevaRutina() {
  return (
    <Fragment>
      <HeaderTitleBack title="Crear Rutina de Mantenimiento" />
      <VistaNuevaRutina />
    </Fragment>
  );
}
