import { useLoaderData, Link, Outlet } from "@remix-run/react";
import { json } from "@remix-run/node";
import { prisma } from "~/db.server";
import { getSession, requireUserSession } from "~/sessions.server";
import Product from "~/components/Product";
import BackButton from "~/components/BackButton";
import { Button, buttonVariants } from "../components/ui/button";
import MobilMenu from "../components/MobilMenu";
import extractCategories from "../components/extractCategories";
import ProductCategoryAdmin from "../components/ProductCategoryAdmin";
import AdminCategoryNew from "../components/AdminCategoryNew";

export async function loader({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");

  await requireUserSession(request);

  const user = await prisma.user.findUnique({ where: { id: userId } });
  const products = await prisma.product.findMany({});
  const categories = await prisma.category.findMany({});

  if (!user) {
    throw new Response(`Couldn't find course with id ${userId}`, {
      status: 404,
    });
  }

  return json({ products, categories });
}

export async function action({ request }) {
  const form = await request.formData();
  const formValues = Object.fromEntries(form);
  const actionType = form.get("actionType");
  const categoryId = parseInt(form.get("category"), 10);

  console.log(form);
  console.log(formValues);

  switch (actionType) {
    case "newCategory":
      await prisma.Category.create({
        data: {
          name: form.get("name"),
        },
      });
      break;
    case "deleteCategory":
      const productsInCategory = await prisma.product.findMany({
        where: {
          categoryId: categoryId,
        },
        select: {
          id: true,
        },
      });
      // For hvert produkt, sletter jeg alle dets varianter
      for (const product of productsInCategory) {
        await prisma.ProductVariant.deleteMany({
          where: {
            productId: product.id,
          },
        });
      }
      await prisma.Product.deleteMany({
        where: {
          categoryId: categoryId,
        },
      });
      await prisma.Category.delete({
        where: {
          id: categoryId,
        },
      });
  }
  return null;
}

export default function AdminPage() {
  const { products, categories } = useLoaderData();

  return (
    <div className="max-w-lg mx-auto mt-2">
      <div className=" flex flex-row justify-end w-full">
        <AdminCategoryNew />
        <Link
          to={`/products/new`}
          className="bg-orange-400 m-2 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
        >
          Opret produkt
        </Link>
        <form method="post" action="/logout">
          <Button className="m-2" variant="ghost">
            Log ud
          </Button>
        </form>
      </div>
      <div className="overflow-x-auto whitespace-nowrap">
        {categories?.map((category) => {
          return <MobilMenu key={category.id.toString()} category={category} />;
        })}
      </div>

      <div>
        {categories?.map((category) => {
          return (
            <ProductCategoryAdmin
              key={category.id}
              products={products}
              category={category}
              id={category.id}
            />
          );
        })}
      </div>
    </div>
  );
}
