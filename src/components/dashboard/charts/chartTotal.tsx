import { Card } from '@/components/ui/card'
import React from 'react'
import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Label } from 'recharts'

// Define the data structure
export interface WorkerData {
  name: string
  value: number
  color: string
}

// Define the component props
interface WorkerDistributionChartProps {
  data: WorkerData[]
  totalAmount: number
}

export default function WorkerDistributionChart({ data, totalAmount }: WorkerDistributionChartProps) {
  // Calculate the total value to determine the owner's share
  const totalValue = data.reduce((sum, item) => sum + item.value, 0)
  const ownerShare = totalAmount - totalValue

  // Add the owner's share to the data
  const chartData = [
    ...data,
    { name: 'Owner', value: ownerShare, color: '#8884d8' } // Purple color for the owner's share
  ]

  return (
    <Card className="flex w-80 justify-center items-center h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <Label
              value={`$${totalAmount.toLocaleString()}`}
              position="center"
              fill="#333333"
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                fontFamily: 'Arial, sans-serif',
              }}
            />
          </Pie>
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            formatter={(value, entry: any) => (
              <span style={{ color: entry.color }}>
                {entry.payload.name}: ${entry.payload.value.toLocaleString()}
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  )
}