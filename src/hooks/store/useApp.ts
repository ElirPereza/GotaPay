"use client"
import { create } from 'zustand';

export interface AppState {
  currentRoute: string;
  isSidebarOpen: boolean;

  setCurrentRoute: (route: string) => void;
  toggleSidebar: () => void;
}


const useApp = create<AppState>((set) => ({
  

  currentRoute: 'Dashboard',
  isSidebarOpen: true,

  setCurrentRoute: (route) => set({ currentRoute: route }),
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));

export default useApp;
