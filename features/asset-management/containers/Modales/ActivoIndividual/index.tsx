'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@/shared/components/Modal';
import TitleModalInformation from '@/shared/components/titleModalInformation';
import StepList from '@/features/asset-management/components/StepList';
import { StepRenderer } from '@/shared/components/StepRenderer';
import ListInformationBasic from '@/features/asset-management/components/AssetManagementForm/ListInformationBasic';
import ListInformationDetailed from '@/features/asset-management/components/AssetManagementForm/ListInformationDetailed';
import ListExpirationsAndMaintenance from '@/features/asset-management/components/AssetManagementForm/ListExpirationsAndMaintenance';
import ListDocumentation from '@/features/asset-management/components/AssetManagementForm/ListDocumentation';
import {
  ButtonsContainer,
  ActionButton,
} from '@/shared/components/Modal/styled';

type ActivoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  modalContent: any;
};

const ActivoModal: React.FC<ActivoModalProps> = ({
  isOpen,
  onClose,
  modalContent,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();

  const handleEditClick = () => {
    // Navegar a la página de edición con los datos del activo
    router.push(
      `/admin/assetFleet/newActive?edit=true&id=${modalContent.id}`
    );
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <TitleModalInformation data={modalContent} />
      <StepList
        steps={[
          'Información Básica ',
          'Información Detallada',
          'Vencimientos y Mantenimiento',
          'Documentación',
        ]}
        setActiveStep={setActiveStep}
        activeStep={activeStep}
        inModal={true}
      />
      <StepRenderer
        activeStep={activeStep}
        steps={[
          <ListInformationBasic key="step1" data={modalContent} />,
          <ListInformationDetailed key="step2" data={modalContent} />,
          <ListExpirationsAndMaintenance key="step3" data={modalContent} />,
          <ListDocumentation key="step4" data={modalContent} />,
        ]}
      />
      <ButtonsContainer>
        <ActionButton data-variant="secondary">
          Descargar hoja de vida
        </ActionButton>
        <ActionButton data-variant="primary" onClick={handleEditClick}>
          Editar activo
        </ActionButton>
      </ButtonsContainer>
    </Modal>
  );
};

export default ActivoModal;
