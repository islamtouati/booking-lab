import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SideBar from "@/components/side-bar";
import NavBar from "@/components/nav-bar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Booking lab",
  description: "Restaurant reservation management web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <SideBar />
          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <NavBar />
            <main className="flex-1 p-4 sm:px-6 sm:py-0">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
