'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';
import { Menu, X, Zap, User, LogOut, Settings, Trophy, Gamepad2 } from 'lucide-react';
import CyberpunkButton from '@/components/ui/button-cyberpunk';

const navItems = [
  { name: 'Batalhar', href: '/game/matchmaking', icon: Gamepad2 },
  { name: 'Promptdex', href: '/game/promptdex', icon: Zap },
  { name: 'Ranking', href: '/game/leaderboards', icon: Trophy },
  { name: 'Perfil', href: '/game/profile', icon: User },
];

export default function Navbar() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-neon-blue/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="text-2xl"
            >
              🎮
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent group-hover:from-neon-pink group-hover:to-neon-blue transition-all duration-300">
              PromptMon
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {session && navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-300 hover:text-neon-blue transition-colors duration-300 group"
                >
                  <Icon className="w-4 h-4 group-hover:text-neon-blue" />
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {session ? (
              <div className="flex items-center space-x-3">
                {/* User Avatar */}
                <div className="flex items-center space-x-2 bg-gray-800/50 rounded-full px-3 py-1 border border-gray-700/50">
                  <div className="w-6 h-6 bg-gradient-to-r from-neon-blue to-neon-pink rounded-full flex items-center justify-center text-xs font-bold text-black">
                    {session.user?.name?.[0] || 'U'}
                  </div>
                  <span className="text-sm text-gray-300">{session.user?.name}</span>
                </div>
                
                {/* Settings */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-400 hover:text-neon-blue transition-colors duration-300"
                >
                  <Settings className="w-4 h-4" />
                </motion.button>
                
                {/* Logout */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => signOut()}
                  className="p-2 text-gray-400 hover:text-red-400 transition-colors duration-300"
                >
                  <LogOut className="w-4 h-4" />
                </motion.button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <CyberpunkButton
                  variant="secondary"
                  size="sm"
                  onClick={() => signIn()}
                >
                  Entrar
                </CyberpunkButton>
                <Link href="/register">
                  <CyberpunkButton variant="primary" size="sm">
                    Registar
                  </CyberpunkButton>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-400 hover:text-neon-blue transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-black/90 backdrop-blur-md border-t border-neon-blue/20"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {session && navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 px-3 py-2 text-gray-300 hover:text-neon-blue hover:bg-gray-800/50 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
          
          {/* Mobile Auth */}
          <div className="pt-4 border-t border-gray-700/50">
            {session ? (
              <div className="space-y-2">
                <div className="flex items-center space-x-3 px-3 py-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-pink rounded-full flex items-center justify-center text-sm font-bold text-black">
                    {session.user?.name?.[0] || 'U'}
                  </div>
                  <span className="text-gray-300">{session.user?.name}</span>
                </div>
                <button
                  onClick={() => signOut()}
                  className="flex items-center space-x-3 px-3 py-2 text-red-400 hover:bg-red-400/10 rounded-lg transition-all duration-300 w-full"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Sair</span>
                </button>
              </div>
            ) : (
              <div className="space-y-2 px-3">
                <button
                  onClick={() => signIn()}
                  className="w-full text-left px-3 py-2 text-gray-300 hover:text-neon-blue hover:bg-gray-800/50 rounded-lg transition-all duration-300"
                >
                  Entrar
                </button>
                <Link href="/register">
                  <button className="w-full text-left px-3 py-2 text-gray-300 hover:text-neon-blue hover:bg-gray-800/50 rounded-lg transition-all duration-300">
                    Registar
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}