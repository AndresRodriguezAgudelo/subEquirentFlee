export interface ChartItem {
  id: string;
  type: 'gauge' | 'pie' | 'bar' | 'line' | 'area';
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
}
