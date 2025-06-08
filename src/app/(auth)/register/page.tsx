"use client";
import { useState, useEffect } from "react";
import { registerUser } from "@/app/actions/auth";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

type RegisterState = {
  error?: string;
  success?: string;
  details?: {
    username?: string[];
    email?: string[];
    password?: string[];
    confirmPassword?: string[];
  };
};

export default function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [state, setState] = useState<RegisterState>({});
  const [loading, setLoading] = useState(false);
  const [starterName, setStarterName] = useState<string>('');

  useEffect(() => {
    const starterId = searchParams.get('starter');
    const chosenStarterId = localStorage.getItem('chosen_starter_id');
    
    if (starterId || chosenStarterId) {
      // Fetch starter details to show confirmation
      fetchStarterName(starterId || chosenStarterId);
    }
  }, [searchParams]);

  const fetchStarterName = async (starterId: string | null) => {
    if (!starterId) return;
    
    try {
      const response = await fetch('/api/promptmons/starters');
      const data = await response.json();
      const starter = data.starters?.find((s: any) => s.id === starterId);
      if (starter) {
        setStarterName(starter.name);
      }
    } catch (error) {
      console.error('Error fetching starter:', error);
    }
  };

  const handleSubmit = async (formData: FormData) => {
    setLoading(true);
    setState({});
    
    // Add starter_id to form data if available
    const starterId = searchParams.get('starter') || localStorage.getItem('chosen_starter_id');
    if (starterId) {
      formData.append('starter_id', starterId);
    }
    
    const result = await registerUser(formData);
    setState(result);
    setLoading(false);
    
    if (result?.success) {
      // Clear starter from localStorage
      localStorage.removeItem('chosen_starter_id');
      
      // Redirect to login after successful registration
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card-holographic w-full max-w-md p-8 rounded-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            🎮 PromptMon
          </h1>
          <p className="text-gray-300">Crie a sua conta</p>
          
          {starterName && (
            <div className="mt-4 p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
              <p className="text-purple-300 text-sm">
                ✨ Starter escolhido: <span className="font-semibold text-purple-200">{starterName}</span>
              </p>
            </div>
          )}
        </div>

        <form action={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="seu_username"
            />
            {state?.details?.username && (
              <p className="text-red-400 text-sm mt-1">{state.details.username[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="seu@email.com"
            />
            {state?.details?.email && (
              <p className="text-red-400 text-sm mt-1">{state.details.email[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
            />
            {state?.details?.password && (
              <p className="text-red-400 text-sm mt-1">{state.details.password[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
              Confirmar Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
            />
            {state?.details?.confirmPassword && (
              <p className="text-red-400 text-sm mt-1">{state.details.confirmPassword[0]}</p>
            )}
          </div>

          {state?.error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
              <p className="text-red-400 text-sm">{state.error}</p>
            </div>
          )}

          {state?.success && (
            <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
              <p className="text-green-400 text-sm">{state.success}</p>
              <p className="text-green-400 text-sm mt-1">Redirecionando para login...</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-cyberpunk w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="btn-cyberpunk-spinner" />
            <span className="btn-cyberpunk-inner">
              {loading ? "Criando conta..." : "🚀 Criar Conta"}
            </span>
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Já tem conta?{" "}
            <Link 
              href="/login" 
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              Entrar aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 