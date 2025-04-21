import { Fragment } from 'react';

import Text from '@/shared/components/Text';
import Icon from '@/shared/containers/Icons';

import { Container, Header, CardsWrapper, Card } from './styled';

interface AssetManagementAlertsProps {
  title: string;
  icon: string;
  cards: number;
}

export default function AssetManagementChards({
  title,
  icon,
  cards,
}: AssetManagementAlertsProps) {
  return (
    <Fragment>
      <Container>
        <Header>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Icon icon={icon} size={24} />
            <Text styleName="Heading 4">{title}</Text>
          </div>
        </Header>

        <CardsWrapper>
          {Array.from({ length: cards }).map((_, index) => (
            <Card key={index}>
              <Text styleName="Caption Standard">Card {index + 1}</Text>
            </Card>
          ))}
        </CardsWrapper>
      </Container>
    </Fragment>
  );
}
