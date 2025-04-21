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
    <Container data-inmodal={inModal ? 'true' : 'false'}>
      <List>
        {steps.map((step, index) => (
          <ListItem key={index}>
            {/* {activeStep === index && index !== 0 && (
              <ButtonBack
                onClick={handleBack}
                disabled={activeStep === 0}
                type="button"
              >
                <Icon icon="chevron-left" size={24} />
              </ButtonBack>
            )} */}
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

            {/* <Text styleName="Feature Accent">{index + 1}</Text> */}
            <Text styleName="Feature Accent">{step}</Text>

            {/* {activeStep === index && index < steps.length - 1 && (
              <ButtonNext
                onClick={handleNext}
                type="button"
                disabled={activeStep === steps.length - 1}
              >
                <Icon icon="chevron-right" size={24} />
              </ButtonNext>
            )} */}

            {index < steps.length - 1 && activeStep == index && (
              <ButtonNext
                key={`${index}-next`}
                className={activeStep == index ? 'active' : ''}
                onClick={handleNext}
                type="button"
                disabled={activeStep == steps.length - 1 || activeStep != index}
              >
                {activeStep != index && (
                  <Text styleName="Feature Accent">{index + 1}</Text>
                )}
                {activeStep == index && <Icon icon="chevron-right" size={24} />}
              </ButtonNext>
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
