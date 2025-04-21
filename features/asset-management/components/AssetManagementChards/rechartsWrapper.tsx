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
} from 'recharts';

interface RechartsComponentProps {
  type: 'vertical-bar' | 'horizontal-bar' | 'pie';
  data: any[];
  width: number;
  height: number;
}

const RechartsComponent = ({
  type,
  data,
  width,
  height,
}: RechartsComponentProps) => {
  if (type === 'vertical-bar') {
    return (
      <BarChart
        width={width}
        height={height}
        data={data}
        layout="vertical"
        margin={{
          top: 5,
          right: 30,
          left: 50,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="mes" />
        <Tooltip />
        <Legend />
        <Bar dataKey="valor" fill="#8884d8" radius={5} />
      </BarChart>
    );
  }

  if (type === 'pie') {
    return (
      <PieChart width={width} height={height}>
        <Pie
          data={data}
          cx={200}
          cy={150}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.fill} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    );
  }

  if (type === 'horizontal-bar') {
    return (
      <BarChart
        width={width}
        height={height}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="categoria" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="valor" fill="#8884d8" radius={[5, 5, 0, 0]} />
      </BarChart>
    );
  }

  return null;
};

export default RechartsComponent;
