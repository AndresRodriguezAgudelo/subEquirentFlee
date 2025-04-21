'use client';

import React, { useState, useEffect } from 'react';
import InputText from '@/shared/components/InputText';
import {
  ActivosVehiculosContainer,
  SearchSection,
  ResultsSection,
  EmptyMessage,
  AssetCard,
  StatusRow,
  StatusDot,
  StatusText,
  CardDivider,
  DetailsRow,
  DetailColumn,
  DetailLabel,
  DetailValue
} from './styled';

export type Asset = {
  id: string;
  plate: string;
  available: boolean;
  inManagement: boolean;
  brand: string;
  line: string;
  model: string;
  currentMeasure: string;
  class: string;
};

const mockAssetsData: Asset[] = [
  {
    id: 'VH001',
    plate: 'ABC123',
    available: true,
    inManagement: true,
    brand: 'Nissan',
    line: 'Versa',
    model: '2022',
    currentMeasure: '15000 kms',
    class: 'Automóvil'
  },
  {
    id: 'VH002',
    plate: 'ABC321',
    available: false,
    inManagement: false,
    brand: 'Chevrolet',
    line: 'Tracker',
    model: '2023',
    currentMeasure: '8000 kms',
    class: 'SUV'
  },
  {
    id: 'VH003',
    plate: 'ABC132',
    available: true,
    inManagement: true,
    brand: 'Toyota',
    line: 'Hilux',
    model: '2021',
    currentMeasure: '25000 kms',
    class: 'Camioneta'
  }
];

type Props = {
  onAssetSelect: (asset: Asset | null) => void;
};

export default function ActivosVehiculos({ onAssetSelect }: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [assets, setAssets] = useState<Asset[]>([]);

  // Cargar los datos iniciales
  useEffect(() => {
    setAssets(mockAssetsData);
  }, []);

  const filteredAssets = searchTerm
    ? assets.filter(
      (asset) =>
        asset.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        asset.plate.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : [];

  const handleAssetClick = (asset: Asset) => {
    setSelectedAsset(asset);
    setAssets([asset]); // Limpiamos el arreglo y solo dejamos el seleccionado
    onAssetSelect(asset);
  };

  const renderAssetCard = (asset: Asset) => (
    <AssetCard
      key={asset.id}
      onClick={() => !selectedAsset && handleAssetClick(asset)}
    >
      <StatusRow>
        <StatusDot data-status={asset.available ? 'green' : 'red'} />
        <StatusText>
          {asset.available ? 'Disponible' : 'No disponible'}
        </StatusText>
      </StatusRow>
      <StatusRow>
        <StatusDot data-status={asset.inManagement ? 'green' : 'red'} />
        <StatusText>
          {asset.inManagement ? 'En administración' : 'Sin administración'}
        </StatusText>
      </StatusRow>
      <DetailsRow>
        <DetailColumn>
          <DetailLabel>Marca</DetailLabel>
          <DetailValue>{asset.brand}</DetailValue>
        </DetailColumn>
        <DetailColumn>
          <DetailLabel>Línea</DetailLabel>
          <DetailValue>{asset.line}</DetailValue>
        </DetailColumn>
        <DetailColumn>
          <DetailLabel>Modelo</DetailLabel>
          <DetailValue>{asset.model}</DetailValue>
        </DetailColumn>
      </DetailsRow>
      <CardDivider />
      <DetailsRow>
        <DetailColumn>
          <DetailLabel>Medida actual</DetailLabel>
          <DetailValue>{asset.currentMeasure}</DetailValue>
        </DetailColumn>
        <DetailColumn>
          <DetailLabel>Clase</DetailLabel>
          <DetailValue>{asset.class}</DetailValue>
        </DetailColumn>
      </DetailsRow>
    </AssetCard>
  );

  return (
    <ActivosVehiculosContainer>
      <SearchSection>
        <InputText
          label="Buscar por: ID, placa..."
          placeholder="Ingrese ID o placa del vehículo"
          value={searchTerm}
          onChange={async (e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </SearchSection>
      <ResultsSection>
        {!selectedAsset ? (
          <>
            {!searchTerm && (
              <EmptyMessage>Busca para continuar</EmptyMessage>
            )}
            {searchTerm && filteredAssets.length === 0 && (
              <EmptyMessage>No se encontraron resultados</EmptyMessage>
            )}
            {filteredAssets.map(renderAssetCard)}
          </>
        ) : (
          renderAssetCard(selectedAsset)
        )}
      </ResultsSection>
    </ActivosVehiculosContainer>
  );
}
