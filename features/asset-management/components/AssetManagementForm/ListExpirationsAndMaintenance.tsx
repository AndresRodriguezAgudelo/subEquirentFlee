import Text from '@/shared/components/Text';
import Alerta from '@/shared/components/CardNewAssigment';
import {
  ContainerOptional,
  ScrollContainer,
  ScrollTitle,
  AlertsScroll,
  AlertCard,
  ContainerTitleLine,
} from './styled';

interface ListExpirationsAndMaintenanceProps {
  data: any;
}

export default function ListExpirationsAndMaintenance({
  data,
}: ListExpirationsAndMaintenanceProps) {
  // Valores por defecto para demostración
  const defaultValues = {
    unit: '15/12/2024',
    soat: '30/06/2024',
    tecno: '01/03/2024',
    seguro: '20/09/2024',
    revision: '10/05/2024',
  };

  // Función para calcular los días restantes
  const calculateDaysRemaining = (dateString: string) => {
    const [day, month, year] = dateString.split('/');
    const expirationDate = new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day)
    );
    const today = new Date();
    const diffTime = expirationDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const expirationItems = [
    {
      title: 'SOAT',
      date: data.soat || defaultValues.soat,
    },
    {
      title: 'Tecnomecánica',
      date: data.tecno || defaultValues.tecno,
    },
  ];

  const maintenanceItems = [
    {
      title: 'Seguro Todo Riesgo',
      date: data.seguro || defaultValues.seguro,
    },
    {
      title: 'Próxima Revisión',
      date: data.revision || defaultValues.revision,
    },
    {
      title: 'Fecha de Vencimiento',
      date: data.unit || defaultValues.unit,
    },
  ];

  return (
    <ContainerOptional>
      {/* Sección de Medida Actual */}
      <ScrollContainer>
        <ScrollTitle>
          <Text styleName="Highligth Standard">Medida Actual</Text>
        </ScrollTitle>
        <Text styleName="Body Medium">10000 kilómetros</Text>
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
          {expirationItems.map((item, index) => (
            <AlertCard key={index}>
              <Alerta
                isNew={false}
                Title={item.title}
                FechaVigencia={item.date}
                CuentaRegresiva={calculateDaysRemaining(item.date)}
              />
            </AlertCard>
          ))}
        </AlertsScroll>
      </ScrollContainer>

      {/* Sección de Mantenimientos */}
      <ScrollContainer>
        <ScrollTitle>
          <ContainerTitleLine>
            <Text styleName="Highligth Standard">Mantenimientos</Text>
            <span></span>
          </ContainerTitleLine>
        </ScrollTitle>
        <AlertsScroll>
          {maintenanceItems.map((item, index) => (
            <AlertCard key={index}>
              <Alerta
                isNew={false}
                Title={item.title}
                FechaVigencia={item.date}
                CuentaRegresiva={calculateDaysRemaining(item.date)}
              />
            </AlertCard>
          ))}
        </AlertsScroll>
      </ScrollContainer>
    </ContainerOptional>
  );
}
