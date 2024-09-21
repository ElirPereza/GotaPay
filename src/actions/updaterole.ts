"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";

export async function updateUserRole(userId: string, role: string) {
  const { has } = auth();

  // Verifica que el usuario actual tiene permiso para cambiar roles
  if (!has({ permission: "org:sys_memberships:manage" })) {
    throw new Error("No tienes permiso para cambiar roles");
  }

  try {
    await clerkClient.users.updateUser(userId, {
      publicMetadata: { role: role },
    });
    return { success: true };
  } catch (error) {
    console.error("Error al actualizar rol:", error);
    return { success: false, error: error.message };
  }
}
