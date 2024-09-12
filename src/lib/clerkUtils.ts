// src/utils/clerkUtils.ts

import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';

export async function withClerkAuth(
  request: NextRequest,
  handler: (userId: string) => Promise<NextResponse>
) {
  const { userId } = getAuth(request);

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Call the handler with the userId
    return await handler(userId);
  } catch (error) {
    // Handle the error properly
    console.error("Error processing request:", error);
    
    // Check if error is an instance of Error
    if (error instanceof Error) {
      return NextResponse.json({ error: "Failed to process request", details: error.message }, { status: 500 });
    } else {
      // Handle unexpected error types
      return NextResponse.json({ error: "Failed to process request", details: "An unknown error occurred" }, { status: 500 });
    }
  }
}
