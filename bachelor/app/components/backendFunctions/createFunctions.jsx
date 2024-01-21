import { prisma } from "~/db.server";

export async function newCategory(form) {
  await prisma.Category.create({
    data: {
      name: form.get("name"),
    },
  });
}
