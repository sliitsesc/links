import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agenda - SE Orientation 2024 | SLIIT SESC",
  description: "The official agenda for the SE Orientation 2024 of SLIIT SESC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b bg-no-repeat from-[#0e2451] via-[#0A1D42] to-[#061535]`}>
        {children}
      </body>
    </html>
  );
}
