'use client';

import Icon from '@/shared/containers/Icons';
import Text from '@/shared/components/Text';

import { Container, List, ListItem, ButtonBack, ButtonNext } from './styled';

type StepListProps = {
  setActiveStep: (value: number) => void;
  steps: Array<string>;
  activeStep: number;
  inModal?: boolean;
};

export default function StepList(props: Readonly<StepListProps>) {
  const { setActiveStep, steps, activeStep, inModal = false } = props;
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <Container data-inmodal={inModal ? "true" : "false"}>
      <List>
        {steps.map((step, index) => (
          <ListItem key={index}>

            <ButtonBack
              key={`${index}-back`}
            className={activeStep == index ? 'active' : ''}
            onClick={handleBack}
            disabled={activeStep == 0 || activeStep != index}
            type="button"
            >
            {index != 0 && activeStep == index && (
              <Icon icon="chevron-left" size={24} />
            )}
            <Text styleName="Feature Accent">{index + 1}</Text>
          </ButtonBack>
          </ListItem>
        ))}
    </List>
    </Container >
  );
}