'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Modal from '@/shared/components/Modal';
import Text from '@/shared/components/Text';
import Icon from '@/shared/containers/Icons';
import {
  FormContainer,
  HeaderContainer,
  IconContainer,
  GridContainer,
  GridItem,
  ItemFooter,
  IconCircle,
  IconBorder,
  TextContainer,
} from './styled';

interface EligeVencimientoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const vencimientoOptions = [
  { title: 'SOAT', icon: 'plus' },
  { title: 'Seguro Todo Riesgo', icon: 'plus' },
  { title: 'Tenico Mecanica', icon: 'plus' },
  { title: 'Extintor', icon: 'plus' },
  { title: 'Blindaje', icon: 'plus' },
  { title: 'Extintor', icon: 'plus' },
  { title: 'Extintor', icon: 'plus' },
  { title: 'Extintor', icon: 'plus' },
];

export default function EligeVencimientoModal({
  isOpen,
  onClose,
}: EligeVencimientoModalProps) {
  const router = useRouter();

  const handleItemClick = () => {
    onClose();
    router.push(`/admin/alertsExpirations/alertForm`);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      button1='+ Crear Vencimiento'
    >
      <FormContainer>
        <HeaderContainer>
          <IconContainer>
            <Icon icon="bell-ring" size={24} color="black" />
          </IconContainer>
          <Text styleName="Heading 4">Elige Vencimiento</Text>
        </HeaderContainer>

        <GridContainer>
          {vencimientoOptions.map((option, index) => (
            <GridItem key={index} onClick={() => handleItemClick()}>
              <Text styleName="Body Medium">{option.title}</Text>
              <ItemFooter>
                <IconBorder>
                  <IconCircle>
                    <Icon icon={option.icon} size={20} color='white' />
                  </IconCircle>
                </IconBorder>
                <TextContainer>
                  <Text styleName="Body Medium" color="#122533">Configurar</Text>
                </TextContainer>
              </ItemFooter>
            </GridItem>
          ))}
        </GridContainer>
      </FormContainer>
    </Modal>
  );
}
