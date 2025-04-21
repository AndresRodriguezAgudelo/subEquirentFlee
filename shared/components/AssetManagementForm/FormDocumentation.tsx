'use client';

import { useState } from 'react';
import InputText from '@/shared/components/InputText';
import DateField from '@/shared/components/DateField';
import Select from '@/shared/components/Select';
import Text from '@/shared/components/Text';
import TableList from '@/shared/components/TableList';
import InputUploadDocument from '@/shared/components/InputUploadDocument';
import { 
  Container, 
  InputRow, 
  ContainerTitleLine,
  DocumentBlocksContainer,
  LeftBlock,
  RightBlock,
  FormControl
} from './styled';

export default function FormDocumentation() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const documentColumns = [
    { header: 'Tipo', accessor: 'type' as const },
    { header: 'Nombre del Archivo', accessor: 'fileName' as const },
    { header: 'Fecha de Expedición', accessor: 'extDate' as const },
    { header: 'Fecha de Modificación', accessor: 'modDate' as const },
  ];

  const handleDownload = (document: any) => {
    // Implementar lógica de descarga
    console.log('Descargando:', document);
  };

  const handleDelete = (document: any) => {
    // Implementar lógica de eliminación
    console.log('Eliminando:', document);
  };

  const documentActions = [
    {
      icon: 'download',
      onClick: handleDownload,
      color: '#666666',
    },
    {
      icon: 'trash',
      onClick: handleDelete,
      color: '#FF4D4D',
    },
  ];

  return (
    <Container>
      <InputRow>
        <InputText
          label="Valor de Compra"
          description="Ingresa el valor de compra del activo"
          placeholder="Ingresa el valor"
          type="number"
          tooltipData="Valor monetario de la compra del activo"
        />

        <InputText
          label="Número de Factura"
          description="Ingresa el número de factura"
          placeholder="Ingresa el número"
          tooltipData="Número identificador de la factura de compra"
        />

        <DateField
          label="Fecha de Factura"
          selected={selectedDate}
          onChange={handleDateChange}
          placeholder="Selecciona una fecha"
          tooltipData="Fecha de emisión de la factura"
        />
      </InputRow>

      <ContainerTitleLine>
        <Text styleName={'Highligth Standard'}>
          Documentos
        </Text>
        <span />
      </ContainerTitleLine>

      <DocumentBlocksContainer>
        <LeftBlock>
          <FormControl>
            <Text styleName="Caption Accent / SemiBold">Tipo de documento</Text>
            <Select
              titleGroup="Tipos"
              optionSelect={[
                { value: 'factura', label: 'Factura' },
                { value: 'garantia', label: 'Garantía' },
                { value: 'manual', label: 'Manual' },
              ]}
            />
          </FormControl>

          <FormControl>
            <Text styleName="Caption Accent / SemiBold">Proveedor</Text>
            <Select
              titleGroup="Proveedores"
              optionSelect={[
                { value: 'proveedor1', label: 'Proveedor 1' },
                { value: 'proveedor2', label: 'Proveedor 2' },
                { value: 'proveedor3', label: 'Proveedor 3' },
              ]}
            />
          </FormControl>

          <FormControl>
            <Text styleName="Caption Accent / SemiBold">Fecha</Text>
            <DateField/>
          </FormControl>

          <FormControl>
            <Text styleName="Caption Accent / SemiBold">Archivo</Text>
            <InputUploadDocument onFileSelect={(file) => console.log('File selected:', file)} />
          </FormControl>
        </LeftBlock>

        <RightBlock>
          <Text styleName="Heading 5">Documentos</Text>
          <TableList
            customColumns={documentColumns}
            showActions={true}
            actionIcons={documentActions}
            data={[
              {
                id: 1,
                type: 'Factura',
                fileName: 'factura_001.pdf',
                extDate: '27/12/2023',
                modDate: '27/12/2023',
              },
              {
                id: 2,
                type: 'Manual',
                fileName: 'manual_usuario.pdf',
                extDate: '26/12/2023',
                modDate: '27/12/2023',
              },
            ]}
          />
        </RightBlock>
      </DocumentBlocksContainer>
    </Container>
  );
}
