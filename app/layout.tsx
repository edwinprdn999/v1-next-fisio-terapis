'use client'

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

import { useState } from 'react'
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev)
  }

  const pathname = usePathname();
  const isAuthPage = pathname === '/login' || pathname === '/home';

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex h-screen overflow-hidden`}>
        {isAuthPage ? (
          // Hanya render konten (tanpa Header/Sidebar)
          <ClientLayout>
            <div className="flex-1 flex flex-col">
              {children}
            </div>
          </ClientLayout>
        ) : (
          <ClientLayout>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            {/* Tombol toggle di pojok kiri atas untuk mobile */}
            {!isSidebarOpen && (
              <button
                className="absolute top-4 left-4 z-50 p-2  bg-yellow-400 rounded text-white shadow"
                onClick={toggleSidebar}
              >
                <Menu size={20} />
              </button>
            )}
            {/* <div className="flex-1 flex flex-col"> */}
              {/* <Header isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}
              {children}
            {/* </div> */}
          </ClientLayout>
        )}
      </body>
    </html>
  );
}
