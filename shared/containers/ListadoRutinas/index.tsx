'use client';

import { Fragment } from 'react';
import HeaderTitleBack from '@/shared/components/HeaderTitleBack';
import VistaListadoRutinas from '@/shared/components/ListadoRutinasVista';

export default function ListadoRutinas() {


  return (
    <Fragment>
      <HeaderTitleBack title='Listado de Rutinas' />
      <VistaListadoRutinas />
    </Fragment>
  );
}