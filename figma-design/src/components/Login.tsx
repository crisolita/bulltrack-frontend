import { useState } from 'react';

interface LoginProps {
  onLogin: () => void;
}

export function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would validate credentials here
    onLogin();
  };

  return (
    <div className="min-h-screen w-full bg-[#111714] flex items-center justify-center p-8 animate-fadeIn">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-[#36e27b] opacity-10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-[#36e27b] opacity-5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative w-full max-w-[480px] bg-white rounded-[24px] p-[48px] shadow-2xl animate-slideUp">
        {/* Logo */}
        <div className="flex items-center justify-center mb-[48px]">
          <div className="bg-[#36e27b] flex items-center justify-center rounded-[24px] size-[64px] mr-[16px]">
            <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[28px] text-[#393939]">
              B
            </span>
          </div>
          <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[32px] text-[#1c2620]">
            Bulltrack
          </h1>
        </div>

        {/* Welcome Text */}
        <div className="mb-[32px] text-center">
          <h2 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[24px] text-[#2d2d2d] mb-[8px]">
            Bienvenido
          </h2>
          <p className="font-['Inter:Regular',sans-serif] text-[16px] text-[#717182]">
            Inicia sesión para acceder al sistema
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-[24px]">
          {/* Email Field */}
          <div>
            <label 
              htmlFor="email" 
              className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] mb-[8px] block"
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
              className="w-full h-[56px] px-[16px] py-[12px] bg-[#f7f7f7] border-2 border-transparent rounded-[8px] font-['Inter:Regular',sans-serif] text-[16px] text-[#2d2d2d] outline-none focus:border-[#36e27b] focus:bg-white transition-all"
            />
          </div>

          {/* Password Field */}
          <div>
            <label 
              htmlFor="password" 
              className="font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] mb-[8px] block"
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
                className="w-full h-[56px] px-[16px] py-[12px] bg-[#f7f7f7] border-2 border-transparent rounded-[8px] font-['Inter:Regular',sans-serif] text-[16px] text-[#2d2d2d] outline-none focus:border-[#36e27b] focus:bg-white transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#717182] hover:text-[#36e27b] transition-colors"
              >
                {showPassword ? (
                  <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="2.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fill="none"/>
                    <path d="M18.75 6.75C16.8615 9.74097 13.4683 12.75 9.75002 12.75C6.0317 12.75 2.63856 9.74097 0.750003 6.75C3.04856 3.90825 5.74164 0.75 9.75002 0.75C13.7584 0.75 16.4515 3.9082 18.75 6.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" transform="translate(2.625, 5.625)"/>
                  </svg>
                ) : (
                  <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                    <path d="M2 2L22 22M9.9 4.24A9.12 9.12 0 0112 4C16 4 19.5 6.5 22 12C20.9 13.8 19.6 15.3 18.2 16.5M14.1 14.1C13.5 14.7 12.8 15 12 15C10.3 15 9 13.7 9 12C9 11.2 9.3 10.5 9.9 9.9M3 3L21 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="2.75" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" fill="none" opacity="0.3"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center cursor-pointer group">
              <input 
                type="checkbox" 
                className="size-[20px] rounded-[4px] border-2 border-[#d9d9d9] checked:bg-[#36e27b] checked:border-[#36e27b] cursor-pointer"
              />
              <span className="ml-[8px] font-['Inter:Regular',sans-serif] text-[14px] text-[#2d2d2d] group-hover:text-[#36e27b] transition-colors">
                Recordarme
              </span>
            </label>
            <button 
              type="button"
              className="font-['Inter:Regular',sans-serif] text-[14px] text-[#36e27b] hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-[56px] bg-[#36e27b] rounded-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold text-[16px] text-[#1c2620] hover:bg-[#2bc969] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Iniciar sesión
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-[32px]">
          <div className="flex-1 h-[1px] bg-[#e6e6e6]" />
          <span className="px-[16px] font-['Inter:Regular',sans-serif] text-[14px] text-[#717182]">
            o
          </span>
          <div className="flex-1 h-[1px] bg-[#e6e6e6]" />
        </div>

        {/* Social Login */}
        <div className="space-y-[12px]">
          <button
            type="button"
            className="w-full h-[48px] bg-white border-2 border-[#e6e6e6] rounded-[12px] font-['Inter:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] hover:border-[#36e27b] transition-colors flex items-center justify-center gap-[8px]"
          >
            <svg className="size-[20px]" viewBox="0 0 20 20">
              <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4"/>
              <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z" fill="#34A853"/>
              <path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05"/>
              <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.19 5.736 7.395 3.977 10 3.977z" fill="#EA4335"/>
            </svg>
            Continuar con Google
          </button>
        </div>

        {/* Sign Up Link */}
        <div className="mt-[32px] text-center">
          <span className="font-['Inter:Regular',sans-serif] text-[14px] text-[#717182]">
            ¿No tienes una cuenta?{' '}
          </span>
          <button 
            type="button"
            className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-[14px] text-[#36e27b] hover:underline"
          >
            Regístrate
          </button>
        </div>
      </div>
    </div>
  );
}