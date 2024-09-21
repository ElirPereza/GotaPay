"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Users, Settings, UserPlus, Building } from "lucide-react";

// Simulación de datos de organizaciones y usuarios
const mockOrganizations = [
  {
    id: 1,
    name: "Alice's Organization",
    users: [
      {
        id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
        role: "admin",
      },
      { id: 2, name: "Bob Smith", email: "bob@example.com", role: "collector" },
    ],
  },
  {
    id: 2,
    name: "Charlie's Organization",
    users: [
      {
        id: 3,
        name: "Charlie Brown",
        email: "charlie@example.com",
        role: "admin",
      },
      {
        id: 4,
        name: "David Wilson",
        email: "david@example.com",
        role: "collector",
      },
    ],
  },
];

export default function GlobalManagement() {
  const [organizations, setOrganizations] = useState(mockOrganizations);

  const handleRoleChange = (orgId, userId, newRole) => {
    setOrganizations(
      organizations.map((org) =>
        org.id === orgId
          ? {
              ...org,
              users: org.users.map((user) =>
                user.id === userId ? { ...user, role: newRole } : user
              ),
            }
          : org
      )
    );
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tarjeta de Estadísticas */}
        <Card>
          <CardHeader>
            <CardTitle>Estadísticas del Sistema</CardTitle>
            <CardDescription>Resumen de actividad del sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>Total de Organizaciones: {organizations.length}</p>
              <p>
                Total de Usuarios:{" "}
                {organizations.reduce((acc, org) => acc + org.users.length, 0)}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Tarjeta de Gestión de Organizaciones y Usuarios */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Gestión de Organizaciones y Usuarios</CardTitle>
            <CardDescription>
              Administra las organizaciones y los roles de sus usuarios
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-end mb-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Building className="mr-2 h-4 w-4" /> Agregar Organización
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Agregar Nueva Organización</DialogTitle>
                  </DialogHeader>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="orgName">Nombre de la Organización</Label>
                      <Input
                        id="orgName"
                        placeholder="Nombre de la organización"
                      />
                    </div>
                    <div>
                      <Label htmlFor="ownerName">Nombre del Propietario</Label>
                      <Input
                        id="ownerName"
                        placeholder="Nombre del propietario"
                      />
                    </div>
                    <div>
                      <Label htmlFor="ownerEmail">Email del Propietario</Label>
                      <Input
                        id="ownerEmail"
                        type="email"
                        placeholder="email@ejemplo.com"
                      />
                    </div>
                    <Button type="submit">Agregar Organización</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {organizations.map((org) => (
                <AccordionItem value={`org-${org.id}`} key={org.id}>
                  <AccordionTrigger>{org.name}</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex justify-end mb-4">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">
                            <UserPlus className="mr-2 h-4 w-4" /> Agregar
                            Usuario
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              Agregar Nuevo Usuario a {org.name}
                            </DialogTitle>
                          </DialogHeader>
                          <form className="space-y-4">
                            <div>
                              <Label htmlFor="userName">Nombre</Label>
                              <Input
                                id="userName"
                                placeholder="Nombre del usuario"
                              />
                            </div>
                            <div>
                              <Label htmlFor="userEmail">Email</Label>
                              <Input
                                id="userEmail"
                                type="email"
                                placeholder="email@ejemplo.com"
                              />
                            </div>
                            <div>
                              <Label htmlFor="userRole">Rol</Label>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Seleccionar rol" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="admin">Admin</SelectItem>
                                  <SelectItem value="collector">
                                    Collector
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <Button type="submit">Agregar Usuario</Button>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Nombre</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Rol</TableHead>
                          <TableHead>Acciones</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {org.users.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell>
                              <Select
                                value={user.role}
                                onValueChange={(newRole) =>
                                  handleRoleChange(org.id, user.id, newRole)
                                }
                                disabled={user.role === "admin"}
                              >
                                <SelectTrigger className="w-[180px]">
                                  <SelectValue placeholder="Cambiar rol" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="admin">Admin</SelectItem>
                                  <SelectItem value="collector">
                                    Collector
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
