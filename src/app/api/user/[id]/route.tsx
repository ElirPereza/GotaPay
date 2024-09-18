import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const id = request.url.split("/").pop(); // Extract the ID from the URL

  try {
    const user = await prisma.user.findUnique({
      where: { id: id as string },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to retrieve user" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  const id = request.url.split("/").pop(); // Extract the ID from the URL
  const { email, clerkId, role } = await request.json();

  try {
    const updatedUser = await prisma.user.update({
      where: { id: id as string },
      data: { email, clerkId, role },
    });
    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const id = request.url.split("/").pop(); // Extract the ID from the URL

  try {
    await prisma.user.delete({
      where: { id: id as string },
    });
    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 204 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
