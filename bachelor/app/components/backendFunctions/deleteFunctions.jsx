import { prisma } from "~/db.server";

export async function deleteCategory(categoryId) {
  return prisma.$transaction(async (prisma) => {
    // Find alle produkter i kategorien
    const productsInCategory = await prisma.product.findMany({
      where: {
        categoryId: categoryId,
      },
      select: {
        id: true,
      },
    });

    // Slet alle varianter af produkterne
    for (const product of productsInCategory) {
      await prisma.ProductVariant.deleteMany({
        where: {
          productId: product.id,
        },
      });
    }

    // Slet alle produkter i kategorien
    await prisma.Product.deleteMany({
      where: {
        categoryId: categoryId,
      },
    });

    // Slet selve kategorien
    await prisma.Category.delete({
      where: {
        id: categoryId,
      },
    });
  });
}

/*
export async function deleteVariant(variantId) {
  return prisma.ProductVariant.delete({
    where: { id: variantId },
  });
}

// Du kan tilføje flere hjælpefunktioner her
*/
