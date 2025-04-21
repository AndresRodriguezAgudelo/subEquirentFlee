'use client';

import { Fragment, useState } from 'react';
import AssetManagementChards from '../../components/AssetManagementChards';
import AssetManagementTable from '../../components/AssetManagementTable';
import AsignarResponsableModal from '../Modales/AsignarResponsable';
import EligeVencimientoModal from '../Modales/EligeVencimiento';
import { LineSeparation } from './styled';

interface CarRegister {
  id: number;
  plate: string;
  status: string;
  responsable: string;
  brand: string;
  line: string;
  model: string;
  class: string;
  administration: string;
  kilometers?: number;
  chassisNumber: string;
  [key: string]: any;
}

export default function AlertasVencimientos() {
  const [isResponsableModalOpen, setIsResponsableModalOpen] = useState(false);
  const [isVencimientoModalOpen, setIsVencimientoModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<CarRegister | null>(null);

  const handleResponsableClick = (vehicle: CarRegister) => {
    if (vehicle.responsable === 'Sin Asignar') {
      setSelectedVehicle(vehicle);
      setIsResponsableModalOpen(true);
    }
  };

  const handleVencimientoClick = () => {
    setIsVencimientoModalOpen(true);
  };

  const handleCloseResponsableModal = () => {
    setIsResponsableModalOpen(false);
    setSelectedVehicle(null);
  };

  const handleCloseVencimientoModal = () => {
    setIsVencimientoModalOpen(false);
  };

  return (
    <Fragment>
      <AssetManagementChards title="Alertas y Vencimientos" icon="bell-ring" />
      <LineSeparation />
      <AssetManagementTable 
        nuevoActivo={false} 
        onResponsableClick={handleResponsableClick}
        onVencimientoClick={handleVencimientoClick}
        screenType="alertasVencimientos"
      />
      <AsignarResponsableModal
        isOpen={isResponsableModalOpen}
        onClose={handleCloseResponsableModal}
        vehicle={selectedVehicle}
      />
      <EligeVencimientoModal
        isOpen={isVencimientoModalOpen}
        onClose={handleCloseVencimientoModal}
      />
    </Fragment>
  );
}
