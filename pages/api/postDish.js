import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function postDish(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Invalid HTTP method" });
  }

  const dishData = JSON.parse(req.body);
  const savedData = await prisma.mydishes.create({
    data: dishData,
  });

  res.json(savedData);
}
