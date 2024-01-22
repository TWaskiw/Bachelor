import { prisma } from "~/db.server";

//// CATEGORY ////
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

//// PRODUCT ////
// Slet produkter med tilhørende varianter (kører selvom der ingen varianter er)
export async function deleteProduct(productId) {
  return await prisma.$transaction(async (prisma) => {
    // Tjek først om der er varianter tilknyttet til produktet
    const variants = await prisma.productVariant.findMany({
      where: { productId: productId },
    });

    // Hvis der er varianter, slet dem
    if (variants.length > 0) {
      await prisma.productVariant.deleteMany({
        where: { productId: productId },
      });
    }

    // Derefter slet produktet
    await prisma.product.delete({
      where: { id: productId },
    });
  });
}

//// VARIANT ////
export async function deleteVariant(variantId) {
  return await prisma.productVariant.delete({
    where: { id: variantId },
  });
}
