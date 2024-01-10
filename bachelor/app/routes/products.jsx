import { useLoaderData, Link, Outlet } from "@remix-run/react";
import { json } from "@remix-run/node";
import connectDb from "~/db/connectDb.server.js";
import { getSession, requireUserSession } from "~/sessions.server";
import Product from "~/components/Product";
import BackButton from "~/components/BackButton";
import { Button, buttonVariants } from "../components/ui/button";
import MobilMenu from "../components/MobilMenu";
import extractCategories from "../components/extractCategories";
import ProductCategoryAdmin from "../components/ProductCategoryAdmin";

export async function loader({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");

  await requireUserSession(request);
  const db = await connectDb();

  const user = await db.models.User.findById(userId);
  const products = await db.models.Product.find();

  if (!user) {
    throw new Response(`Couldn't find course with id ${userId}`, {
      status: 404,
    });
  }

  return json(products);
}

export default function AdminPage() {
  const products = useLoaderData();
  console.log(products.map((product) => product._id));
  const uniqueCategories = extractCategories({ products });

  return (
    <div className="max-w-lg mx-auto mt-2">
      <div className=" flex flex-row justify-end w-full">
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
        {uniqueCategories?.map((category) => {
          return <MobilMenu key={category} category={category} />;
        })}
      </div>

      <div>
        {uniqueCategories?.map((category) => {
          return (
            <ProductCategoryAdmin
              key={category}
              products={products}
              category={category}
            />
          );
        })}
      </div>
    </div>
  );
}
