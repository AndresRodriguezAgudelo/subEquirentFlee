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
import { TableContainer } from './styled';
import { type CarRegister } from '@/shared/containers/GeneralTable/makeData';

interface TableListProps<T> {
  /** Puedes pasar columns, customColumns o column. Se usará el primero definido. */
  columns?: ColumnDef<T>[];
  customColumns?: ColumnDef<T>[];
  column?: ColumnDef<T>[];
  data: T[];
  pageSize?: number;
  onRowClick?: (item: T) => void;
  onResponsableClick?: (vehicle: CarRegister) => void;
  showActions?: boolean;
  actionIcons?: {
    icon: string;
    onClick: (item: T) => void;
    color?: string;
  }[];
}

type BaseItem = {
  id: number;
  [key: string]: any;
};

export default function TableList<T extends BaseItem>({
  columns,
  customColumns,
  column,
  data,
  pageSize = 10,
  onRowClick,
  onResponsableClick,
  showActions = false,
  actionIcons,
}: TableListProps<T>) {
  // Prioridad: columns > customColumns > column
  const resolvedColumns = columns || customColumns || column;
  const table = useReactTable({
    data,
    columns: resolvedColumns || [],
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContainer>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr 
              key={row.id}
              onClick={() => onRowClick?.(row.original)}
              style={{ cursor: onRowClick ? 'pointer' : 'default' }}
            >
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
}
