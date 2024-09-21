import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { withClerkAuth } from '@/actions/clerkUtils';

// GET ALL USERS
export async function GET(request: NextRequest) {
  return withClerkAuth(request, async (userId: string) => {
    try {
      const users = await prisma.user.findMany();
      return NextResponse.json(users);
    } catch (error) {
      // Handle the error properly
      console.error("Error retrieving users:", error);
      if (error instanceof Error) {
        return NextResponse.json({ error: 'Failed to retrieve users', details: error.message }, { status: 500 });
      } else {
        return NextResponse.json({ error: 'Failed to retrieve users', details: 'An unknown error occurred' }, { status: 500 });
      }
    }
  });
}

// CREATE USER
export async function POST(request: NextRequest) {
  return withClerkAuth(request, async (userId: string) => {
    const { email, clerkId, role } = await request.json();
    
    try {
      const newUser = await prisma.user.create({
        data: { email, clerkId, role }
      });
      return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
      // Handle the error properly
      console.error("Error creating user:", error);
      if (error instanceof Error) {
        return NextResponse.json({ error: 'Failed to create user', details: error.message }, { status: 500 });
      } else {
        return NextResponse.json({ error: 'Failed to create user', details: 'An unknown error occurred' }, { status: 500 });
      }
    }
  });
}
