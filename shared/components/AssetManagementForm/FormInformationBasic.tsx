import { useFormContext } from 'react-hook-form';

import InputText from '@/shared/components/InputText';

import { AssetManagementFormInformationBasic } from '../../types/general';
import { ContainerOptional } from './styled';
import Select from '@/shared/components/Select';

export default function FormInformationBasic() {
  const { register } = useFormContext<AssetManagementFormInformationBasic>();
  return (
    <ContainerOptional>
      <fieldset>
        <InputText
          tooltipData='Licencia de tránsito del vehículo.'
          {...register('transit_license')}
          label="Licencia de Tránsito"
          description="Ingresa un valor alfanumérico"
          placeholder="Escribe"
        />
        <InputText
          tooltipData='Fabricante o marca comercial del vehículo, por ejemplo, Chevrolet, Toyota, Yamaha.'
          {...register('brand')}
          label="Marca"
          description="Ingresa un valor alfanumérico"
          placeholder="Escribe"
        />
        <InputText
          tooltipData='Modelo o referencia específica del vehículo dentro de la marca.'
          {...register('line')}
          label="Línea"
          description="Ingresa un valor alfanumérico"
          placeholder="Escribe"
        />
        <InputText
          tooltipData='Año de fabricación o modelo del vehículo según el fabricante.'
          {...register('model')}
          label="Modelo"
          description="Ingresa un valor alfanumérico"
          placeholder="Escribe"
        />
        <InputText
          tooltipData='Capacidad del motor del vehículo, expresada en centímetros cúbicos (cc).'
          {...register('displacement')}
          label="Cilindrada CC"
          description="Ingresa un valor numérico"
          placeholder="Escribe"
        />
        <InputText
          tooltipData='Color predominante del vehículo registrado oficialmente.'
          {...register('color')}
          label="Color"
          description="Ingresa un valor alfanumérico"
          placeholder="Escribe"
        />
        <Select
          tooltipData='Uso autorizado del vehículo, como particular, público, oficial o diplomático.'
          {...register('service')}
          label="Servicio"
          placeholder="Selecciona"
        />
        <Select
          tooltipData='Categoría del vehículo, como automóvil, motocicleta, camioneta, entre otros.'
          {...register('class')}
          label="Clase"
          placeholder="Selecciona"
        />
        <InputText
          tooltipData='Forma o diseño del vehículo, como sedán, SUV, pick-up, hatchback, Furgon, entre otros.'
          {...register('body_type')}
          label="Tipo de carrocería"
          description="Ingresa un valor alfanumérico"
          placeholder="Escribe"
        />
        <Select
          tooltipData='Tipo de energía que utiliza el vehículo, como gasolina, diésel, gas, o eléctrico.'
          {...register('fuel_type')}
          label="Tipo de combustible"
          placeholder="Selecciona"
        />
        <InputText
          tooltipData='Número máximo de ocupantes o carga que puede llevar el vehículo, según registro.'
          {...register('capacity')}
          label="Capacidad KG/PSJ"
          description="Ingresa un valor numérico"
          placeholder="Escribe"
        />
        <Select
          tooltipData='Sistema de cambio de marchas del vehículo, ya sea manual, automática o semiautomática.'
          {...register('transmission')}
          label="Transmisión"
          placeholder="Selecciona"
        />
      </fieldset>
    </ContainerOptional>
  );
}
