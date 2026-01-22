"use server";

import { fetchBulls } from "./data";

export async function refetchBulls({ filter }: { filter: string }) {
  return await fetchBulls({ filter });
}
