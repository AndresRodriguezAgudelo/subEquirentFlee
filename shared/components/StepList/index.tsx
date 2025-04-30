'use client';

import Icon from '@/shared/containers/Icons';
import Text from '@/shared/components/Text';

import { Container, List, ListItem, ButtonBack, ButtonNext, StepNumber, StepTitle } from './styled';

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
          <ListItem key={index} className={activeStep >= index ? 'active' : ''}>
            {/* Back button - only visible for active step that isn't the first step */}
            {index !== 0 && activeStep === index && (
              <ButtonBack
                onClick={handleBack}
                disabled={activeStep === 0}
                type="button"
              >
                <Icon icon="chevron-left" size={24} />
              </ButtonBack>
            )}
            
            {/* Step number and title */}
            <StepNumber>
              <Text styleName="Feature Accent">{index + 1}</Text>
            </StepNumber>
            <StepTitle>
              <Text styleName="Body Medium">{step}</Text>
            </StepTitle>
            
            {/* Next button - only visible for active step that isn't the last step */}
            {activeStep === index && index < steps.length - 1 && (
              <ButtonNext
                onClick={handleNext}
                type="button"
              >
                <Icon icon="chevron-right" size={24} />
              </ButtonNext>
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}