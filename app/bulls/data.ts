import { cookies } from "next/headers";

export const fetchBulls = async ({ filter }: { filter: string }) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken");
  if (!token) throw new Error("No se encontró el token de acceso");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/bulls?${filter}`,
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`,
      },
    },
  );

  if (!res.ok) throw new Error("Error cargando toros");

  return res.json();
};
