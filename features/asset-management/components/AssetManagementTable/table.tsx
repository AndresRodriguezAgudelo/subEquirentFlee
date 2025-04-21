'use client';

import { type ColumnDef } from '@tanstack/react-table';
import { ReactNode, useCallback, useMemo, useState, useId, useEffect } from 'react';
import dynamic from 'next/dynamic';
import {
  CarRegister,
  makeCarRegisterData,
} from '@/shared/containers/GeneralTable/makeData';
import Text from '@/shared/components/Text';
import Icon from '@/shared/containers/Icons';
import GeneralTable from '@/shared/containers/GeneralTable';
import TableGrid from '@/shared/components/TableGrid';
import TableFilters from '@/features/asset-management/components/AssetManagementFilters';
import ActivoModal from '@/features/asset-management/containers/Modales/ActivoIndividual';

interface AssetManagementTableDataProps {
  isFlotaActivos?: boolean;
  onResponsableClick?: (vehicle: CarRegister) => void;
  onVencimientoClick?: () => void;
  screenType: 'default' | 'flota' | 'maintenanceRoutines' | 'alertasVencimientos';
}

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

export default function AssetManagementTableData({
  isFlotaActivos = false,
  onResponsableClick,
  onVencimientoClick,
  screenType,
}: AssetManagementTableDataProps) {
  const [isClient, setIsClient] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<CarRegister | null>(null);
  const [filters, setFilters] = useState<Record<string, string>>({
    search: '',
    brand: '',
    classType: '',
    status: '',
    administration: '',
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleFilterChange = useCallback((key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  const handleResponsableClick = useCallback((vehicle: CarRegister) => {
    if (onResponsableClick && vehicle.responsable === 'Sin Asignar') {
      onResponsableClick(vehicle);
    }
  }, [onResponsableClick]);

  const handleRowClick = useCallback((vehicle: CarRegister) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedVehicle(null);
  }, []);

  const allData = useMemo(() => makeCarRegisterData(50), []);

  const filteredData = useMemo(() => {
    return allData.filter(item => {
      const matchesSearch =
        !filters.search ||
        item.id.toString().includes(filters.search) ||
        item.plate.includes(filters.search);
      const matchesBrand = !filters.brand || item.brand.includes(filters.brand);
      const matchesClass =
        !filters.classType || item.class.includes(filters.classType);
      const matchesStatus =
        !filters.status || item.status.includes(filters.status);
      const matchesAdministration =
        !filters.administration ||
        item.administration.includes(filters.administration);

      return (
        matchesSearch &&
        matchesBrand &&
        matchesClass &&
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
        cell: info => isClient ? (
          <Text styleName="Caption Standard">
            {info.getValue() as ReactNode}
          </Text>
        ) : null,
      },
      {
        accessorKey: 'plate',
        header: 'Placa',
        cell: info => isClient ? (
          <Text styleName="Caption Standard">
            {info.getValue() as ReactNode}
          </Text>
        ) : null,
      },
      {
        accessorKey: 'brand',
        header: 'Marca',
        cell: info => isClient ? (
          <Text styleName="Caption Standard">
            {info.getValue() as ReactNode}
          </Text>
        ) : null,
      },
      {
        accessorKey: 'class',
        header: 'Clase',
        cell: info => isClient ? (
          <Text styleName="Caption Standard">
            {info.getValue() as ReactNode}
          </Text>
        ) : null,
      },
      {
        accessorKey: 'status',
        header: 'Estado',
        cell: info => isClient ? (
          <Text styleName="Caption Standard">
            {info.getValue() as ReactNode}
          </Text>
        ) : null,
      },
      {
        accessorKey: 'administration',
        header: 'Administración',
        cell: info => isClient ? (
          <Text styleName="Caption Standard">
            {info.getValue() as ReactNode}
          </Text>
        ) : null,
      },
      {
        id: 'actions',
        header: 'Acciones',
        cell: info => isClient ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            {info.row.original.responsable === 'Sin Asignar' && (
              <button 
                onClick={() => handleResponsableClick(info.row.original)}
                title="Asignar Responsable"
              >
                <Icon icon="book-open-check" size={24} />
              </button>
            )}
          </div>
        ) : null,
      },
    ],
    [handleResponsableClick, isClient]
  );

  if (!isClient) {
    return null;
  }

  return (
    <>
      <TableFilters
        filters={filters}
        filterConfig={filterConfig}
        onFilterChange={handleFilterChange}
      />
      <GeneralTable
        columns={columns}
        data={filteredData}
        onResponsableClick={handleResponsableClick}
        onRowClick={handleRowClick}
        isFlotaActivos={isFlotaActivos}
      />
      {isModalOpen && selectedVehicle && (
        <ActivoModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          modalContent={selectedVehicle}
        />
      )}
    </>
  );
}
