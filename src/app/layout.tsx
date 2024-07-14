import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agenda - SE Orientation 2024 July | SLIIT SESC",
  description: "The agenda for the SE Orientation of SLIIT students, 2024 June",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black-background bg-grids-pattern`}>
        {children}
      </body>
    </html>
  );
}
