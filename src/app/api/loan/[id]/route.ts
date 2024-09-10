import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { parseISO, isValid } from 'date-fns';

// Helper function to parse and validate dates
function parseDate(dateString?: string): Date | undefined {
  if (!dateString) return undefined;
  const date = parseISO(dateString);
  return isValid(date) ? date : undefined;
}

// GET LOAN BY ID
export async function GET(request: Request) {
  try {
    const id = new URL(request.url).pathname.split('/').pop();

    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ error: "Invalid ID format. Ensure ID is a number." }, { status: 400 });
    }

    const loan = await prisma.loan.findUnique({
      where: { id: Number(id) },
    });

    if (!loan) {
      return NextResponse.json({ error: "Loan not found." }, { status: 404 });
    }

    return NextResponse.json(loan);
  } catch (error) {
    console.error("Error fetching loan:", error);
    return NextResponse.json({ error: "Internal Server Error: Unable to fetch loan." }, { status: 500 });
  }
}

// UPDATE LOAN
export async function PUT(request: Request) {
  try {
    const id = new URL(request.url).pathname.split('/').pop();
    const { amount, interestRate, startDate, endDate }: {
      amount?: number;
      interestRate?: number;
      startDate?: string;
      endDate?: string;
    } = await request.json();

    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ error: "Invalid ID format. Ensure ID is a number." }, { status: 400 });
    }

    if (!amount && !interestRate && !startDate && !endDate) {
      return NextResponse.json(
        { error: "At least one field (amount, interestRate, startDate, or endDate) is required to update." },
        { status: 400 }
      );
    }

    if (amount && (isNaN(amount) || amount <= 0)) {
      return NextResponse.json(
        { error: "Invalid amount. Must be a positive number." },
        { status: 400 }
      );
    }

    if (interestRate && (isNaN(interestRate) || interestRate < 0)) {
      return NextResponse.json(
        { error: "Invalid interest rate. Must be a non-negative number." },
        { status: 400 }
      );
    }

    const parsedStartDate = parseDate(startDate);
    const parsedEndDate = parseDate(endDate);

    if (parsedStartDate && parsedEndDate && parsedStartDate >= parsedEndDate) {
      return NextResponse.json(
        { error: "End date must be later than start date." },
        { status: 400 }
      );
    }

    const updateData: {
      amount?: number;
      interestRate?: number;
      startDate?: Date;
      endDate?: Date;
    } = {};

    if (amount !== undefined) updateData.amount = amount;
    if (interestRate !== undefined) updateData.interestRate = interestRate;
    if (parsedStartDate) updateData.startDate = parsedStartDate;
    if (parsedEndDate) updateData.endDate = parsedEndDate;

    const updatedLoan = await prisma.loan.update({
      where: { id: Number(id) },
      data: updateData,
    });

    return NextResponse.json(updatedLoan);
  } catch (error) {
    console.error("Error updating loan:", error);
    return NextResponse.json({ error: "Internal Server Error: Unable to update loan." }, { status: 500 });
  }
}

// DELETE LOAN
export async function DELETE(request: Request) {
  try {
    const id = new URL(request.url).pathname.split('/').pop();

    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ error: "Invalid ID format. Ensure ID is a number." }, { status: 400 });
    }

    const deletedLoan = await prisma.loan.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(deletedLoan);
  } catch (error) {
    console.error("Error deleting loan:", error);
    return NextResponse.json({ error: "Internal Server Error: Unable to delete loan." }, { status: 500 });
  }
}
