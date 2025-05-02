import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer,
  Area,
  AreaChart,
  LabelList,
  Label,
  RadialBarChart,
  RadialBar,
  PolarGrid,
  PolarRadiusAxis,
} from 'recharts';
import { useMemo, useState } from 'react';

interface RechartsComponentProps {
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
  data: any[];
  width?: number;
  height?: number;
  centerText?: string;
  subText?: string;
  cyPosition?: number | string;
  innerRadius?: number;
  outerRadius?: number;
  cornerRadius?: number;
  xDataKey?: string;
  yDataKey?: string;
  stackedDataKeys?: string[];
  colors?: string[];
  labelDataKey?: string;
}

const DEFAULT_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const RechartsComponent = ({
  type,
  data,
  width = 400,
  height = 300,
  centerText = '',
  subText = '',
  cyPosition = '60%',
  innerRadius = 80,
  outerRadius = 100,
  xDataKey = 'month',
  yDataKey = 'value',
  labelDataKey = 'month',
  stackedDataKeys,
  colors = DEFAULT_COLORS,
}: RechartsComponentProps) => {
  const renderGaugeChart = () => {
    const total = data.reduce((sum, entry) => sum + entry.value, 0);
    return (
      <PieChart width={width} height={height}>
        <Pie
          data={data}
          cx="50%"
          cy={cyPosition}
          startAngle={180}
          endAngle={0}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          fill="#8884d8"
          paddingAngle={5}
          dataKey={yDataKey}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.fill || colors[index % colors.length]}
            />
          ))}
        </Pie>
        <Tooltip />
        <svg width="100%" height="100%">
          <text
            x="50%"
            y="42%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="24"
            fontWeight="bold"
            fill="#000"
          >
            {centerText || total}
          </text>
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="16"
            fill="#6c757d"
          >
            {subText || 'Total gestión'}
          </text>
        </svg>
        <Legend />
      </PieChart>
    );
  };

  const renderPieChart = () => {
    return (
      <PieChart width={width} height={height}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          fill="#8884d8"
          paddingAngle={5}
          dataKey={yDataKey}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.fill || colors[index % colors.length]}
            />
          ))}
        </Pie>
        <Tooltip />
        {centerText && (
          <svg width="100%" height="100%">
            <text
              x="50%"
              y="45%"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="24"
              fontWeight="bold"
              fill="#000"
            >
              {centerText}
            </text>
            {subText && (
              <text
                x="50%"
                y="55%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="16"
                fill="#6c757d"
              >
                {subText}
              </text>
            )}
          </svg>
        )}
        <Legend />
      </PieChart>
    );
  };

  const renderBarChart = () => {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xDataKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={yDataKey} fill="#8884d8" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.fill || colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  };

  const renderLineChart = () => {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xDataKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={yDataKey} stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  const renderAreaChart = () => {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xDataKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey={yDataKey}
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  };

  const renderCustomLabelBarChart = () => {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal={false} />
          <YAxis
            dataKey={labelDataKey}
            type="category"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
            hide
          />
          <XAxis dataKey={yDataKey} type="number" hide />
          <Tooltip cursor={false} />
          <Bar dataKey={yDataKey} fill={colors[0]} radius={4}>
            <LabelList
              dataKey={labelDataKey}
              position="insideLeft"
              offset={8}
              fill="#ffffff"
              fontSize={12}
            />
            <LabelList
              dataKey={yDataKey}
              position="right"
              offset={8}
              fill="#333333"
              fontSize={12}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  };

  const renderStackedAreaChart = () => {
    // Verificar que stackedDataKeys esté definido
    if (!stackedDataKeys || stackedDataKeys.length === 0) {
      console.error('No se proporcionaron dataKeys para el gráfico de área apilada');
      return null;
    }

    const dataKeys = stackedDataKeys; // Usar únicamente las claves proporcionadas mediante props

    return (
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 12,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            dataKey={xDataKey}
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          {dataKeys.map((key, index) => (
            <Area
              key={key}
              dataKey={key}
              type="natural"
              fill={colors[index % colors.length]}
              fillOpacity={0.4}
              stroke={colors[index % colors.length]}
              stackId="a"
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    );
  };

  const renderStackedBarChart = () => {
    // Verificar que stackedDataKeys esté definido
    if (!stackedDataKeys || stackedDataKeys.length === 0) {
      console.error('No se proporcionaron dataKeys para el gráfico de barras apiladas');
      return null;
    }

    return (
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 12,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            dataKey={xDataKey}
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          {stackedDataKeys.map((key, index) => (
            <Bar
              key={key}
              dataKey={key}
              stackId="a"
              fill={colors[index % colors.length]}
              radius={
                index === stackedDataKeys.length - 1 ? [4, 4, 0, 4] : [0, 0, 0, 4]
              }
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    );
  };

  const renderDonutWithText = () => {
    // Calcular el total para mostrarlo en el centro
    const total = useMemo(() => {
      return data.reduce((acc, curr) => acc + (curr[yDataKey] || 0), 0);
    }, [data, yDataKey]);

    return (
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie
            data={data}
            dataKey={yDataKey}
            nameKey={labelDataKey}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius || 60}
            outerRadius={outerRadius || 80}
            paddingAngle={0}
            strokeWidth={0}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.fill || colors[index % colors.length]}
              />
            ))}
            <Label
              content={({ viewBox }) => {
                if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                  return (
                    <g>
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#333333"
                        fontSize="24"
                        fontWeight="bold"
                      >
                        {centerText || total.toLocaleString()}
                      </text>
                      <text
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#6c757d"
                        fontSize="16"
                      >
                        {subText || 'Visitantes'}
                      </text>
                    </g>
                  );
                }
                return null;
              }}
            />
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    );
  };

  const renderRadialChart = () => {
    // Si no hay data, retornar null
    if (!data || data.length === 0) return null;

    // Tomar el valor de todos los elementos para calcular el total
    const dataKey = yDataKey || 'visitors';
    const totalValue = data.reduce(
      (sum, item) => sum + (item[dataKey] || 0),
      0
    );
    const displayValue = centerText || totalValue.toLocaleString();
    const displayText = subText || 'Visitors';

    // Color de fondo oscuro para el gráfico
    const darkBgColor = '#333333';

    // Crear datos duplicados para fondo/foreground con la propiedad value requerida por el componente
    const chartData = [
      ...data.map((item) => ({
        ...item,
        value: item[dataKey] || 0,
        fill: item.fill, // Mantener el color definido en los datos
        name: item.name || item.browser, // Usar el nombre si está disponible o el browser como fallback
      })),
    ];

    return (
      <div className="relative" style={{ width: '100%', height: height }}>
        <div className="absolute inset-0 bg-black rounded-xl overflow-hidden">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              data={chartData}
              startAngle={-90}
              endAngle={180}
              innerRadius={innerRadius || 80}
              outerRadius={outerRadius || 130}
              barSize={35}
              cx="50%"
              cy="50%"
            >
              <RadialBar dataKey="value" background cornerRadius={5}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </RadialBar>
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                      return (
                        <g>
                          <circle
                            cx={viewBox.cx}
                            cy={viewBox.cy}
                            r={innerRadius || 80}
                            fill="#000000"
                          />
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              fill="#FFFFFF"
                              fontSize="24"
                              fontWeight="bold"
                            >
                              {displayValue}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              fill="#9CA3AF"
                              fontSize="16"
                            >
                              {displayText}
                            </tspan>
                          </text>
                        </g>
                      );
                    }
                    return null;
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
        {/* Leyenda personalizada bajo el gráfico */}
        <div className="flex justify-center items-center mt-2 gap-4">
          {chartData.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: entry.fill }}
              />
              <span className="text-xs">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderNegativeBarChart = () => {
    // Si no hay data, retornar null
    if (!data || data.length === 0) return null;

    // La clave para los datos (por defecto 'visitors')
    const dataKey = yDataKey || 'visitors';
    // La clave para las etiquetas (por defecto 'month')
    const labelKey = labelDataKey || 'month';

    return (
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          margin={{ top: 30, right: 20, left: 20, bottom: 5 }}
        >
          <CartesianGrid vertical={false} />
          <XAxis dataKey={labelKey} hide />
          <YAxis />
          <Tooltip
            cursor={false}
            formatter={(value: any) => [value, dataKey]}
          />
          <Bar dataKey={dataKey}>
            <LabelList position="top" dataKey={labelKey} fillOpacity={1} />
            {data.map((item, index) => (
              <Cell
                key={`cell-${index}`}
                fill={item[dataKey] > 0 ? colors[0] : colors[1] || '#FF8042'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  };

  const renderLineDotChart = () => {
    // Si no hay data, retornar null
    if (!data || data.length === 0) return null;

    // La clave para los datos (por defecto 'desktop')
    const dataKey = yDataKey || 'desktop';
    // La clave para las etiquetas (por defecto 'month')
    const labelKey = xDataKey || 'month';

    // Color principal para la línea y los puntos
    const primaryColor = colors[0] || '#0088FE';

    return (
      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 12,
            left: 12,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey={labelKey}
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis />
          <Tooltip
            cursor={false}
            formatter={(value: any) => [value, dataKey]}
          />
          <Line
            dataKey={dataKey}
            type="natural"
            stroke={primaryColor}
            strokeWidth={2}
            dot={{
              fill: primaryColor,
            }}
            activeDot={{
              r: 6,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    );
  };
  
  const renderLineChartLabel = () => {
    // Si no hay data, retornar null
    if (!data || data.length === 0) return null;

    // La clave para los datos (por defecto 'desktop')
    const dataKey = yDataKey || 'desktop';
    // La clave para las etiquetas (por defecto 'month')
    const labelKey = xDataKey || 'month';

    // Color principal para la línea y los puntos
    const primaryColor = colors[0] || '#0088FE';
    
    // Estilo para simular variables CSS de shadcn
    const cssVars = {
      '--color-desktop': primaryColor,
    } as React.CSSProperties;

    return (
      <div className="w-full h-full" style={cssVars}>
        <ResponsiveContainer width="100%" height={height}>
          <LineChart
            data={data}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={labelKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Tooltip 
              cursor={false}
              formatter={(value: any) => [
                value, 
                dataKey.charAt(0).toUpperCase() + dataKey.slice(1)
              ]}
            />
            <Line
              dataKey={dataKey}
              type="natural"
              stroke={primaryColor}
              strokeWidth={2}
              dot={{
                fill: primaryColor,
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                fill="#333333"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  };

  const renderShadcnLineInteractive = () => {
    // Si no hay data, retornar null
    if (!data || data.length === 0) return null;

    // Estado local para el tipo de datos activo (desktop o mobile)
    const [activeChart, setActiveChart] = useState<'desktop' | 'mobile'>('desktop');

    // Calcular totales para desktop y mobile
    const total = useMemo(() => ({
      desktop: data.reduce((acc, curr) => acc + (curr.desktop || 0), 0),
      mobile: data.reduce((acc, curr) => acc + (curr.mobile || 0), 0),
    }), [data]);

    // Configuración para colores y etiquetas
    const chartConfig = {
      desktop: {
        label: "Desktop",
        color: colors[0] || '#0088FE',
      },
      mobile: {
        label: "Mobile",
        color: colors[1] || '#FF8042',
      },
    };
    
    // Variables CSS para colores
    const cssVars = {
      '--color-desktop': chartConfig.desktop.color,
      '--color-mobile': chartConfig.mobile.color,
    } as React.CSSProperties;

    return (
      <div className="rounded-lg border bg-card text-card-foreground shadow w-full h-full" style={cssVars}>
        <div className="flex flex-col border-b p-0 sm:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5">
            <h3 className="font-semibold leading-none tracking-tight">Line Chart - Interactive</h3>
            <p className="text-sm text-muted-foreground">
              Showing total visitors for the last 3 months
            </p>
          </div>
          <div className="flex">
            {(['desktop', 'mobile'] as const).map((key) => (
              <button
                key={key}
                className={`flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l sm:border-l sm:border-t-0 sm:px-8 sm:py-6 ${activeChart === key ? 'bg-muted/50' : ''}`}
                onClick={() => setActiveChart(key)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[key].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-xl">
                  {total[key].toLocaleString()}
                </span>
              </button>
            ))}
          </div>
        </div>
        <div className="px-2 py-4 sm:p-6">
          <ResponsiveContainer width="100%" height={height || 250}>
            <LineChart
              data={data}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey={xDataKey || 'date'}
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value);
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  });
                }}
              />
              <Tooltip
                cursor={false}
                formatter={(value: any, name: string) => [
                  value,
                  name === 'desktop' ? 'Desktop' : 'Mobile'
                ]}
                labelFormatter={(value) => {
                  return new Date(value).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  });
                }}
              />
              <Line
                dataKey={activeChart}
                type="monotone"
                stroke={`var(--color-${activeChart})`}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };

  switch (type) {
    case 'gauge':
      return renderGaugeChart();
    case 'pie':
      return renderPieChart();
    case 'bar':
      return renderBarChart();
    case 'line':
      return renderLineChart();
    case 'area':
      return renderAreaChart();
    case 'custom-label-bar':
      return renderCustomLabelBarChart();
    case 'stacked-area':
      return renderStackedAreaChart();
    case 'stacked-bar':
      return renderStackedBarChart();
    case 'donut-with-text':
      return renderDonutWithText();
    case 'radial-chart':
      return renderRadialChart();
    case 'negative-bar':
      return renderNegativeBarChart();
    case 'line-dots':
      return renderLineDotChart();
    case 'line-chart-label':
      return renderLineChartLabel();
    case 'shadcn-line-interactive':
      return renderShadcnLineInteractive();
    default:
      return null;
  }
};

export default RechartsComponent;
