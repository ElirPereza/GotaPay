// src/app/api/client/[id]/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET CLIENT BY ID
export async function GET(request: Request) {
  try {
    const { pathname } = new URL(request.url);
    const id = pathname.split('/').pop(); // Obtener el ID de la URL
    console.log('Extracted ID:', id); // Añade esta línea para depuración

    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ error: "Invalid ID." }, { status: 400 });
    }

    const client = await prisma.client.findUnique({
      where: { id: Number(id) },
    });

    if (!client) {
      return NextResponse.json({ error: "Client not found." }, { status: 404 });
    }

    return NextResponse.json(client);
  } catch (error) {
    console.error("Error fetching client:", error);
    return NextResponse.json({ error: "Internal Server Error." }, { status: 500 });
  }
}

// UPDATE CLIENT
export async function PUT(request: Request) {
  try {
    const id = new URL(request.url).pathname.split('/').pop(); // Get URL ID
    const { name, email } = await request.json();

    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ error: "Invalid ID." }, { status: 400 });
    }

    if (!name && !email) {
      return NextResponse.json({ error: "At least one field (name or email) is required to update." }, { status: 400 });
    }

    // Opcional: Validar formato de email
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email format." }, { status: 400 });
    }

    const updatedClient = await prisma.client.update({
      where: { id: Number(id) },
      data: { name, email },
    });

    return NextResponse.json(updatedClient);
  } catch (error) {
    console.error("Error updating client:", error);
    return NextResponse.json({ error: "Internal Server Error." }, { status: 500 });
  }
}

// DELETE CLIENT BY ID
export async function DELETE(request: Request) {
  try {
    const id = new URL(request.url).pathname.split('/').pop(); // Get URL ID

    if (!id || isNaN(Number(id))) {
      return NextResponse.json({ error: "Invalid ID." }, { status: 400 });
    }

    const deletedClient = await prisma.client.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json(deletedClient);
  } catch (error) {
    console.error("Error deleting client:", error);
    return NextResponse.json({ error: "Internal Server Error." }, { status: 500 });
  }
}
