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
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        {/* Cyberpunk grid background */}
        <div className="fixed inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0" />
        
        {/* Holographic overlay effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-transparent blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-purple-500/5 to-transparent blur-3xl rounded-full" />
        </div>
        
        <div className="relative z-10">
          <SessionProviderWrapper session={session}>
            {children}
          </SessionProviderWrapper>
        </div>
      </body>
    </html>
  );
}
