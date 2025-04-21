'use client'
import { useMemo } from 'react'
import Text from '@/shared/components/Text'
import Icon from '@/shared/containers/Icons'
import { CarRegister } from '@/shared/containers/GeneralTable/makeData'
import {
  ButtonLink,
  ButtonSecondary,
  ContTitle,
  GroupButtons,
  DownloadButton
} from './styled'
import AssetManagementTableData from './table'
import { usePathname } from 'next/navigation'
import NuevaRutina from '@/features/client/MaintenanceRoutines/containers/NuevaRutina'

type ScreenType =
  | 'default'
  | 'flota'
  | 'rutinasMantenimientos'
  | 'alertasVencimientos'

interface AssetManagementTableProps {
  screenType?: ScreenType
  nuevoActivo?: boolean
  onResponsableClick?: (vehicle: CarRegister) => void
  onVencimientoClick?: () => void
}

const BUTTON_CONFIG = {
  flota: {
    href: '/admin/assetFleet/newActive',
    icon: 'plus',
    text: 'Añadir Activo'
  },
  rutinasMantenimientos: {
    href: '/admin/maintenance/listingRoutines',
    icon: 'list',
    text: 'Listado de Rutinas'
  },
  alertasVencimientos: {
    href: '/admin/alertsExpirations/listExpirations',
    icon: 'list',
    text: 'Listado de Vencimientos'
  }
} as const

export default function AssetManagementTable({
  screenType: propScreenType,
  nuevoActivo = true
}: AssetManagementTableProps) {
  const pathname = usePathname()

  const screenType = useMemo(() => {
    if (propScreenType) return propScreenType

    if (pathname?.includes('/maintenance')) {
      return 'listingRoutines'
    }

    if (nuevoActivo) {
      return 'flota'
    }

    if (pathname?.includes('/alertsExpirations')) {
      return 'alertsExpirations'
    }

    return 'default'
  }, [propScreenType, nuevoActivo, pathname])

  const getButtonConfig = () => {
    return BUTTON_CONFIG[screenType as keyof typeof BUTTON_CONFIG] || null
  }

  const buttonConfig = getButtonConfig()
  const isBlueButton =
    screenType === 'listingRoutines' || screenType === 'alertsExpirations'

  return (
    <>
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
      <AssetManagementTableData isFlotaActivos={screenType === 'flota'} />
    </>
  )
}
