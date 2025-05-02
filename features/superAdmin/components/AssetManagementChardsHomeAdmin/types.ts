export interface ChartItem {
  id: string;
  type:
    | 'gauge'
    | 'pie'
    | 'bar'
    | 'line'
    | 'area'
    | 'custom-label-bar'
    | 'stacked-area'
    | 'stacked-bar'
    | 'donut-with-text'
    | 'radial-chart'
    | 'negative-bar'
    | 'line-dots'
    | 'line-chart-interactive'
    | 'line-chart-label'
    | 'shadcn-line-interactive';
  title: string;
  data: any[];
  options: Array<{ value: string; label: string }>;
  selectedValue: string;
  centerText?: string;
  subText?: string;
  footerText?: string;
  xDataKey?: string;
  yDataKey?: string;
  innerRadius?: number;
  outerRadius?: number;
  colors?: string[];
  labelDataKey?: string;
  stackedDataKeys?: string[];
}
