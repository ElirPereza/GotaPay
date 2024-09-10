// src/utils/clerkUtils.ts

import { clerkClient, getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function withClerkAuth(request: Request, handler: (userId: string) => Promise<NextResponse>) {
  const { userId } = getAuth(request);

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Call the handler with the userId
    return await handler(userId);
  } catch (error) {
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
