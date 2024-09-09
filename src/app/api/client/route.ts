import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET ALL CLIENTS
export async function GET(request: Request) {
  try {
    const clients = await prisma.client.findMany();
    return NextResponse.json(clients);
  } catch (error) {
    console.error("Error fetching clients:", error);
    return NextResponse.json({ error: "Internal Server Error." }, { status: 500 });
  }
}

// CREATE CLIENT
export async function POST(request: Request) {
    try {
      const { name, email } = await request.json();
  
      // Basic validations
      if (!name || !email) {
        return NextResponse.json(
          { error: "Name and email are required." },
          { status: 400 }
        );
      }
  
      // Validate email format
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return NextResponse.json(
          { error: "Invalid email format." },
          { status: 400 }
        );
      }
  
      // check existing email
      const existingClient = await prisma.client.findUnique({
        where: { email },
      });
  
      if (existingClient) {
        return NextResponse.json(
          { error: "Client with this email already exists." },
          { status: 409 } // Conflict
        );
      }
  
      // create new client
      const newClient = await prisma.client.create({
        data: { name, email },
      });
  
      return NextResponse.json(newClient, { status: 201 });
    } catch (error) {
      console.error("Error creating client:", error);
      return NextResponse.json(
        { error: "Internal Server Error." },
        { status: 500 }
      );
    }
  }