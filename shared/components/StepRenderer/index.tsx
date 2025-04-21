import React from 'react';

interface StepRendererProps {
  activeStep: number;
  steps: React.ReactNode[];
}

export const StepRenderer: React.FC<StepRendererProps> = ({
  activeStep,
  steps,
}) => {
  if (activeStep < 0 || activeStep >= steps.length) {
    console.warn('Step fuera de rango. Renderizando el paso por defecto.');
    return <>{steps[0]}</>;
  }

  return <>{steps[activeStep]}</>;
};
