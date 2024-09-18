import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET ALL SUBSCRIPTIONS
export async function GET() {
  try {
    const subscriptions = await prisma.subscription.findMany();
    return NextResponse.json(subscriptions);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching subscriptions' }, { status: 500 });
  }
}

// CREATE A NEW SUBSCRIPTIONS
export async function POST(request: Request) {
  const { userId, plan } = await request.json();
  try {
    const subscription = await prisma.subscription.create({
      data: { userId, plan },
    });
    return NextResponse.json(subscription, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error creating subscription' }, { status: 500 });
  }
}