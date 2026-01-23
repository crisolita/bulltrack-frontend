"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next/client";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="bg-white w-96 p-8 rounded-lg shadow-lg border border-gray-200 flex flex-col">
        <h1 className="text-3xl font-bold text-primary text-center mb-6">
          Bulltrack Login
        </h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />

          <button
            type="submit"
            className="bg-primary text-white py-3 rounded hover:bg-accent transition font-semibold"
          >
            Iniciar sesión
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4 text-sm">
          ¿No tienes cuenta?{" "}
          <span className="text-accent font-semibold cursor-pointer">
            Regístrate
          </span>
        </p>
      </div>
    </div>
  );
}
