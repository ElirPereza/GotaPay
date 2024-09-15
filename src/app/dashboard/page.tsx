"use client";
import ModernChart from "@/components/dashboard/charts/chartCard";
import ChartCard from "@/components/dashboard/charts/chartCard";
import TransactionTable from "@/components/dashboard/cards/last-transaction";
import LastTransaction, {
  Transaction,
} from "@/components/dashboard/cards/last-transaction";
import TotalCard from "@/components/dashboard/cards/totalcard";
import WorkerDistributionChart, {
  WorkerData,
} from "@/components/dashboard/charts/chartTotal";

const dataCard = [
  { title: "Total Users", value: "10,928", change: "+12%" },
  { title: "Stock", value: "8,236", change: "-2%" },
  { title: "Revenue", value: "6,642", change: "+18%" },
];

const transactions: Transaction[] = [
  {
    name: "Josephine Zimmerman",
    status: "pending",
    date: "14.01.2024",
    amount: "$ 3,200",
  },
  {
    name: "Cecilia Harriet",
    status: "done",
    date: "13.01.2024",
    amount: "$ 2,800",
  },
  {
    name: "Dennis Thomas",
    status: "cancelled",
    date: "12.01.2024",
    amount: "$ 2,600",
  },
  {
    name: "Lula Neal",
    status: "pending",
    date: "11.01.2024",
    amount: "$ 3,200",
  },
  {
    name: "Jeff Montgomery",
    status: "done",
    date: "10.01.2024",
    amount: "$ 4,600",
  },
];

const data = [
  { date: "2024-01-01", sales: 2400, revenue: 2400 },
  { date: "2024-01-02", sales: 1398, revenue: 2210 },
  { date: "2024-01-03", sales: 9800, revenue: 2290 },
  { date: "2024-01-04", sales: 3908, revenue: 2000 },
  { date: "2024-01-05", sales: 4800, revenue: 2181 },
  { date: "2024-01-06", sales: 3800, revenue: 2500 },
  { date: "2024-01-07", sales: 4300, revenue: 2100 },
];
const series = [
  { key: "sales", color: "#8884d8", name: "Sales" },
  { key: "revenue", color: "#82ca9d", name: "Revenue" },
];

const workerData: WorkerData[] = [
  { name: "Worker 1", value: 5000000, color: "#0088FE" },
  { name: "Worker 2", value: 3000000, color: "#00C49F" },
  { name: "Worker 3", value: 2000000, color: "#FFBB28" },
];
const totalAmount = 15000000; // $15 million

const Dashboard = () => {
  const theme = "dark";
  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? " text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 flex flex-col px-10 gap-8">
          <TotalCard data={dataCard} />
          <ModernChart
            data={data}
            title="Sales and Revenue over Time"
            xAxisKey="date"
            series={series}
          />
          <TransactionTable
            transactions={transactions}
            title="Latest Transactions"
          />

          <WorkerDistributionChart
            data={workerData}
            totalAmount={totalAmount}
          />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
