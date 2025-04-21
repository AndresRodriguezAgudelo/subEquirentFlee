'use client';

import { Fragment, useMemo } from 'react';
import Text from '@/shared/components/Text';
import Icon from '@/shared/containers/Icons';
import {
  ButtonLink,
  ButtonSecondary,
  ContTitle,
  GroupButtons,
  DownloadButton,
} from './styled';
import AssetManagementTableData from './table';
import { usePathname } from 'next/navigation';
import { type CarRegister } from '@/shared/containers/GeneralTable/makeData';

type ScreenType =
  | 'default'
  | 'flota'
  | 'maintenanceRoutines'
  | 'alertasVencimientos';

interface AssetManagementTableProps {
  nuevoActivo?: boolean;
  onResponsableClick?: (vehicle: CarRegister) => void;
  screenType?: ScreenType;
  onVencimientoClick?: () => void;
}

const BUTTON_CONFIG = {
  flota: {
    href: '/admin/assetFleet/newActive',
    icon: 'plus',
    text: 'Añadir Activo',
  },
  maintenanceRoutines: {
    href: '/admin/maintenance/listingRoutines',
    icon: 'list',
    text: 'Listado de Rutinas',
  },
  alertasVencimientos: {
    href: '/admin/alertsExpirations/listExpirations',
    icon: 'list',
    text: 'Listado de Vencimientos',
  },
} as const;

export default function AssetManagementTable({
  nuevoActivo = false,
  onResponsableClick,
  screenType = 'default',
  onVencimientoClick,
}: AssetManagementTableProps) {
  const pathname = usePathname();

  const currentScreenType = useMemo(() => {
    if (screenType) return screenType;

    if (pathname?.includes('/maintenance')) {
      return 'maintenanceRoutines';
    }

    if (nuevoActivo) {
      return 'flota';
    }

    if (pathname?.includes('/alertasVencimientos')) {
      return 'alertasVencimientos';
    }

    return 'default';
  }, [screenType, nuevoActivo, pathname]);

  const getButtonConfig = () => {
    return BUTTON_CONFIG[currentScreenType as keyof typeof BUTTON_CONFIG] || null;
  };

  const buttonConfig = getButtonConfig();
  const isBlueButton =
    currentScreenType === 'maintenanceRoutines' ||
    currentScreenType === 'alertasVencimientos';

  return (
    <Fragment>
      <ContTitle>
        <div style={{ maxWidth: '350px' }}>
          <Text styleName="Heading 4">
            Activos visibles en la tabla 2000/2600
          </Text>
        </div>
        <GroupButtons>
          {buttonConfig && (
            <ButtonLink
              href={buttonConfig.href}
              className={isBlueButton ? 'maintenance' : ''}
            >
              <Icon icon={buttonConfig.icon} size={16} />
              <Text styleName="Content Accent">{buttonConfig.text}</Text>
            </ButtonLink>
          )}

          <ButtonSecondary href="/admin/assetFleet/massiveManagement">
            <Icon icon="file-box" size={16} />
            <Text styleName="Content Accent">Gestion Masiva</Text>
          </ButtonSecondary>

          <DownloadButton>
            <Icon icon="download" size={16} />
            <Text styleName="Content Accent">Descargar Tabla</Text>
          </DownloadButton>
        </GroupButtons>
      </ContTitle>
      <AssetManagementTableData
        isFlotaActivos={nuevoActivo}
        onResponsableClick={onResponsableClick}
        screenType={currentScreenType}
        onVencimientoClick={onVencimientoClick}
      />
    </Fragment>
  );
}