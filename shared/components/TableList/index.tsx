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
  columns: ColumnDef<T>[];
  data: T[];
  pageSize?: number;
  onRowClick?: (item: T) => void;
  onResponsableClick?: (vehicle: CarRegister) => void;
  showActions?: boolean;
  customColumns?: {
    header: string;
    accessor: keyof T;
  }[];
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
  data,
  pageSize = 10,
  onRowClick,
  onResponsableClick,
  showActions = false,
  customColumns,
  actionIcons,
}: TableListProps<T>) {
  const table = useReactTable({
    data,
    columns,
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
