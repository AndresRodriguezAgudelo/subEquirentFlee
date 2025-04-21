'use client';

import { ReactNode } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/components/Card/CardComponent';
import Select from '@/shared/components/Select';
import { HeaderContent, SelectContainer, TitleContainer, DragHandle } from './styled';
import { GripHorizontal } from 'lucide-react';
import type { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';

interface ChartCardProps {
  title: string;
  children: ReactNode;
  options?: Array<{ value: string; label: string }>;
  selectedValue?: string;
  onSelectChange?: (value: { value: string; label: string }) => void;
  footerText?: string;
  dragHandleProps?: DraggableProvidedDragHandleProps | null;
}

export default function ChartCard({
  title,
  children,
  options,
  selectedValue,
  onSelectChange,
  footerText,
  dragHandleProps,
}: ChartCardProps) {
  return (
    <Card>
      <DragHandle {...dragHandleProps}>
        <GripHorizontal size={16} />
      </DragHandle>
      <CardHeader>
        <HeaderContent>
          <TitleContainer>
            <CardTitle>{title}</CardTitle>
          </TitleContainer>
          {options && onSelectChange && (
            <SelectContainer>
              <Select
                label=""
                addNewVariable={false}
                optionSelect={options}
                value={selectedValue}
                onChangeSelect={onSelectChange}
              />
            </SelectContainer>
          )}
        </HeaderContent>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footerText && (
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="leading-none text-muted-foreground">
            {footerText}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
