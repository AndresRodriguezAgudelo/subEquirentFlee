'use client';

import React from 'react';
import { TabsContainer, TabItem, ContainerLabel, LastTabItem } from './styled';
import Text from '../Text';
import Tooltip from '../TooltipBox';

interface TabsAssignmentProps {
  items: string[];
  label: string;
  onAddClick?: () => void;
  tooltipData?: string;
}

export default function TabsAssignment({ items, label, onAddClick, tooltipData }: TabsAssignmentProps) {
  return (
    <div>
      <ContainerLabel>
        <Text styleName={'Highligth Accent'} as={'label'}>
          {label}
        </Text>
        {tooltipData && <Tooltip data={tooltipData} />}
      </ContainerLabel>
      <TabsContainer>
        {items.map((item, index) => (
          <TabItem key={index}>
            <span>{item}</span>
            <span className="close-icon">×</span>
          </TabItem>
        ))}
        <LastTabItem 
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onAddClick?.();
          }} 
          className="add-button" 
          role="button">
          +
        </LastTabItem>
      </TabsContainer>
    </div>
  );
}
