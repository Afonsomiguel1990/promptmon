'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Twitter, MessageCircle, Mail, Heart, ExternalLink } from 'lucide-react';

const footerLinks = {
  game: [
    { name: 'Como Jogar', href: '#features' },
    { name: 'PromptMons', href: '#showcase' },
    { name: 'Batalhas', href: '/game/battle' },
    { name: 'PromptDex', href: '/game/promptdex' }
  ],
  community: [
    { name: 'Discord', href: 'https://discord.gg/promptmon', external: true },
    { name: 'GitHub', href: 'https://github.com/promptmon', external: true },
    { name: 'Twitter', href: 'https://twitter.com/promptmon', external: true },
    { name: 'Blog', href: '/blog' }
  ],
  support: [
    { name: 'Contacto', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Suporte', href: '/support' },
    { name: 'Status', href: '/status' }
  ],
  legal: [
    { name: 'Privacidade', href: '/privacy' },
    { name: 'Termos', href: '/terms' },
    { name: 'Cookies', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' }
  ]
};

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/promptmon', color: 'hover:text-gray-300' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/promptmon', color: 'hover:text-blue-400' },
  { name: 'Discord', icon: MessageCircle, href: 'https://discord.gg/promptmon', color: 'hover:text-purple-400' },
  { name: 'Email', icon: Mail, href: 'mailto:hello@promptmon.com', color: 'hover:text-green-400' }
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      {/* Decorative gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/" className="inline-flex items-center gap-3 mb-6">
                <div className="text-4xl">🎮</div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    PromptMon
                  </h3>
                  <p className="text-sm text-gray-400">Battle with AI Power</p>
                </div>
              </Link>
              
              <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
                O primeiro jogo do mundo que combina prompt engineering com estratégia de batalha. 
                Treina, evolui e batalha com as IAs mais avançadas disponíveis.
              </p>
              
              {/* Social links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      viewport={{ once: true }}
                      className={`p-3 bg-slate-800/50 rounded-lg text-gray-400 ${social.color} transition-all duration-300 hover:bg-slate-700/50`}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Links sections */}
          <div className="lg:col-span-4 grid md:grid-cols-4 gap-8">
            {/* Game links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">Jogo</h4>
              <ul className="space-y-3">
                {footerLinks.game.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Community links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">Comunidade</h4>
              <ul className="space-y-3">
                {footerLinks.community.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm inline-flex items-center gap-1"
                    >
                      {link.name}
                      {link.external && <ExternalLink size={12} />}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">Suporte</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Legal links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl border border-purple-500/20"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Mantém-te Atualizado
            </h3>
            <p className="text-gray-300 mb-6">
              Recebe as últimas notícias sobre novos PromptMons, updates e eventos especiais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="o-teu-email@exemplo.com"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Subscrever
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} PromptMon. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Feito com</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
            <span>para a comunidade de IA</span>
          </div>
          
          <div className="text-xs text-gray-500">
            Versão 1.0.0-beta
          </div>
        </motion.div>
      </div>
    </footer>
  );
}