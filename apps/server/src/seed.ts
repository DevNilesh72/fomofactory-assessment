// @ts-nocheck
import { PrismaClient } from "@prisma/client";
import { StocksList } from "@repo/common/config";
import cron from 'node-cron';

const prisma = new PrismaClient();

async function fetchData() {
  const ids = StocksList.reduce(
    (prev, curr) =>
      prev ? `${prev},${curr}` : curr,
    ""
  );

  if (!ids) return false;

  const data = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`
  ).then((res) => res.json());
  return data;
}

export async function main() {
  const coins = await fetchData();
  if (coins && Object.keys(coins).length > 0) {
    const newEntries = [];
    Object.keys(coins).map((coin) => {
      newEntries.push({
        name: coin,
        price: coins[coin]["usd"],
      });
    });
    const entry = await prisma.stockPrice.createMany({
      data: newEntries,
    });
    console.log(`${entry.count} entries add in the db`)
  }
}

cron.schedule('* * * * *', () => {
  main()
    .catch(async (e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
});


