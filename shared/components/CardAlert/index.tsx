import { ReactNode } from 'react';

import {
  CardAlertStyled,
  ContAlert,
  ContHeaderAlert,
  ContIconAlert,
  ContTextAlert,
} from './styled';

type CardAlertProps = {
  isForAssign?: boolean;
  icon: ReactNode;
  children: ReactNode;
};

export default function CardAlert(props: Readonly<CardAlertProps>) {
  const { icon, children } = props;
  return (
    <CardAlertStyled>
      <ContHeaderAlert></ContHeaderAlert>
      <ContAlert>
        <ContIconAlert>{icon}</ContIconAlert>
        <ContTextAlert>{children}</ContTextAlert>
      </ContAlert>
    </CardAlertStyled>
  );
}
