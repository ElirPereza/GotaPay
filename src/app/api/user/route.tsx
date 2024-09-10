import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';



export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to retrieve users' }, { status: 500 });
  }
}

export async function POST(request: Request) {
    const { email, clerkId, role } = await request.json();
  
    try {
      const newUser = await prisma.user.create({
        data: { email, clerkId, role }
      });
      return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
      return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
    }
  }