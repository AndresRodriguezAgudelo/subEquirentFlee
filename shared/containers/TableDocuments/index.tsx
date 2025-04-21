'use client';

import React from 'react';
import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import Text from '@/shared/components/Text';
import Icon from '@/shared/containers/Icons';
import { TableContainer, Table, Th, Td, Tr, ActionIcon } from './styled';

interface Document {
  id: number;
  type: string;
  fileName: string;
  extDate: string;
  modDate: string;
}

interface TableDocumentsProps {
  data?: Document[];
  pageSize?: number;
}

const mockData: Document[] = [
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
  {
    id: 3,
    type: 'Garantía',
    fileName: 'garantia_equipo.pdf',
    extDate: '25/12/2023',
    modDate: '27/12/2023',
  },
];

export default function TableDocuments({
  data = mockData,
  pageSize = 10,
}: TableDocumentsProps) {
  const columns = React.useMemo<ColumnDef<Document>[]>(
    () => [
      {
        accessorKey: 'type',
        header: 'Tipo de Documento',
        cell: info => (
          <Text styleName="Body Medium">{String(info.getValue())}</Text>
        ),
      },
      {
        accessorKey: 'fileName',
        header: 'Nombre archivo',
        cell: info => (
          <Text styleName="Body Medium">{String(info.getValue())}</Text>
        ),
      },
      {
        accessorKey: 'extDate',
        header: 'Fecha Ext.',
        cell: info => (
          <Text styleName="Body Medium">{String(info.getValue())}</Text>
        ),
      },
      {
        accessorKey: 'modDate',
        header: 'Fecha Mod.',
        cell: info => (
          <Text styleName="Body Medium">{String(info.getValue())}</Text>
        ),
      },
      {
        id: 'actions',
        header: 'Acciones',
        cell: () => (
          <div style={{ display: 'flex', gap: '8px' }}>
            <ActionIcon>
              <Icon icon="trash" size={20} />
            </ActionIcon>
            <ActionIcon>
              <Icon icon="download" size={20} />
            </ActionIcon>
            <ActionIcon>
              <Icon icon="document" size={20} />
            </ActionIcon>
          </div>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getRowId: row => row.id.toString(),
  });

  return (
    <TableContainer>
      <Table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <Th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <Text styleName="Caption Accent / SemiBold">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </Text>
                  )}
                </Th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table
            .getRowModel()
            .rows.slice(0, pageSize)
            .map(row => (
              <Tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}
