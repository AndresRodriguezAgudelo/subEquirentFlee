'use client';

import Text from '@/shared/components/Text';
import TableDocuments from '@/shared/containers/TableDocuments';
import { ContainerOptional, ContainerTitleLine } from './styled';

interface ListDocumentationProps {
  data: any;
}

export default function ListDocumentation({ data }: ListDocumentationProps) {
  return (
    <ContainerOptional>
      <ContainerTitleLine>
        <Text styleName={'Highligth Standard'}>Datos Activo</Text>
        <span />
      </ContainerTitleLine>

      <fieldset
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
        <div>
          <Text styleName="Content Accent">Valor de compra</Text>
          <Text styleName="Body Large">$15,000,000</Text>
        </div>
        <div>
          <Text styleName="Content Accent">Fecha de facturación</Text>
          <Text>27/12/2023</Text>
        </div>
        <div>
          <Text styleName="Content Accent">Número de factura</Text>
          <Text>FAC-2023-001</Text>
        </div>
        <div>
          <Text styleName="Content Accent">Proveedor</Text>
          <Text>Automotriz del Valle S.A.</Text>
        </div>
      </fieldset>

      <ContainerTitleLine>
        <Text styleName={'Highligth Standard'}>Documentos</Text>
        <span />
      </ContainerTitleLine>

      <TableDocuments />
    </ContainerOptional>
  );
}
