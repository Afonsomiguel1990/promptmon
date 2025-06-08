import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import SessionProviderWrapper from '@/components/layout/SessionProviderWrapper';
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PromptMon - AI Battle Game",
  description: "Battle with AI language models in this Pokemon-inspired game",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="pt">
      <body className={inter.className}>
        <SessionProviderWrapper session={session}>
          {children}
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
