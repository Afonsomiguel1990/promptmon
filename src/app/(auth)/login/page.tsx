"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError(
          result.error === "CredentialsSignin" 
            ? "Email ou password inválidos" 
            : result.error
        );
      } else if (result?.ok) {
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      setError("Erro inesperado. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card-holographic w-full max-w-md p-8 rounded-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            🎮 PromptMon
          </h1>
          <p className="text-gray-300">Entre na sua conta</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn-cyberpunk w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="btn-cyberpunk-spinner" />
            <span className="btn-cyberpunk-inner">
              {loading ? "Entrando..." : "🔐 Entrar"}
            </span>
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Não tem conta?{" "}
            <Link 
              href="/register" 
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              Registar aqui
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 