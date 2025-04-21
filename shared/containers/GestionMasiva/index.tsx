'use client';

import { Fragment } from 'react';
import HeaderTitleBack from '@/shared/components/HeaderTitleBack';
import VistaGestionMasiva from '@/shared/components/GestionMasivaVista';

export default function GestionMasiva() {


  return (
    <Fragment>
      <HeaderTitleBack title='Gestion Masiva' />
      <VistaGestionMasiva />
    </Fragment>
  );
}