'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { 
  Zap, 
  Gamepad2, 
  Trophy, 
  Users, 
  ArrowRight, 
  Play,
  Sparkles,
  Brain,
  Code2,
  Shield
} from 'lucide-react';
import CyberpunkButton from '@/components/ui/button-cyberpunk';
import FeaturesSection from '@/components/landing/FeaturesSection';
import Footer from '@/components/landing/Footer';

const stats = [
  { label: 'PromptMons Disponíveis', value: '150+', icon: Zap },
  { label: 'Batalhas Realizadas', value: '10K+', icon: Gamepad2 },
  { label: 'Jogadores Ativos', value: '2.5K+', icon: Users },
  { label: 'Modelos de IA', value: '8', icon: Brain },
];

const aiModels = [
  { name: 'GPT-4', company: 'OpenAI', color: 'from-green-400 to-emerald-600' },
  { name: 'Claude', company: 'Anthropic', color: 'from-orange-400 to-red-600' },
  { name: 'Gemini', company: 'Google', color: 'from-blue-400 to-cyan-600' },
  { name: 'Llama', company: 'Meta', color: 'from-purple-400 to-pink-600' },
];

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-neon-blue/10 to-transparent blur-3xl rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-neon-pink/10 to-transparent blur-3xl rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 blur-3xl rounded-full" />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-purple-500/10 rounded-full border border-purple-500/20">
              <Sparkles className="text-purple-400 animate-pulse" size={20} />
              <span className="text-purple-300 font-medium">Bem-vindo ao Futuro dos Jogos de IA</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple bg-clip-text text-transparent animate-pulse">
                PromptMon
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Batalha com o poder da Inteligência Artificial. Captura, treina e evolui PromptMons únicos 
              alimentados pelos modelos de IA mais avançados do mundo.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            {session ? (
              <Link href="/game/matchmaking">
                <CyberpunkButton variant="primary\" size="lg\" className="text-lg px-8 py-4">
                  <Play className="mr-2\" size={20} />
                  Começar a Batalhar
                </CyberpunkButton>
              </Link>
            ) : (
              <Link href="/register">
                <CyberpunkButton variant="primary" size="lg" className="text-lg px-8 py-4">
                  <Gamepad2 className="mr-2" size={20} />
                  Começar Aventura
                </CyberpunkButton>
              </Link>
            )}
            
            <Link href="#features">
              <CyberpunkButton variant="secondary" size="lg" className="text-lg px-8 py-4">
                <Brain className="mr-2" size={20} />
                Como Funciona
                <ArrowRight className="ml-2" size={20} />
              </CyberpunkButton>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="mb-3 flex justify-center">
                    <div className="p-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                      <Icon className="text-neon-blue group-hover:text-neon-pink transition-colors duration-300" size={24} />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-neon-blue transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-neon-blue/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-neon-blue rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* AI Models Showcase */}
      <section className="relative py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Alimentado pelos{' '}
              <span className="bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent">
                Melhores Modelos de IA
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cada PromptMon é alimentado por um modelo de IA real, com personalidades e habilidades únicas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {aiModels.map((model, index) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:bg-slate-800/70 transition-all duration-300 relative overflow-hidden">
                  {/* Glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${model.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`} />
                  
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${model.color} flex items-center justify-center text-white font-bold text-xl`}>
                    {model.name[0]}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-neon-blue group-hover:to-neon-pink transition-all duration-300">
                    {model.name}
                  </h3>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {model.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Pronto para{' '}
              <span className="bg-gradient-to-r from-neon-blue to-neon-pink bg-clip-text text-transparent">
                Dominar a IA?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Junta-te a milhares de treinadores que já descobriram o poder do prompt engineering através do jogo.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {session ? (
                <>
                  <Link href="/game/matchmaking">
                    <CyberpunkButton variant="primary\" size="lg\" className="text-lg px-8 py-4">
                      <Gamepad2 className="mr-2\" size={20} />
                      Entrar no Jogo
                    </CyberpunkButton>
                  </Link>
                  <Link href="/game/promptdex">
                    <CyberpunkButton variant="secondary" size="lg" className="text-lg px-8 py-4">
                      <Zap className="mr-2" size={20} />
                      Ver PromptDex
                    </CyberpunkButton>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/register">
                    <CyberpunkButton variant="primary" size="lg" className="text-lg px-8 py-4">
                      <Gamepad2 className="mr-2" size={20} />
                      Criar Conta Grátis
                    </CyberpunkButton>
                  </Link>
                  <Link href="/login">
                    <CyberpunkButton variant="secondary" size="lg" className="text-lg px-8 py-4">
                      <Shield className="mr-2" size={20} />
                      Já Tenho Conta
                    </CyberpunkButton>
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}