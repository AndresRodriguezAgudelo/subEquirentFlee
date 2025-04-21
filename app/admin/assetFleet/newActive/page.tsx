import { Suspense } from 'react';

import AssetManagementNewTemplate from '@/features/asset-management/containers/AssetManagementTemplate/AssetManagementNewTemplate';

export default function AssetManagementNew() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AssetManagementNewTemplate />
    </Suspense>
  );
}
