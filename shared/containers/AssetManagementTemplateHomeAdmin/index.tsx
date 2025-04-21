import { Fragment } from 'react'

import AssetManagementChardsHomeAdmin from '@/features/superAdmin/components/AssetManagementChardsHomeAdmin'

import { LineSeparation } from './styled'

export default function AssetManagementTemplate() {
  return (
    <Fragment>
      <AssetManagementChardsHomeAdmin
        title="Dashboard General - Perfil superAdmin"
        icon="home"
      />
      <LineSeparation />
    </Fragment>
  )
}
