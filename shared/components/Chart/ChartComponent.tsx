import * as React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../Tooltip/TooltipComponent';

export interface ChartConfig {
  [key: string]: {
    label: string;
    color?: string;
  };
}

interface ChartContext {
  config: ChartConfig;
}

const ChartContext = React.createContext<ChartContext | null>(null);

export function ChartContainer({
  config,
  children,
}: {
  config: ChartConfig;
  children: React.ReactNode;
}) {
  return (
    <ChartContext.Provider value={{ config }}>{children}</ChartContext.Provider>
  );
}

export function ChartTooltip({ content }: { content: React.ReactNode }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent>{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

interface ChartTooltipContentProps {
  value?: string | number;
  label?: string;
  hideLabel?: boolean;
}

export function ChartTooltipContent({
  value,
  label,
  hideLabel = false,
}: ChartTooltipContentProps) {
  return (
    <div className="flex flex-col gap-1">
      {!hideLabel && label && (
        <div className="text-xs text-muted-foreground">{label}</div>
      )}
      {value && <div className="font-bold">{value}</div>}
    </div>
  );
}
