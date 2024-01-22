import { prisma } from "~/db.server";

//// CATEGORY ////
export async function newCategory(form) {
  await prisma.Category.create({
    data: {
      name: form.get("name"),
    },
  });
}

//// PRODUCT ////
/*Only action taken on products_.new, so no need to export*/

//// VARIANT ////
export async function newVariant(form, productId) {
  await prisma.ProductVariant.create({
    data: {
      taste: form.get("taste"),
      price: parseInt(form.get("price"), 10),
      weight: parseInt(form.get("weight"), 10),
      stock: parseInt(form.get("stock"), 10),
      product: {
        connect: { id: productId },
      },
    },
  });
}
