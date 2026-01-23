"use server";

import { fetchBulls, markFavorite } from "./data";

export async function refetchBulls({ filter }: { filter: string }) {
  return await fetchBulls({ filter });
}
export async function mark(bullId: string) {
  return await markFavorite(bullId);
}
