'use client';

import { Fragment } from 'react';
import HeaderTitleBack from '@/shared/components/HeaderTitleBack';
import FormularioAlertaVista from '@/shared/components/FormularioAlertaVista';

export default function FormularioAlerta() {


  return (
    <Fragment>
      <HeaderTitleBack title='Soat' />
      <FormularioAlertaVista />
    </Fragment>
  );
}