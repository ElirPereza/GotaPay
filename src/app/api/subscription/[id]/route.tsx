import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();

  // Check if the id is a number
  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    const subscription = await prisma.subscription.findUnique({
      where: { id: Number(id) },
    });
    if (!subscription) return NextResponse.json({ error: 'Subscription not found' }, { status: 404 });
    return NextResponse.json(subscription);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching subscription' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();
  const { plan } = await request.json();

  // Check if the id is a number
  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    const subscription = await prisma.subscription.update({
      where: { id: Number(id) },
      data: { plan },
    });
    return NextResponse.json(subscription);
  } catch (error) {
    return NextResponse.json({ error: 'Error updating subscription' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();

  // Check if the id is a number
  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  try {
    await prisma.subscription.delete({
      where: { id: Number(id) },
    });
    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting subscription' }, { status: 500 });
  }
}
