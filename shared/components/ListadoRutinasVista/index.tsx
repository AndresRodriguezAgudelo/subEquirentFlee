'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import TableList from '@/shared/components/TableList';
import TableFilters from '@/shared/components/AssetManagementFilters';
import Button from '@/shared/components/Button';
import Icon from '@/shared/containers/Icons';
import Text from '@/shared/components/Text';

// Datos de prueba
const mockData = [
  {
    id: 1,
    rutina: 'Cambio de aceite',
    tipoRutina: 'Preventiva',
    marca: 'Toyota',
    vigencia: '12 meses',
    inicioAlerta: '3 meses antes',
    segundaAlerta: '1 mes antes',
    tiempoCritico: '1 semana',
  },
  {
    id: 2,
    rutina: 'Revisión de frenos',
    tipoRutina: 'Correctiva',
    marca: 'Honda',
    vigencia: '6 meses',
    inicioAlerta: '2 meses antes',
    segundaAlerta: '2 semanas antes',
    tiempoCritico: '3 días',
  },
  {
    id: 3,
    rutina: 'Alineación y balanceo',
    tipoRutina: 'Preventiva',
    marca: 'Nissan',
    vigencia: '4 meses',
    inicioAlerta: '1 mes antes',
    segundaAlerta: '2 semanas antes',
    tiempoCritico: '5 días',
  },
  {
    id: 4,
    rutina: 'Cambio de filtros',
    tipoRutina: 'Preventiva',
    marca: 'Todas',
    vigencia: '3 meses',
    inicioAlerta: '1 mes antes',
    segundaAlerta: '1 semana antes',
    tiempoCritico: '2 días',
  },
  {
    id: 5,
    rutina: 'Revisión eléctrica',
    tipoRutina: 'Correctiva',
    marca: 'BMW',
    vigencia: '12 meses',
    inicioAlerta: '2 meses antes',
    segundaAlerta: '1 mes antes',
    tiempoCritico: '1 semana',
  },
  {
    id: 6,
    rutina: 'Cambio de llantas',
    tipoRutina: 'Preventiva',
    marca: 'Todas',
    vigencia: '24 meses',
    inicioAlerta: '3 meses antes',
    segundaAlerta: '1 mes antes',
    tiempoCritico: '2 semanas',
  },
  {
    id: 7,
    rutina: 'Revisión de suspensión',
    tipoRutina: 'Correctiva',
    marca: 'Mercedes',
    vigencia: '6 meses',
    inicioAlerta: '2 meses antes',
    segundaAlerta: '2 semanas antes',
    tiempoCritico: '4 días',
  },
  {
    id: 8,
    rutina: 'Cambio de batería',
    tipoRutina: 'Preventiva',
    marca: 'Todas',
    vigencia: '36 meses',
    inicioAlerta: '6 meses antes',
    segundaAlerta: '2 meses antes',
    tiempoCritico: '2 semanas',
  },
];

const filterConfig = [
  {
    id: 'search',
    type: 'text' as const,
    label: 'Filtrar por nombre de rutina',
    placeholder: 'Buscar rutina...',
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
        accessorKey: 'rutina',
        header: 'Rutina',
      },
      {
        accessorKey: 'tipoRutina',
        header: 'Tipo de Rutina',
      },
      {
        accessorKey: 'marca',
        header: 'Marca',
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
        accessorKey: 'tiempoCritico',
        header: 'Tiempo Crítico',
      },
    ],
    []
  );

  const filteredData = useMemo(() => {
    if (!filters.search) return mockData;

    return mockData.filter(item =>
      item.rutina.toLowerCase().includes(filters.search.toLowerCase())
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
          onClick={() => router.push('/admin/mantenimiento/nuevaRutina')}
          className="maintenance"
        >
          <Icon icon="plus" size={16} color="white" />
          <Text styleName="Content Accent" color="white">
            Nueva Rutina
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
