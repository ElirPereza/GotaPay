import { FileChartColumn, HandCoins, LayoutDashboard, Receipt, Settings, User, BarChart, Users, Briefcase, ShieldCheck } from 'lucide-react';
import React from 'react';

export type dashboardSite = typeof siteSidebar;

export const siteSidebar = {
  general: [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Profile",
      href: "/dashboard/profile",
      icon: User,
    },
    {
      label: "Notifications",
      href: "/dashboard/notifications",
      icon: ShieldCheck,
    },
  ],
  admin: [
    {
      label: "Capital Management",
      href: "/dashboard/capital",
      icon: Briefcase, // Agrupa la gestión del capital base y delegación de capital
    },
    {
      label: "Bill Collectors",
      href: "/dashboard/collectors",
      icon: Users, // Para crear, editar, y eliminar cobradores
    },
    {
      label: "Cash Flow",
      href: "/dashboard/cashflow",
      icon: HandCoins, // Cuadro de Caja Diario y Mensual
    },
    {
      label: "Loans & Tracking",
      href: "/dashboard/loans",
      icon: Receipt, // Seguimiento de préstamos y reportes relacionados
    },
    {
      label: "Administration",
      href: "/dashboard/admin",
      icon: Settings, // Gestión de usuarios, roles, y configuraciones
    },
  ],
  cobrador: [
    {
      label: "Loans",
      href: "/dashboard/loans",
      icon: Receipt, // Gestión de préstamos asignados
    },
    {
      label: "Reports",
      href: "/dashboard/reports",
      icon: FileChartColumn, // Desempeño y reportes del cobrador
    },
    {
      label: "Communication",
      href: "/dashboard/communication",
      icon: Users, // Mensajes y notificaciones
    },
  ],
  owner: [
    {
      label: "Global Management",
      href: "/dashboard/global",
      icon: BarChart, // Gestión general del sistema, capital y cobradores
    },
    {
      label: "Reports & Analysis",
      href: "/dashboard/reports",
      icon: FileChartColumn, // Informes detallados del sistema
    },
    {
      label: "System Settings",
      href: "/dashboard/settings",
      icon: Settings, // Configuraciones generales del sistema
    },
  ],
};
