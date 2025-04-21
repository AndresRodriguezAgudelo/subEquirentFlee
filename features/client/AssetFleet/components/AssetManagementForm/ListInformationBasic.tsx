import Text from '@/shared/components/Text';
import { ContainerOptional } from './styled';

interface ListInformationBasicProps {
  data: any; // Idealmente deberíamos tiparlo correctamente
}

export default function ListInformationBasic({
  data,
}: ListInformationBasicProps) {
  return (
    <ContainerOptional>
      <fieldset>
        <div>
          <Text styleName="Content Accent">Licencia de Tránsito</Text>
          <Text>{data.transit_license || 'ABC123'}</Text>
        </div>
        <div>
          <Text styleName="Content Accent">Modelo</Text>
          <Text>{data.brand || 'Toyota'}</Text>
        </div>
        <div>
          <Text styleName="Content Accent">Cilindrada CC</Text>
          <Text>{data.line || '1600'}</Text>
        </div>
        <div>
          <Text styleName="Content Accent">Color</Text>
          <Text>{data.model || 'Rojo'}</Text>
        </div>
        <div>
          <Text styleName="Content Accent">Tipo de servicio</Text>
          <Text>{data.color || 'Particular'}</Text>
        </div>
        <div>
          <Text styleName="Content Accent">Clase</Text>
          <Text>{data.displacement || 'Sedán'}</Text>
        </div>
        <div>
          <Text styleName="Content Accent">Tipo de carrocería</Text>
          <Text>{data.service || 'Hatchback'}</Text>
        </div>
        <div>
          <Text styleName="Content Accent">Tipo de Combustible</Text>
          <Text>{data.class || 'Gasolina'}</Text>
        </div>
        <div>
          <Text styleName="Content Accent">Capacidad Kg/Psj</Text>
          <Text>{data.body_type || '5 pasajeros'}</Text>
        </div>
        <div>
          <Text styleName="Content Accent">Transmisión</Text>
          <Text>{data.capacity || 'Manual'}</Text>
        </div>
      </fieldset>
    </ContainerOptional>
  );
}
