import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET ALL LOANS
export async function GET(request: Request) {
  try {
    const loans = await prisma.loan.findMany();
    return NextResponse.json(loans);
  } catch (error) {
    console.error("Error fetching loans:", error);
    return NextResponse.json(
      { error: "Internal Server Error: Unable to fetch loans." },
      { status: 500 }
    );
  }
}

// CREATE LOAN
export async function POST(request: Request) {
  try {
    const { clientId, amount, interestRate, startDate, endDate } = await request.json();

    // Validate input
    if (!clientId || !amount || !interestRate || !startDate || !endDate) {
      return NextResponse.json(
        { error: "All fields (clientId, amount, interestRate, startDate, endDate) are required." },
        { status: 400 }
      );
    }

    if (isNaN(amount) || amount <= 0) {
      return NextResponse.json(
        { error: "Invalid amount. Must be a positive number." },
        { status: 400 }
      );
    }

    if (isNaN(interestRate) || interestRate < 0) {
      return NextResponse.json(
        { error: "Invalid interest rate. Must be a non-negative number." },
        { status: 400 }
      );
    }

    const parsedStartDate = new Date(startDate);
    const parsedEndDate = new Date(endDate);
    if (isNaN(parsedStartDate.getTime()) || isNaN(parsedEndDate.getTime())) {
      return NextResponse.json(
        { error: "Invalid date format. Ensure startDate and endDate are in ISO format." },
        { status: 400 }
      );
    }

    if (parsedStartDate >= parsedEndDate) {
      return NextResponse.json(
        { error: "End date must be later than start date." },
        { status: 400 }
      );
    }

    const newLoan = await prisma.loan.create({
      data: { clientId, amount, interestRate, startDate: parsedStartDate, endDate: parsedEndDate },
    });

    return NextResponse.json(newLoan, { status: 201 });
  } catch (error) {
    console.error("Error creating loan:", error);
    return NextResponse.json(
      { error: "Internal Server Error: Unable to create loan." },
      { status: 500 }
    );
  }
}
