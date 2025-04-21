'use client';
import { ReactNode, useMemo, useState } from 'react';
import { type ColumnDef } from '@tanstack/react-table';

import {
  CarRegister,
  makeCarRegisterData,
} from '@/shared/containers/GeneralTable/makeData';
import Icon from '@/shared/containers/Icons';
import Text from '@/shared/components/Text';
import Table from '@/shared/containers/GeneralTable';
import TableFilters from '@/shared/components/AssetManagementFilters';

const filterConfig = [
  {
    id: 'search',
    type: 'text' as const,
    label: 'Busqueda por: ID o placa',
    placeholder: 'Buscar por ID o Placa',
    isBig: true,
  },
  {
    id: 'brand',
    type: 'text' as const,
    label: 'Filtrar por:',
    placeholder: 'Buscar por marca',
  },
  {
    id: 'line',
    type: 'text' as const,
    label: 'Línea',
    placeholder: 'Buscar por línea',
  },
  {
    id: 'classType',
    type: 'select' as const,
    label: 'Clase',
    options: [
      { value: '', label: 'Clase' },
      { value: 'Sedan', label: 'Sedan' },
      { value: 'Hatchback', label: 'Hatchback' },
      { value: 'SUV', label: 'SUV' },
      { value: 'Pickup', label: 'Pickup' },
    ],
  },
  {
    id: 'model',
    type: 'text' as const,
    label: 'Modelo',
    placeholder: 'Buscar por modelo',
  },
  {
    id: 'status',
    type: 'select' as const,
    label: 'Estado',
    options: [
      { value: '', label: 'Estado' },
      { value: 'active', label: 'Activo' },
      { value: 'inactive', label: 'Inactivo' },
    ],
  },
  {
    id: 'administration',
    type: 'select' as const,
    label: 'Administración',
    options: [
      { value: '', label: 'Administración' },
      { value: 'Administración 1', label: 'Administración 1' },
      { value: 'Administración 2', label: 'Administración 2' },
      { value: 'Administración 3', label: 'Administración 3' },
      { value: 'Administración 4', label: 'Administración 4' },
    ],
  },
];

export default function AssetManagementTableData({ isFlotaActivos = false }) {
  // Estados para los filtros
  const [filters, setFilters] = useState({
    search: '',
    brand: '',
    line: '',
    classType: '',
    model: '',
    status: '',
    administration: '',
  });

  // Función para manejar cambios en los filtros
  const handleFilterChange = (filter: string, value: string) => {
    setFilters(prev => ({ ...prev, [filter]: value }));
  };

  // posible futura función para limpiar filtros
  const handleClearFilters = () => {
    setFilters({
      search: '',
      brand: '',
      line: '',
      classType: '',
      model: '',
      status: '',
      administration: '',
    });
  };

  const allData = useMemo(() => makeCarRegisterData(50), []);

  // Función de filtrado
  const filteredData = useMemo(() => {
    return allData.filter(item => {
      const matchesSearch =
        !filters.search ||
        item.id.toString().includes(filters.search) ||
        item.plate.includes(filters.search);
      const matchesBrand = !filters.brand || item.brand.includes(filters.brand);
      const matchesLine = !filters.line || item.line.includes(filters.line);
      const matchesClass =
        !filters.classType || item.class.includes(filters.classType);
      const matchesModel =
        !filters.model || item.model.toString().includes(filters.model);
      const matchesAdministration =
        !filters.administration ||
        item.administration.includes(filters.administration);

      // algo ocurre con el status, pendiente revisar
      const matchesStatus =
        !filters.status || item.status.includes(filters.status);

      return (
        matchesSearch &&
        matchesBrand &&
        matchesLine &&
        matchesClass &&
        matchesModel &&
        matchesStatus &&
        matchesAdministration
      );
    });
  }, [allData, filters]);

  const columns = useMemo<ColumnDef<CarRegister>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        cell: info => (
          <Text styleName="Caption Standard">
            {info?.getValue() as ReactNode}
          </Text>
        ),
      },
      {
        accessorKey: 'plate',
        header: 'Placa',
        cell: info => (
          <Text styleName="Caption Standard">
            {info.getValue() as ReactNode}
          </Text>
        ),
      },
      {
        accessorKey: 'brand',
        header: 'Marca',
        cell: info => (
          <Text styleName="Caption Standard">
            {info.getValue() as ReactNode}
          </Text>
        ),
      },
      {
        accessorKey: 'line',
        header: 'Linea',
        cell: info => (
          <Text styleName="Caption Standard">
            {info.getValue() as ReactNode}
          </Text>
        ),
      },
      {
        accessorKey: 'class',
        header: 'Clase',
        cell: info => (
          <Text styleName="Caption Standard">
            {info.getValue() as ReactNode}
          </Text>
        ),
      },
      {
        accessorKey: 'model',
        header: 'Modelo',
        cell: info => (
          <Text styleName="Caption Standard">
            {info.getValue() as ReactNode}
          </Text>
        ),
      },
      {
        accessorKey: 'status',
        header: 'Estado',
        cell: info => (
          <Text styleName="Caption Standard">
            {info.getValue() as ReactNode}
          </Text>
        ),
      },
      {
        accessorKey: 'administration',
        header: 'Administración',
        cell: info => (
          <Text styleName="Caption Standard">
            {info.getValue() as ReactNode}
          </Text>
        ),
      },
      {
        accessorKey: 'actions',
        header: 'Acciones',
        cell: () => (
          <div
            style={{
              width: 'fit-content',
              margin: 'auto',
              display: 'flex',
              gap: '8px',
            }}
          >
            <button>
              <Icon icon="book-open-check" size={24} />
            </button>
            <button>
              <Icon icon="trash-2" size={24} />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <>
      {/* Filtros */}
      <TableFilters
        filters={filters}
        filterConfig={filterConfig}
        onFilterChange={handleFilterChange}
      />

      {/* Tabla */}
      <Table
        columns={columns}
        data={filteredData}
        isFlotaActivos={isFlotaActivos}
      />
    </>
  );
}
