import prisma from "../../src/client";

export default async function getDishes(req, res) {
  const dishes = await prisma.mydishes.findMany();
  res.status(200).json(dishes);
}
