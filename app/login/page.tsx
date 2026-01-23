"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next/client";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log("Enviando solicitud de login a:", apiUrl + "/auth/login");
      const res = await fetch(`${apiUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });
      console.log(res);

      if (!res.ok) {
        setError("Credenciales incorrectas");
        return;
      }

      const data = await res.json();
      console.log("data", data);
      setCookie("accessToken", data.access_token, { maxAge: 24 * 60 * 60 });
      console.log("Login exitoso:", data);

      router.push("/bulls");
    } catch (err) {
      console.error(err);
      setError("Error al conectarse al servidor");
    }
  };

  return (
    <div className="min-h-screen w-full bg-dark flex items-center justify-center p-8 animate-fadeIn">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-accent opacity-10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-accent opacity-5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative w-full max-w-[480px] bg-white rounded-[24px] p-[48px] shadow-2xl animate-slideUp">
        <div className="flex items-center justify-center mb-[48px]">
          <div className="bg-accent flex items-center justify-center rounded-[24px] size-[64px] mr-[16px]">
            <span className="font-semibold text-[28px] text-[#393939]">
              B
            </span>
          </div>
          <h1 className="font-semibold text-[32px] text-primary">
            Bulltrack
          </h1>
        </div>

        <div className="mb-[32px] text-center">
          <h2 className="font-semibold text-[24px] text-text-primary mb-[8px]">
            Bienvenido
          </h2>
          <p className="font-normal text-[16px] text-text-secondary">
            Inicia sesión para acceder al sistema
          </p>
        </div>

        {error && (
          <div className="mb-[24px] p-[16px] bg-red-50 border border-red-200 rounded-[8px]">
            <p className="text-red-600 text-center text-[14px]">{error}</p>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-[24px]">
          <div>
            <label 
              htmlFor="email" 
              className="font-medium text-[14px] text-text-primary mb-[8px] block"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="w-full h-[56px] px-[16px] py-[12px] bg-muted border-2 border-transparent rounded-[8px] text-[16px] text-text-primary outline-none focus:border-accent focus:bg-white transition-all"
            />
          </div>

          <div>
            <label 
              htmlFor="password" 
              className="font-medium text-[14px] text-text-primary mb-[8px] block"
            >
              Contraseña
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full h-[56px] px-[16px] py-[12px] bg-muted border-2 border-transparent rounded-[8px] text-[16px] text-text-primary outline-none focus:border-accent focus:bg-white transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-[16px] top-1/2 -translate-y-1/2 text-text-secondary hover:text-accent transition-colors"
              >
                {showPassword ? (
                  <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="2.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fill="none"/>
                    <path d="M18.75 6.75C16.8615 9.74097 13.4683 12.75 9.75002 12.75C6.0317 12.75 2.63856 9.74097 0.750003 6.75C3.04856 3.90825 5.74164 0.75 9.75002 0.75C13.7584 0.75 16.4515 3.9082 18.75 6.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(2.625, 5.625)"/>
                  </svg>
                ) : (
                  <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                    <path d="M2 2L22 22M9.9 4.24A9.12 9.12 0 0112 4C16 4 19.5 6.5 22 12C20.9 13.8 19.6 15.3 18.2 16.5M14.1 14.1C13.5 14.7 12.8 15 12 15C10.3 15 9 13.7 9 12C9 11.2 9.3 10.5 9.9 9.9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-[56px] bg-accent rounded-[12px] font-semibold text-[16px] text-primary hover:bg-[#2bc969] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
