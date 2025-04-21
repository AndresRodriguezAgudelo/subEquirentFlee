'use client'

import React, { useState } from 'react'
import type { Asset } from './ActivosVehiculos'
import BotoneraPerfilPreop from './BotoneraPerfilPreop'
import TitlePreop from './TitlePreop'
import ActivosVehiculos from './ActivosVehiculos'
import TesResponsiveModal from '../../../../../shared/containers/Modales/TesResponsiveModal'
import Button from '@/shared/components/Button'
import {
  Container,
  TitleContainer,
  ActivosVehiculosContainer,
  FormularioContainer,
  NivelCombustibleContainer,
  ElementosInspeccionContainer,
  DescripcionNovedadesContainer,
  BotonesFinalesContainer
} from './styled'

export default function PreoperationalNewsView() {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAssetSelect = (asset: Asset | null) => {
    setSelectedAsset(asset)
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <Container>
      <BotoneraPerfilPreop />
      <TitlePreop />
      <ActivosVehiculos onAssetSelect={handleAssetSelect} />
      {selectedAsset && (
        <>
          <FormularioContainer>Contenedor 1</FormularioContainer>
          <NivelCombustibleContainer>Contenedor 2</NivelCombustibleContainer>
          <ElementosInspeccionContainer>
            Contenedor 3
          </ElementosInspeccionContainer>
          <DescripcionNovedadesContainer>
            Contenedor 4
          </DescripcionNovedadesContainer>
        </>
      )}
      {/* <BotonesFinalesContainer>
            <Button onClick={handleOpenModal}>Abrir Modal</Button>
          </BotonesFinalesContainer> */}
      <TesResponsiveModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Container>
  )
}
