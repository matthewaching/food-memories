import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getDishes(req, res) {
  const dishes = await prisma.mydishes.findMany();
  res.status(200).json(dishes);
}
