import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Asegúrate de importar tu instancia Prisma correctamente
import { paymentSchema } from "@/schemas/payment.schema";

//GET ALL PAYMENTS
export async function GET() {
  try {
    const payments = await prisma.payment.findMany();
    return NextResponse.json(payments);
  } catch (error) {
    console.error("Error fetching payments:", error);
    return NextResponse.error();
  }
}

// CREATE PAYMENT
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsedBody = paymentSchema.parse(body);

    const payment = await prisma.payment.create({
      data: {
        amount: parsedBody.amount,
        date: new Date(parsedBody.date),
        loan: { connect: { id: parsedBody.loanId } },
        client: parsedBody.clientId
          ? { connect: { id: parsedBody.clientId } }
          : undefined,
      },
    });

    return NextResponse.json(payment, { status: 201 });
  } catch (error) {
    console.error("Error creating payment:", error);
    return NextResponse.error();
  }
}
