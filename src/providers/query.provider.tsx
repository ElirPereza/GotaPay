"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./theme.provider";
import NextTopLoader from 'nextjs-toploader';


const queryClient = new QueryClient();

const QueryProvider = (props: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NextTopLoader color="#000" />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {props.children}
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default QueryProvider;
