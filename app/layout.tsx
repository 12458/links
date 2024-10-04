import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { PHProvider } from './providers'
import dynamic from 'next/dynamic'


const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: "Shang En's Links",
  description: "Find all of Shang En's links here.",
};

const PostHogPageView = dynamic(() => import('./PostHogPageView'), {
  ssr: false,
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <PHProvider>
        <body
          className={cn(
            "bg-background font-sans antialiased bg-black",
            fontSans.variable
          )}
        >
          {children}
        </body>
      </PHProvider>
    </html>
  );
}
