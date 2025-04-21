import { useFormContext } from 'react-hook-form';
import Text from '@/shared/components/Text';
import Alerta from '@/shared/components/CardNewAssigment';
import InputText from '@/shared/components/InputText';
import InputCheckBox from '@/shared/components/InputCheckBox';
import { IAssetManagementFormExpirationsAndMaintenance } from '../../types/general';
import {
  ContainerOptional,
  ScrollContainer,
  ScrollTitle,
  AlertsScroll,
  AlertCard,
  ContainerTitleLine,
} from './styled';

const measureOptions = [
  { label: 'Kms', value: 'kms' },
  { label: 'Horas', value: 'hours' },
];

export default function FormExpirationsAndMaintenance() {
  const { register } =
    useFormContext<IAssetManagementFormExpirationsAndMaintenance>();

  return (
    <ContainerOptional>
      {/* Sección de Medida Actual */}
      <ScrollContainer>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
          <div style={{ width: '300px' }}>
            <InputText
              {...register('unit')}
              label="Medida Actual"
              description="Ingresa un valor numérico"
              placeholder="Escribe el kilometraje"
              tooltipData="kilometros"
            />
          </div>
          <InputCheckBox
            {...register('measureType')}
            title="Unidad de medida"
            options={measureOptions}
            name="measureType"
          />
        </div>
      </ScrollContainer>

      {/* Sección de Vencimientos */}
      <ScrollContainer>
        <ScrollTitle>
          <ContainerTitleLine>
            <Text styleName="Highligth Standard">Vencimientos</Text>
            <span></span>
          </ContainerTitleLine>
        </ScrollTitle>
        <AlertsScroll>
          <AlertCard>
            <Alerta
              isNew={true}
              Title="SOAT"
              FechaVigencia=""
              CuentaRegresiva={0}
            />
          </AlertCard>
          <AlertCard>
            <Alerta
              isNew={true}
              Title="Tecnomecánica"
              FechaVigencia=""
              CuentaRegresiva={0}
            />
          </AlertCard>
        </AlertsScroll>
      </ScrollContainer>

      {/* Sección de Mantenimientos */}
      <ScrollContainer>
        <ScrollTitle>
          <ContainerTitleLine>
            <Text styleName="Highligth Standard">
              Rutinas de Mantenimientos
            </Text>
            <span></span>
          </ContainerTitleLine>
        </ScrollTitle>
        <AlertsScroll>
          <AlertCard>
            <Alerta
              isNew={true}
              Title="Seguro Todo Riesgo"
              FechaVigencia=""
              CuentaRegresiva={0}
            />
          </AlertCard>
          <AlertCard>
            <Alerta
              isNew={true}
              Title="Próxima Revisión"
              FechaVigencia=""
              CuentaRegresiva={0}
            />
          </AlertCard>
          <AlertCard>
            <Alerta
              isNew={true}
              Title="Fecha de Vencimiento"
              FechaVigencia=""
              CuentaRegresiva={0}
            />
          </AlertCard>
        </AlertsScroll>
      </ScrollContainer>
    </ContainerOptional>
  );
}
