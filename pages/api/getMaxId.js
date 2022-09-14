import prisma from "../../src/client";

export default async function getMaxId(req, res) {
  const maxId = await prisma.$queryRaw`SELECT MAX(id) FROM mydishes`;
  res.status(200).json(maxId);
}
