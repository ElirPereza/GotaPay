import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local"
import { ClerkProvider } from "@clerk/nextjs";
import QueryProvider from "@/providers/query.provider";

// Configuración de TT Norms Pro como fuente local
const ttNormsPro = localFont({
  src: [
    {
      path: "../../public/fonts/TT-Norms-Pro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/TT-Norms-Pro-Bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-tt-norms-pro",
});


export const metadata: Metadata = {
  title: "GOTAPAY",
  description: "Microfinance Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={ttNormsPro.className}>
          <QueryProvider>{children}</QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
