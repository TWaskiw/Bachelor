import { useLoaderData, Link, Outlet } from "@remix-run/react";
import { json } from "@remix-run/node";
import { prisma } from "~/db.server";
import { getSession, requireUserSession } from "~/sessions.server";
import Product from "~/components/Product";
import BackButton from "~/components/BackButton";
import { Button, buttonVariants } from "../components/ui/button";
import MobilMenu from "../components/MobilMenu";
import ProductCategory from "../components/ProductCategory";
import extractCategories from "../components/extractCategories";
import Stock from "../components/Stock";

export async function loader({ request, params }) {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");
  productId = parseInt(params.productId, 10);
  console.log(productId);

  const product = await prisma.Product.findUnique({
    where: { id: productId },
    include: {
      variants: true,
    },
  });

  console.log(product);

  return json({ product, userId });
}

export default function ProductPage() {
  const { product } = useLoaderData();

  return (
    <div className="w-full md:flex-row flex flex-col-reverse">
      <div className="flex flex-col md:max-w-[50%] w-full   sm:min-h-[calc(100vh-83px)] h-full p-8 sm:p-0 sm:px-16">
        <div className="h-full m-auto">
          <div className="my-4 block">
            <BackButton />
          </div>
          <div className="navne">
            <h1 className="text-5xl">{product.name}</h1>
            <p className="text-sm sm:text-lg">{product.description}</p>
          </div>
          <div className="info my-10">
            <div className="info flex flex-row text-start flex-wrap">
              <div className="flex-none w-1/2 mt-auto">
                <p className="text-base text-gray-500">Kilopris</p>
                <p className="text-xl">{product.price} kr/kg</p>
              </div>
              <div className="flex-none w-1/2 mt-auto">
                <p className="text-base text-gray-500">Generel Vægt</p>
                <p className="text-xl">Ca. {product.weight} g</p>
              </div>

              <div className="flex-none w-1/2 mt-auto ">
                <p className="text-base text-gray-500 mt-6">Fra</p>
                <p className="text-xl">
                  {(product.weight / 1000) * product.price} kr,-
                </p>
              </div>
              <div className="flex-none w-1/2 mt-auto">
                {/* <Stock className="mt-6" stock={product.stock} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:max-w-[50%] w-full sm:h-[calc(100vh-83px)]">
        {/*         <div className="w-full bg-white hidden sticky top-0">
          <BackButton className="w-full p-16" />
        </div> */}
        <img
          className="object-cover sm:h-full w-full"
          src={product.image}
          alt={product.name}
        />
      </div>
    </div>
  );
}
