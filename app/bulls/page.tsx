import BullsClient from "./BullsClient";
import { fetchBulls } from "./data";

async function getBulls({ query = "" } = {}) {
  return fetchBulls({ filter: query });
}

export default async function Page() {
  const bulls = await getBulls();

  return <BullsClient initialBulls={bulls.data} />;
}
