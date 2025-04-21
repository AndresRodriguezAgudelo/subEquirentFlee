'use client';

import React, { useState } from 'react';
import {
  type ColumnDef,
  useReactTable,
  getCoreRowModel,
  type RowSelectionState,
} from '@tanstack/react-table';
import { type CarRegister } from './makeData';

import Icon from '@/shared/containers/Icons';
import { ContTable, GroupHeadersTable } from './styled';
import Text from '../../components/Text';
import TableList from '@/shared/components/TableList';
import TableGrid from '@/shared/components/TableGrid';
import styles from './table.module.css';

interface BaseRow {
  id: number;
}

interface TableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  isFlotaActivos?: boolean;
  onResponsableClick?: (vehicle: CarRegister) => void;
  onRowClick?: (item: T) => void;
}

export default function Table<T extends BaseRow & CarRegister>({
  columns,
  data,
  isFlotaActivos = false,
  onResponsableClick,
  onRowClick,
}: TableProps<T>) {
  const [typeView, setTypeView] = useState<'list' | 'grid'>('list');
  const [showDeleted, setShowDeleted] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleToggleDeleted = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setShowDeleted(showDeleted === 0 ? 1 : 0);
    }, 300);
    setTimeout(() => {
      setIsFlipping(false);
    }, 600);
  };

  // Datos de prueba para elementos eliminados
  const dataEliminados = [
    {
      id: 999,
      plate: 'XYZ999',
      brand: 'Toyota',
      responsable: 'Sin Asignar',
      line: 'Corolla',
      class: 'Sedan',
      model: '2022',
      chassisNumber: '9876543210',
      status: 'Eliminado',
      administration: 'Administración 1',
    },
    {
      id: 998,
      plate: 'XYZ998',
      brand: 'Chevrolet',
      responsable: 'Sin Asignar',
      line: 'Spark',
      class: 'Hatchback',
      model: '2021',
      chassisNumber: '9876543211',
      status: 'Eliminado',
      administration: 'Administración 2',
    },
  ] as unknown as T[];

  const filteredData = showDeleted ? dataEliminados : data;

  return (
    <div className={`${styles.container} ${isFlipping ? styles.flipping : ''}`}>
      <GroupHeadersTable>
        <div>
          <button
            style={{
              backgroundColor: typeView === 'list' ? '#011726' : '#e9f0f5',
              border: 'none',
              cursor: 'pointer',
              padding: '8px'
            }}
            onClick={() => setTypeView('list')}
          >
            <Icon 
              icon="list" 
              size={24} 
              color={typeView === 'list' ? '#FFFFFF' : '#063e69'}
            />
          </button>
          <button
            style={{
              backgroundColor: typeView === 'grid' ? '#011726' : '#e9f0f5',
              border: 'none',
              cursor: 'pointer',
              padding: '8px'
            }}
            onClick={() => setTypeView('grid')}
          >
            <Icon 
              icon="grid" 
              size={24} 
              color={typeView === 'grid' ? '#FFFFFF' : '#063e69'}
            />
          </button>
        </div>
        <div>
          <button
            className={`${styles.deletedButton} ${
              showDeleted ? styles.active : ''
            }`}
            onClick={handleToggleDeleted}
          >
            <Icon icon="trash" size={24} />
            <Text styleName="Content Accent">
              {showDeleted ? 'Ver Activos' : 'Ver Eliminados'}
            </Text>
          </button>
        </div>
      </GroupHeadersTable>

      <ContTable>
        {typeView === 'list' ? (
          <TableList 
            columns={columns}
            data={filteredData}
            onRowClick={onRowClick}
            onResponsableClick={onResponsableClick}
          />
        ) : (
          <TableGrid
            title="Activos"
            icon="car"
            data={filteredData}
            isFlotaActivos={isFlotaActivos}
            onResponsableClick={onResponsableClick}
          />
        )}
      </ContTable>
    </div>
  );
}
