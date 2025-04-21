'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import TableList from '@/shared/components/TableList';
import TableFilters from '@/features/asset-management/components/AssetManagementFilters';
import Button from '@/shared/components/Button';
import Icon from '@/shared/containers/Icons';
import Text from '@/shared/components/Text';
import mockData from './mockData.json';

const filterConfig = [
  {
    id: 'search',
    type: 'text' as const,
    label: 'Buscar por: Nombre de vencimiento',
    placeholder: 'Type a commant or search...',
    isBig: true,
  },
];

export default function VistaListadoRutinas() {
  const router = useRouter();
  const [filters, setFilters] = useState<{ [key: string]: string }>({
    search: '',
  });

  const handleFilterChange = (filterId: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterId]: value,
    }));
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: 'nombreVencimiento',
        header: 'Nombre de Vencimiento',
      },
      {
        accessorKey: 'vigencia',
        header: 'Vigencia',
      },
      {
        accessorKey: 'inicioAlerta',
        header: 'Inicio de Alerta',
      },
      {
        accessorKey: 'segundaAlerta',
        header: 'Segunda Alerta',
      },
      {
        accessorKey: 'tiempoCriticoGestion',
        header: 'Tiempo Critico para Gestion',
      },
      {
        accessorKey: 'flujoTrabajo',
        header: 'Flujo de Trabajo',
      },
      {
        accessorKey: 'tipoDocumento',
        header: 'Tipo de Documento',
      },
    ],
    []
  );

  const filteredData = useMemo(() => {
    if (!filters.search) return mockData.vencimientos;

    return mockData.vencimientos.filter(item =>
      item.nombreVencimiento.toLowerCase().includes(filters.search.toLowerCase())
    );
  }, [filters.search]);

  return (
    <div style={{ padding: '24px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
        }}
      >
        <div style={{ flex: 0.3, marginLeft: '24px' }}>
          <TableFilters
            filters={filters}
            filterConfig={filterConfig}
            onFilterChange={handleFilterChange}
          />
        </div>
        <Button
          onClick={() => router.push('/admin/alertsExpirations/createAlert')}
          variant="maintenance"
        >
          <Icon icon="plus" size={16} color="white" />
          <Text styleName="Content Accent" color="white">
            Crear Vencimiento
          </Text>
        </Button>
      </div>

      <TableList
        columns={columns}
        data={filteredData}
        showActions
        actionIcons={[
          {
            icon: 'edit',
            onClick: row => console.log('Editar', row.id),
            color: '#666666',
          },
          {
            icon: 'trash',
            onClick: row => console.log('Eliminar', row.id),
            color: '#666666',
          },
        ]}
      />
    </div>
  );
}
