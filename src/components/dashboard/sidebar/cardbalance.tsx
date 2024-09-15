import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon, ArrowDownIcon, RefreshCwIcon } from "lucide-react";

export default function CardBalance({ saldo = 1000.0, moneda = "USD" }) {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Saldo Actual</CardTitle>
        <Button variant="ghost" size="icon" aria-label="Actualizar saldo">
          <RefreshCwIcon className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {moneda} {saldo.toFixed(2)}
        </div>
        <div className="mt-4 flex space-x-4">
          <Button className="flex-1">
            <ArrowUpIcon className="mr-2 h-4 w-4" />
            Ingresar
          </Button>
          <Button variant="outline" className="flex-1">
            <ArrowDownIcon className="mr-2 h-4 w-4" />
            Retirar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
