import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import React from "react";

// Type DataCard
interface CardData {
  title: string;
  value: string;
  change: string;
}

// Props Components
interface TotalCardProps {
  data: CardData[];
  icon?: React.ReactNode; // optional
}

// Componente TotalCard
const TotalCard: React.FC<TotalCardProps> = ({ data, icon }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            {icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p
              className={`text-xs ${
                stat.change.startsWith("+") ? "text-green-500" : "text-red-500"
              }`}
            >
              {stat.change} from last week
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TotalCard;
