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
} from 'recharts';

interface RechartsComponentProps {
  type: 'gauge' | 'pie' | 'bar' | 'line' | 'area';
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
  colors?: string[];
}

const DEFAULT_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const RechartsComponent = ({
  type,
  data,
  width = 400,
  height = 300,
  centerText = "",
  subText = "",
  cyPosition = "60%",
  innerRadius = 80,
  outerRadius = 100,
  xDataKey = "name",
  yDataKey = "value",
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
            <Cell key={`cell-${index}`} fill={entry.fill || colors[index % colors.length]} />
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
            {subText || "Total gestión"}
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
            <Cell key={`cell-${index}`} fill={entry.fill || colors[index % colors.length]} />
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
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xDataKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={yDataKey} fill="#8884d8" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill || colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    );
  };

  const renderLineChart = () => {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
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
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xDataKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey={yDataKey} stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
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
    default:
      return null;
  }
};

export default RechartsComponent;
