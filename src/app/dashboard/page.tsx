import { Card } from "@/components/ui/card";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full p-6">
      <Card className="container text-3xl font-bold p-3">Dashboard</Card>

      <div>content</div>
    </div>
  );
};

export default Dashboard;
