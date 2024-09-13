import { FileChartColumn, HandCoins, LayoutDashboard, Receipt,Settings, User, } from 'lucide-react';
import React from 'react'

export type dashboardSite = typeof siteSidebar;

export const siteSidebar = {
	pages: [
		{
			label: "Dashboard",
			href: "/dashboard",
			icon: LayoutDashboard
		},
		{
			label: "Bill Collectors",
			href: "/dashboard/collector",
			icon: HandCoins
		},
		{
			label: "Loans",
			href: "/dashboard/loan",
			icon: Receipt
		},
		{
			label: "Reports",
			href: "/dashboard/report",
			icon: FileChartColumn
		},
		{
			label: "Settings",
			href: "/dashboard/setting",
			icon: Settings
		},
	],
}
