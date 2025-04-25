'use client';

import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Header, BackButton, Title, FormWrapper } from './styled';
import Icon from '@/shared/containers/Icons';

interface Props {
  children: ReactNode;
  title: string;
}

const LayoutCreateCustomerManagement = ({ children, title }: Props) => {
  const router = useRouter();

  return (
    <Container>
      <Header>
        <BackButton onClick={() => router.back()}>
          <Icon icon="chevron-left" size={24} />
        </BackButton>
        <Title>{title}</Title>
      </Header>
      <FormWrapper>{children}</FormWrapper>
    </Container>
  );
};

export default LayoutCreateCustomerManagement;
