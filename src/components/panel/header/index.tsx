"use client"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Bell, MessageSquare, Moon, Sun } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { siteSidebar } from '../site'

export const HeaderDashboard = () => {
    const pathname = usePathname(); // Obtiene la ruta actual
    const [currentPage, setCurrentPage] = useState("");

    useEffect(() => {
        // Buscar en todas las secciones del sidebar
        const currentPageInfo = Object.values(siteSidebar).flat().find(
            (item) => item.href === pathname
        );
        if (currentPageInfo) {
            setCurrentPage(currentPageInfo.label);
        } else {
            setCurrentPage("Page Not Found");
        }
    }, [pathname]);
    
    const theme = "dark"; // Cambia esto según el estado real del tema
    return (
        <Card className="flex justify-between items-center mx-10 my-5 p-4">
            <h1 className="text-3xl font-bold">{currentPage}</h1>
            <div className="flex items-center space-x-4">
                <Input
                    type="search"
                    placeholder="Search..."
                    className={`w-64 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
                />
                <Button variant="ghost" size="icon">
                    <MessageSquare size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                    <Bell size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                    {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </Button>
            </div>
        </Card>
    )
}

