'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { 
  FolderOpen, 
  Swords, 
  Code2, 
  TrendingUp,
  Shield,
  Sparkles,
  Brain,
  Zap
} from 'lucide-react';

const features = [
  {
    icon: FolderOpen,
    title: "Descobre & Coleciona",
    description: "Captura dezenas de PromptMons únicos, cada um alimentado por um Large Language Model real.",
    color: "from-purple-400 to-pink-400",
    bgColor: "bg-purple-500/10",
    accentColor: "text-purple-400"
  },
  {
    icon: Swords,
    title: "Batalhas Estratégicas de IA",
    description: "Cria prompts para atacar, defende resolvendo desafios, e supera os teus oponentes com inteligência.",
    color: "from-blue-400 to-cyan-400", 
    bgColor: "bg-blue-500/10",
    accentColor: "text-blue-400"
  },
  {
    icon: Code2,
    title: "Código & Criatividade",
    description: "Os teus prompts determinam o sucesso. Resolve desafios complexos para potenciar os teus ataques.",
    color: "from-green-400 to-emerald-400",
    bgColor: "bg-green-500/10", 
    accentColor: "text-green-400"
  },
  {
    icon: TrendingUp,
    title: "Evolui & Personaliza",
    description: "Faz level up dos teus PromptMons, observa-os evoluir, e ajusta as suas personalidades de IA únicas.",
    color: "from-orange-400 to-red-400",
    bgColor: "bg-orange-500/10",
    accentColor: "text-orange-400"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const FeatureCard = ({ feature, index }: { feature: any, index: number }) => {
  const Icon = feature.icon;
  
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="group"
    >
      <Card className="h-full bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 overflow-hidden">
        <CardContent className="p-8 text-center relative">
          {/* Efeito de brilho no hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          
          {/* Ícone animado */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
            className="relative mb-6"
          >
            <div className={`w-20 h-20 mx-auto rounded-2xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
              <Icon size={40} className={feature.accentColor} />
            </div>
            
            {/* Efeito de glow */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`}></div>
          </motion.div>

          {/* Título */}
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300"
          >
            {feature.title}
          </motion.h3>

          {/* Descrição */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
          >
            {feature.description}
          </motion.p>

          {/* Decoração inferior */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
            className={`h-1 bg-gradient-to-r ${feature.color} mx-auto mt-6 rounded-full`}
          />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function FeaturesSection() {
  return (
    <section className="relative py-24 bg-slate-900/50">
      {/* Fundo decorativo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative">
        {/* Cabeçalho da seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-purple-500/10 rounded-full border border-purple-500/20">
            <Sparkles className="text-purple-400" size={20} />
            <span className="text-purple-300 font-medium">Como Funciona</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Domina o Poder da{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Inteligência Artificial
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Entra numa experiência de jogo única onde programação encontra estratégia, 
            e onde a tua criatividade determina a vitória.
          </p>
        </motion.div>

        {/* Grid de funcionalidades */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </motion.div>

        {/* Seção de destaque adicional */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Brain className="text-purple-400" size={32} />
                <Zap className="text-blue-400" size={32} />
                <Shield className="text-green-400" size={32} />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Tecnologia de Vanguarda
              </h3>
              
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                PromptMon integra os modelos de IA mais avançados do mundo - OpenAI, Anthropic, Google, 
                Meta e mais - numa experiência de jogo revolucionária que testa as tuas habilidades 
                de prompt engineering em tempo real.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-purple-300">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  OpenAI GPT-4
                </div>
                <div className="flex items-center gap-2 text-blue-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  Anthropic Claude
                </div>
                <div className="flex items-center gap-2 text-green-300">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  Google Gemini
                </div>
                <div className="flex items-center gap-2 text-orange-300">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  Meta Llama
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}