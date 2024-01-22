import {
  useLoaderData,
  Link,
  Outlet,
  useActionData,
  useFetcher,
  useSearchParams,
} from "@remix-run/react";
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
import { Toaster, toast } from "sonner";
import { deleteCategory } from "../components/backendFunctions/deleteFunctions";
import { newCategory } from "../components/backendFunctions/createFunctions";
import { useEffect } from "react";

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
      try {
        await newCategory(form);
        return json({ status: "success", message: "Kategorien blev oprettet" });
      } catch (error) {
        console.error(error); // Log fejlen for debugging
        return json(
          { status: "error", message: "Fejl ved oprettelse af kategori" },
          { status: 500 }
        );
      }

    case "deleteCategory":
      try {
        await deleteCategory(categoryId);
        return json({ status: "success", message: "Kategorien blev slettet" });
      } catch (error) {
        console.error(error); // Log fejlen for debugging
        return json(
          { status: "error", message: "Fejl ved sletning af kategori" },
          { status: 500 }
        );
      }
  }
  return null;
}

export default function AdminPage() {
  const { products, categories } = useLoaderData();
  const actionData = useActionData();
  const [searchParams] = useSearchParams();
  const deleted = searchParams.get("deleted");
  console.log(actionData);

  useEffect(() => {
    if (actionData?.status === "success") {
      toast.success(actionData.message);
    } else if (actionData?.status === "error") {
      toast.error(actionData.message);
    }
  }, [actionData]);

  useEffect(() => {
    if (deleted === "true") {
      toast.success("Produktet blev slettet");
    }
    console.log("i fire once");
  }, [deleted]);

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
