import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.css';
import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapActivation from "../helpers/BootstrapActivations";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exam",
  description: "JS course exam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BootstrapActivation />
      </body>
    </html>
  );
}
