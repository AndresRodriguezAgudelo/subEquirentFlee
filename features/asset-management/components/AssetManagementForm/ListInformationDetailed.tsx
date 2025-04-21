import { Fragment } from 'react';
import Text from '@/shared/components/Text';
import { ContainerOptional, ContainerTitleLine } from './styled';

interface ListInformationDetailedProps {
  data: any;
}

export default function ListInformationDetailed({
  data,
}: ListInformationDetailedProps) {
  // Valores por defecto para demostración
  const defaultValues = {
    number_engine: 'ABC123456789',
    number_serial: 'SER987654321',
    number_chassis: 'CHA456789123',
    vin: 'VIN1HGCM82633A123456',
    owner: 'Juan Pérez',
    nit_owner: '123.456.789-0',
    owner_address: 'Calle 123 # 45-67',
    owner_phone: '(+57) 300 123 4567',
    owner_city: 'Bogotá',
    owner_email: 'juan.perez@email.com',
  };

  return (
    <Fragment>
      <ContainerOptional>
        <fieldset>
          <div>
            <Text styleName="Content Accent">Número de Motor</Text>
            <Text>{data.number_engine || defaultValues.number_engine}</Text>
          </div>
          <div>
            <Text styleName="Content Accent">Número de Serie</Text>
            <Text>{data.number_serial || defaultValues.number_serial}</Text>
          </div>
          <div>
            <Text styleName="Content Accent">Número de Chasis</Text>
            <Text>{data.number_chassis || defaultValues.number_chassis}</Text>
          </div>
          <div>
            <Text styleName="Content Accent">
              VIN (Número de Identidad Vehicular)
            </Text>
            <Text>{data.vin || defaultValues.vin}</Text>
          </div>
          <div>
            <Text styleName="Content Accent">Propietario</Text>
            <Text>{data.owner || defaultValues.owner}</Text>
          </div>
          <div>
            <Text styleName="Content Accent">NIT Propietario</Text>
            <Text>{data.nit_owner || defaultValues.nit_owner}</Text>
          </div>
          <div>
            <Text styleName="Content Accent">Dirección Propietario</Text>
            <Text>{data.owner_address || defaultValues.owner_address}</Text>
          </div>
          <div>
            <Text styleName="Content Accent">Teléfono Propietario</Text>
            <Text>{data.owner_phone || defaultValues.owner_phone}</Text>
          </div>
          <div>
            <Text styleName="Content Accent">Ciudad Propietario</Text>
            <Text>{data.owner_city || defaultValues.owner_city}</Text>
          </div>
          <div>
            <Text styleName="Content Accent">Correo Propietario</Text>
            <Text>{data.owner_email || defaultValues.owner_email}</Text>
          </div>
        </fieldset>
      </ContainerOptional>
    </Fragment>
  );
}
