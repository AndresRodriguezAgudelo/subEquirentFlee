import React from 'react';
import Text from '@/shared/components/Text';
import {
  TableWrapper,
  TableContainer,
  Table,
  Th,
  Td,
  Tr
} from './AssociatedDocumentsTable.styled';

interface Document {
  id: string;
  documentType: string;
  documentNumber: string;
  fileName: string;
  from: string;
  to: string; 
  expDate: string;
  modDate: string;
}

const AssociatedDocumentsTable: React.FC = () => {
  const documents: Document[] = [
    {
      id: '1',
      documentType: 'Factura',
      documentNumber: 'FAC-001',
      fileName: 'factura_enero.pdf',
      from: '01/01/2024',
      to: '31/01/2024',
      expDate: '31/12/2024',
      modDate: '15/02/2024'
    },
    {
      id: '2',
      documentType: 'Contrato',
      documentNumber: 'CON-002',
      fileName: 'contrato_servicios.pdf',
      from: '01/02/2024',
      to: '28/02/2024',
      expDate: '31/12/2024',
      modDate: '14/02/2024'
    }
  ];

  return (
    <TableWrapper>
      <Text styleName="Highligth Standard">Documentos Asociados</Text>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Th>
                <Text styleName="Body Medium">Tipo de documento</Text>
              </Th>
              <Th>
                <Text styleName="Body Medium">Número de documento</Text>
              </Th>
              <Th>
                <Text styleName="Body Medium">Nombre del archivo</Text>
              </Th>
              <Th>
                <Text styleName="Body Medium">Desde</Text>
              </Th>
              <Th>
                <Text styleName="Body Medium">Hasta</Text>
              </Th>
              <Th>
                <Text styleName="Body Medium">Fecha exp.</Text>
              </Th>
              <Th>
                <Text styleName="Body Medium">Fecha mod.</Text>
              </Th>
              <Th>
                <Text styleName="Body Medium">Acciones</Text>
              </Th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc) => (
              <Tr key={doc.id}>
                <Td>
                  <Text styleName="Body Medium">{doc.documentType}</Text>
                </Td>
                <Td>
                  <Text styleName="Body Medium">{doc.documentNumber}</Text>
                </Td>
                <Td>
                  <Text styleName="Body Medium">{doc.fileName}</Text>
                </Td>
                <Td>
                  <Text styleName="Body Medium">{doc.from}</Text>
                </Td>
                <Td>
                  <Text styleName="Body Medium">{doc.to}</Text>
                </Td>
                <Td>
                  <Text styleName="Body Medium">{doc.expDate}</Text>
                </Td>
                <Td>
                  <Text styleName="Body Medium">{doc.modDate}</Text>
                </Td>
                <Td>
                  <Text styleName="Body Medium">...</Text>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
};

export default AssociatedDocumentsTable;