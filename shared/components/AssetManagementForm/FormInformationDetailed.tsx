import { useFormContext } from 'react-hook-form';
import { Fragment } from 'react';

import InputText from '@/shared/components/InputText';
import Text from '@/shared/components/Text';

import { ContainerOptional, ContainerTitleLine } from './styled';
import { AssetManagementFormInformationDetailed } from '../../types/general';

export default function FormInformationDetailed() {
  const { register } = useFormContext<AssetManagementFormInformationDetailed>();
  return (
    <Fragment>
      <ContainerOptional>
        <fieldset>
          <InputText
            tooltipData='Identificación única del motor del vehículo, grabada por el fabricante.'
            {...register('number_engine')}
            label="Número de Motor"
            description="Ingresa un valor alfanumérico"
            placeholder="Escribe"
          />
          <InputText
            tooltipData='Código único asignado por el fabricante para identificar componentes específicos del vehículo.'
            {...register('number_serial')}
            label="Número de Serie"
            description="Ingresa un valor alfanumérico"
            placeholder="Escribe"
          />
          <InputText
            tooltipData='Código único grabado en el chasis para identificar el vehículo.'
            {...register('number_chassis')}
            label="Número de Chasis"
            description="Ingresa un valor alfanumérico"
            placeholder="Escribe"
          />
          <InputText
            tooltipData='VIN (Vehicle Identification Number): Número de Identificación Vehicular, único para cada vehículo en el mundo.'
            {...register('vin')}
            label="VIN"
            description="Ingresa un valor alfanumérico"
            placeholder="Escribe"
          />
          <InputText
            tooltipData='Nombre completo de la persona natural o jurídica que posee el vehículo.'
            {...register('owner')}
            label="Propietario"
            description="Ingresa un valor alfanumérico"
            placeholder="Escribe"
          />
          <InputText
            tooltipData='Documento de identificación del propietario, como cédula o NIT.'
            {...register('nit_owner')}
            label="NIT Propietario"
            description="Ingresa un valor alfanumérico"
            placeholder="Escribe"
          />
        </fieldset>
      </ContainerOptional>
      <ContainerOptional className="margin-top">
        <ContainerTitleLine>
          <Text styleName={'Highligth Standard'}>Información Adicional</Text>
          <span />
        </ContainerTitleLine>
        <fieldset>
          <InputText
            tooltipData='Nivel de protección adicional instalado en el vehículo para seguridad.'
            {...register('armor')}
            label="Blindaje"
            description="Ingresa un valor alfanumérico"
            placeholder="Escribe"
          />
          <InputText
            tooltipData='Potencia del motor medida en caballos de fuerza (Horse Power).'
            {...register('power_hp')}
            label="Potencia HP"
            description="Ingresa un valor numérico"
            placeholder="Escribe"
          />
          <InputText
            tooltipData='Cantidad de puertas disponibles en el vehículo.'
            {...register('doors')}
            label="Puertas"
            description="Ingresa un valor numérico"
            placeholder="Escribe"
          />
          <InputText
            tooltipData='Documento que certifica la entrada legal del vehículo al país.'
            {...register('import_declaration')}
            label="Declaración de Importación"
            description="Ingresa un valor alfanumérico"
            placeholder="Escribe"
          />
          <InputText
            tooltipData='Día, mes y año en que el vehículo fue introducido al país.'
            {...register('import_date')}
            label="Fecha de Importación"
            description="Ingresa una fecha"
            placeholder="Escribe"
          />
          <InputText
            tooltipData='Limitaciones o condiciones específicas para el uso del vehículo, si las hay.'
            {...register('property_limitation')}
            label="Limitación a la Propiedad"
            description="Ingresa un valor alfanumérico"
            placeholder="Escribe"
          />
          <InputText
            tooltipData='Fecha en que el vehículo fue registrado por primera vez en el sistema de tránsito.'
            {...register('registration_date')}
            label="Fecha de Matrícula"
            description="Ingresa una fecha"
            placeholder="Escribe"
          />
          <InputText
            tooltipData='Entidad encargada de expedir la licencia y controlar el registro del vehículo.'
            {...register('transit_authority')}
            label="Organismo de Tránsito"
            description="Ingresa un valor alfanumérico"
            placeholder="Escribe"
          />
        </fieldset>
      </ContainerOptional>
    </Fragment>
  );
}
