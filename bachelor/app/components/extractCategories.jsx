import { prisma } from "~/db.server";

export default async function extractCategories({}) {
  const categories = await prisma.category.findMany({});

  return Array.from(categories);
}
