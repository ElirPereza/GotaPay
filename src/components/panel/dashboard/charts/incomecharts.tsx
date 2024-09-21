import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React from "react";
import { Area, AreaChart, ResponsiveContainer, Line } from "recharts";

const revenueData = [
  { name: "1", ingreso: 1000, gasto: 800 },
  { name: "2", ingreso: 1500, gasto: 1200 },
  { name: "3", ingreso: 1200, gasto: 1000 },
  { name: "4", ingreso: 1800, gasto: 1500 },
  { name: "5", ingreso: 2000, gasto: 1800 },
  { name: "6", ingreso: 1700, gasto: 1600 },
  { name: "7", ingreso: 1600, gasto: 1400 },
  { name: "8", ingreso: 1900, gasto: 1700 },
  { name: "9", ingreso: 2100, gasto: 1900 },
  { name: "10", ingreso: 1800, gasto: 1600 },
  { name: "11", ingreso: 2200, gasto: 2000 },
  { name: "12", ingreso: 2000, gasto: 1800 },
];

const IncomeCharts: React.FC = () => {
  // Define your chart configuration object if needed
  const chartConfig = {
    desktop: {
      label: "Escritorio",
      color: "#2563eb",
    },
    mobile: {
      label: "Móvil",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Ganancias</CardTitle>
        <Button variant="default" size="sm" className="text-xs">
          Reporte
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-xs mb-2">Datos del 1 al 12 de abril, 2024</div>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="10%" stopColor="#4ADE80" stopOpacity={0.8} />
                <stop offset="55%" stopColor="#4ADE80" stopOpacity={0} />
              </linearGradient>
              <linearGradient
                id="gastoGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="10%" stopColor="#A78BFA" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#A78BFA" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="linear"
              dataKey="ingreso"
              stroke="#4ADE80"
              fillOpacity={1}
              fill="url(#incomeGradient)"
              name="Ingreso"
            />
            <Area
              type="linear"
              dataKey="gasto"
              stroke="#A78BFA"
              fillOpacity={1}
              fill="url(#gastoGradient)"
              name="Gasto"
            />
            <Line
              type="monotone"
              dataKey="ingreso"
              stroke="#4ADE80"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="Ingreso"
            />
            <Line
              type="monotone"
              dataKey="gasto"
              stroke="#A78BFA"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="Gasto"
            />
            <ChartTooltip
              content={
                <ChartTooltipContent labelKey="name" nameKey="ingreso" />
              }
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default IncomeCharts;
