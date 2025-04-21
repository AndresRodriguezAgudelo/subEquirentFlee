import { Suspense } from 'react';

import AssetManagementNewTemplate from '@/features/client/AssetFleet/containers/AssetManagementNewTemplate';

export default function AssetManagementNew() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AssetManagementNewTemplate />
    </Suspense>
  );
}
