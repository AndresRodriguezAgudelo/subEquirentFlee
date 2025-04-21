'use client';

import { Fragment, useMemo } from 'react';
import Text from '@/shared/components/Text';
import Icon from '@/shared/containers/Icons';
import { ButtonLink, ButtonSecondary, ContTitle, GroupButtons, DownloadButton } from './styled';
import AssetManagementTableData from './table';
import { usePathname } from 'next/navigation';

type ScreenType = 'default' | 'flota' | 'rutinasMantenimientos' | 'alertasVencimientos';

interface AssetManagementTableProps {
  screenType?: ScreenType;
  nuevoActivo?: boolean;
}

const BUTTON_CONFIG = {
  flota: {
    href: '/admin/flotaActivos/nuevoActivo',
    icon: 'plus',
    text: 'Añadir Activo'
  },
  rutinasMantenimientos: {
    href: '/admin/mantenimiento/listadoRutinas',
    icon: 'list',
    text: 'Listado de Rutinas'
  },
  alertasVencimientos: {
    href: '/admin/alertasVencimientos/listado',
    icon: 'list',
    text: 'Listado de Vencimientos'
  }
} as const;

export default function AssetManagementTable({
  screenType: propScreenType,
  nuevoActivo = true
}: AssetManagementTableProps) {
  const pathname = usePathname();

  const screenType = useMemo(() => {
    if (propScreenType) return propScreenType;

    if (pathname?.includes('/mantenimiento')) {
      return 'rutinasMantenimientos';
    }

    if (nuevoActivo) {
      return 'flota';
    }

    if (pathname?.includes('/alertasVencimientos')) {
      return 'alertasVencimientos';
    }

    return 'default';
  }, [propScreenType, nuevoActivo, pathname]);

  const getButtonConfig = () => {
    return BUTTON_CONFIG[screenType as keyof typeof BUTTON_CONFIG] || null;
  };

  const buttonConfig = getButtonConfig();
  const isBlueButton = screenType === 'rutinasMantenimientos' || screenType === 'alertasVencimientos';

  return (
    <Fragment>
      <ContTitle>
        <div style={{ maxWidth: '350px' }}>
          <Text styleName="Heading 4">Activos visibles en la tabla 2000/2600</Text>
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

          <ButtonSecondary href="/admin/flotaActivos/gestionMasiva">
            <Icon icon="file-box" size={16} />
            <Text styleName="Content Accent">Gestion Masiva</Text>
          </ButtonSecondary>

          <DownloadButton>
            <Icon icon="download" size={16} />
            <Text styleName="Content Accent">Descargar Tabla</Text>
          </DownloadButton>
        </GroupButtons>
      </ContTitle>
      <AssetManagementTableData isFlotaActivos={screenType === 'flota'} />
    </Fragment>
  );
}
