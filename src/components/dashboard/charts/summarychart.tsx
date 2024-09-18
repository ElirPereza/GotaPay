import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";
import { Cell, Label, Legend, Pie, PieChart, Tooltip } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const summaryData = [
  { name: "admin", value: 13200555 },
  { name: "trabajador1", value: 8800000},
  { name: "trabajador2", value: 3550000 },
  { name: "trabajador3", value: 1950000 },
];

const COLORS = ["#10B981", "#6366F1", "#F43F5E", "#F59E0B"];

// Function to format numbers with abbreviations
const formatNumber = (num: number) => {
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}M`;
  } else if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1)}K`;
  } else {
    return num.toString();
  }
};

const TotalAndPercentageLabel: React.FC<{
  total: number;
  percentage: number;
}> = ({ total, percentage }) => (
  <foreignObject x="0" y="0" width="78%" height="100%">
    <div className="flex flex-col items-center justify-center h-full w-full">
      <div className="text-center text-xl font-bold">{`$${formatNumber(total)}`}</div>
      <div className="text-center text-sm text-red-500 mt-2">
        <ArrowDownIcon className="inline mr-1 h-4 w-4" />
        {percentage}%
      </div>
    </div>
  </foreignObject>
);

const SummaryChart = () => {
  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
  } satisfies ChartConfig;

  const total = summaryData.reduce((sum, entry) => sum + entry.value, 0);
  const npercentage = ((summaryData[0].value / total) * 100).toFixed(2);
  const percentage = parseFloat(npercentage); // Example for the first slice

  return (
    <Card className="w-[440px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Resumen</CardTitle>
        <Button variant="default" size="sm" className="text-xs">
          Reporte
        </Button>
      </CardHeader>
      <CardContent>
        <div className="relative h-[160px] w-full">
          <ChartContainer
            config={chartConfig}
            className="relative h-full w-full"
          >
            <PieChart>
              <Pie
                data={summaryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={4}
                dataKey="value"
              >
                {summaryData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
                <Label
                  content={
                    <TotalAndPercentageLabel
                      total={total}
                      percentage={percentage}
                    />
                  }
                  position="center"
                />
              </Pie>
              <Tooltip content={<ChartTooltipContent labelKey="name" nameKey="summary" />} />
              <Legend
                layout="vertical"
                align="right"
                verticalAlign="middle"
                iconType="circle"
                payload={summaryData.map((entry, index) => ({
                  value: entry.name,
                  type: 'circle',
                  color: COLORS[index % COLORS.length]
                }))}
              />
            </PieChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SummaryChart;
