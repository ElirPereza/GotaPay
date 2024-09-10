// src/app/api/payment/[id]/route.ts

import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { paymentUpdateSchema } from "@/schemas/payment.schema";

// GET PAYMENT BY ID
export async function GET(request: Request) {
  try {
    const id = parseInt(request.url.split("/").pop() || "", 10);

    if (isNaN(id)) {
      return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
    }

    const payment = await prisma.payment.findUnique({
      where: { id },
    });

    if (!payment) {
      return NextResponse.json(
        { message: "Payment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(payment);
  } catch (error) {
    console.error("Error fetching payment:", error);
    return NextResponse.error();
  }
}

// UPDATE PAYMENT

export async function PUT(request: NextRequest) {
  try {
    const id = parseInt(request.url.split("/").pop() || "", 10);
    const body = await request.json();
    const parsedBody = paymentUpdateSchema.parse(body);

    if (isNaN(id)) {
      return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
    }

    const payment = await prisma.payment.update({
      where: { id },
      data: {
        amount: parsedBody.amount,
        date: parsedBody.date ? new Date(parsedBody.date) : undefined,
        loan: parsedBody.loanId
          ? { connect: { id: parsedBody.loanId } }
          : undefined,
        client: parsedBody.clientId
          ? { connect: { id: parsedBody.clientId } }
          : undefined,
      },
    });

    return NextResponse.json(payment);
  } catch (error) {
    console.error("Error updating payment:", error);
    return NextResponse.error();
  }
}

// DELETE PAYMENT

export async function DELETE(request: NextRequest) {
  try {
    const id = parseInt(request.url.split("/").pop() || "", 10);

    if (isNaN(id)) {
      return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
    }

    const payment = await prisma.payment.delete({
      where: { id },
    });

    return NextResponse.json(payment);
  } catch (error) {
    console.error("Error deleting payment:", error);
    return NextResponse.error();
  }
}
