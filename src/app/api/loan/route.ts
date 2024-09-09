import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET all loans
export async function GET() {
  try {
    const loans = await prisma.loan.findMany();
    return NextResponse.json(loans, { status: 200 });
  } catch (error) {
    console.error('Error fetching loans:', error);
    return NextResponse.json(
      { error: 'Internal Server Error.' },
      { status: 500 }
    );
  }
}
