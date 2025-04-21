"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Activas", value: 1500, color: "#EBE682" },  // Amarillo
  { name: "Inactivas", value: 2000, color: "#8FB7D6" }, // Azul
  { name: "Resto", value: 100, color: "transparent" }, // Ocultar segunda mitad
];

const COLORS = data.map((entry) => entry.color);

export default function GaugeChart() {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md w-[350px]">
      <h2 className="text-lg font-semibold mb-2">Suscripciones</h2>
      <div className="relative w-full h-40">
        <ResponsiveContainer width={ 300 } height={ 150 }>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              startAngle={1000} // Semicírculo superior
              endAngle={0}
              cx="50%"
              cy="100%"
              innerRadius={50}
              outerRadius={70}
              paddingAngle={5}
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        {/* Número central */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
          1125
        </div>
        {/* Texto debajo */}
        <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 text-sm text-gray-500">
          Total gestión
        </div>
      </div>
      {/* Leyenda */}
      <div className="flex justify-center gap-4 mt-4 text-sm">
        <div className="flex items-center">
          <span className="w-3 h-3 bg-[#F7E46C] rounded-full mr-2"></span>
          Activas
        </div>
        <div className="flex items-center">
          <span className="w-3 h-3 bg-[#77AADD] rounded-full mr-2"></span>
          Inactivas
        </div>
      </div>
    </div>
  );
}
