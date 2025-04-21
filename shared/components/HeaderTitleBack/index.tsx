'use client';

import { usePathname, useRouter } from 'next/navigation';

import Icon from '@/shared/containers/Icons';

import { ContainerHeaderTitleBack, BackButton, Title } from './styled';

interface Props {
  title: string;
  onBack?: () => void;
}

export default function HeaderTitleBack(props: Readonly<Props>) {
  const { title, onBack } = props;
  const { push } = useRouter();
  const pathname = usePathname();

  const handleBack = () => {
    if (onBack) return onBack();
    const path = pathname.split('/');
    const lastPath = path.slice(0, path.length - 1).join('/');
    return push(`${lastPath}`);
  };

  return (
    <ContainerHeaderTitleBack>
      <BackButton onClick={handleBack}>
        <Icon icon="chevron-left" size={'32'} />
      </BackButton>
      <Title styleName={'Heading 4'}>{title}</Title>
    </ContainerHeaderTitleBack>
  );
}
