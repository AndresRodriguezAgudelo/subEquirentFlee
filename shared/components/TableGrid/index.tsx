'use client';

import React, { Fragment } from 'react';
import {
  TableContainer,
  StyledTable,
  TableCell,
  ContentWrapper,
  DataUserDiv,
  AlertContainer,
  PlateContainer,
  ResponsableContainer
} from './styled';

import Text from '@/shared/components/Text';
import Icon from '@/shared/containers/Icons';
import Alerta from '@/shared/components/CardNewAssigment';
import IdentityCard from '@/shared/components/IdentityCard';

interface CarRegister {
  id: number;
  plate: string;
  status: string;
  responsable: string;
  brand: string;
  line: string;
  model: string;
  class: string;
  administration: string;
  kilometers?: number;
  chassisNumber: string;
  [key: string]: any;
}

interface TableGridProps {
  title: string;
  icon: string;
  data: CarRegister[];
  isFlotaActivos?: boolean;
  screenType?: 'default' | 'flota' | 'maintenanceRoutines' | 'alertasVencimientos';
  onItemClick?: (item: CarRegister) => void;
  onResponsableClick?: (vehicle: CarRegister) => void;
  onVencimientoClick?: () => void;
}

export default function TableGrid({
  title,
  icon,
  data,
  isFlotaActivos = false,
  screenType = 'default',
  onItemClick,
  onResponsableClick,
  onVencimientoClick,
}: TableGridProps) {
  return (
    <Fragment>
      <TableContainer>
        <StyledTable>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <TableCell>
                  <ContentWrapper>
                    {!isFlotaActivos && (
                      <DataUserDiv>
                        <PlateContainer>
                          <Text styleName="Heading 5">{item.plate}</Text>
                        </PlateContainer>
                        <Text color="#7e7e7e"> ID: {item.id}</Text>
                        <Text>
                          {item.status === 'active' ? 'Disponible' : 'No disponible'}
                        </Text>
                        <Text>En Administracion</Text>

                        <ResponsableContainer
                          data-assignable={item.responsable === 'Sin Asignar' ? 'true' : 'false'}
                          onClick={() => item.responsable === 'Sin Asignar' && onResponsableClick?.(item)}
                        >
                          <Text>Responsable: {item.responsable}</Text>
                          <Icon
                            icon={item.responsable === 'Sin Asignar' ? 'plus' : 'edit'}
                            size={16}
                            color={
                              item.responsable === 'Sin Asignar' ? '#00A650' : '#666666'
                            }
                          />
                        </ResponsableContainer>
                      </DataUserDiv>
                    )}

                    <AlertContainer>
              {isFlotaActivos && <IdentityCard {...item} />}
              {screenType === 'alertasVencimientos' && <Alerta isNew="vencimiento" onClick={onVencimientoClick} />}
              {screenType === 'maintenanceRoutines' && <Alerta isNew="mantenimiento" />}

              <Alerta
                isNew={false}
                CuentaRegresiva={5}
                FechaVigencia="2024-12-25"
                Title="Extintor"
                ProgressNumber={80}
                headerData={[{
                  texto1: "Preventivo",
                  texto2: "Básica",
                  color: "#031626",
                  textSelected: 0
                }]}
              />

              <Alerta
                isNew={false}
                CuentaRegresiva={5}
                FechaVigencia="2024-12-25"
                Title="Certificado GNV"
                ProgressNumber={45}
                headerData={[{
                  texto1: "Preventivo",
                  texto2: "Media",
                  color: "#0e5d9e",
                  textSelected: 1
                }]}
              />
              <Alerta
                isNew={false}
                CuentaRegresiva={5}
                FechaVigencia="2024-12-25"
                Title="Blindaje"
                ProgressNumber={25}
                headerData={[{
                  texto1: "Correctivo",
                  texto2: "Alta",
                  color: "#c9621c",
                  textSelected: 0
                }]}
              />
              <Alerta
                isNew={false}
                CuentaRegresiva={5}
                FechaVigencia="2024-12-25"
                Title="Impuestos"
                ProgressNumber={85}
                headerData={[{
                  texto1: "Preventivo",
                  texto2: "Básica",
                  color: "#2da8e0",
                  textSelected: 1
                }]}
              />
              <Alerta isNew="botonera" />
              <Alerta isNew="mantenimiento" />
                    </AlertContainer>
                  </ContentWrapper>
                </TableCell>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
    </Fragment>
  );
}
