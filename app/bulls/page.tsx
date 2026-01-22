import BullsClient from "./BullsClient";
import { cookies } from "next/headers";

async function getBulls() {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken");
  if (!token) throw new Error("No se encontró el token de acceso");

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bulls`, {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.value}`,
    },
  });

  console.log("Fetching bulls, status:", res);

  if (!res.ok) throw new Error("Error cargando toros");

  return res.json();
}

export default async function Page() {
  const bulls = await getBulls();

  return <BullsClient initialBulls={bulls.data} />;
}
