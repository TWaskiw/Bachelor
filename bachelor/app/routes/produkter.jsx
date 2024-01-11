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
import ComMenu from "../components/ComMenu";
import { InView, useInView } from "react-intersection-observer";
import { useRef, useState, useEffect } from "react";
import { useScroll } from "@react-hooks-library/core";

export async function loader({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  const userId = session.get("userId");

  const db = await connectDb();
  const products = await db.models.Product.find({ show: true });

  return json(products);
}

export default function ProductPage() {
  const products = useLoaderData();
  const uniqueCategories = extractCategories({ products });
  const [active, setActive] = useState(uniqueCategories[0]);
  let categoryWrapper = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      var list = Array.from(categoryWrapper.current.children);
      list.forEach((element) => {
        if (element.getBoundingClientRect().top + scrollY - 250 < scrollY) {
          setActive(element.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" mx-auto flex flex-col md:flex-row place-content-center">
      <div className="sticky top-0  md:hidden bg-white pt-4">
        <h2 className="text-gray-700 font-bold text-3xl md:ml-8 lg:ml-2 sm:ml-16 ml-4">
          Kategorier
        </h2>
        <div className="no-scrollbar overflow-x-auto whitespace-nowrap p-2">
          {uniqueCategories?.map((category) => {
            return (
              <MobilMenu key={category} category={category} active={active} />
            );
          })}
        </div>
      </div>
      <div className="hidden md:block mx-10 min-h-screen">
        <div className="sticky top-[calc(50vh-83px)]">
          {uniqueCategories?.map((category) => {
            return (
              <ComMenu key={category} category={category} active={active} />
            );
          })}
        </div>
      </div>

      <div ref={categoryWrapper}>
        {uniqueCategories?.map((category) => {
          return (
            <div key={category} id={category}>
              <ProductCategory
                key={category}
                products={products}
                category={category}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
