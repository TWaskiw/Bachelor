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

  const products = await prisma.product.findMany({
    where: {
      show: true,
    },
  });

  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  console.log(products, categories);

  return json({ products, categories });
}

export default function ProductPage() {
  const { products, categories } = useLoaderData();
  const [active, setActive] = useState(categories[0] || null);
  let categoryWrapper = useRef(null);

  useEffect(() => {
    const handleScroll = (event) => {
      console.log(categoryWrapper.current.children);
      var list = Array.from(categoryWrapper.current.children);
      list.forEach((element) => {
        console.log(
          "Element ID:",
          element.id,
          "Position:",
          element.getBoundingClientRect().top
        );
        if (element.getBoundingClientRect().top + scrollY - 250 < scrollY) {
          console.log("Setting active category to:", element.id);
          const activeCategory = categories.find(
            (c) => c.id.toString() === element.id
          );
          if (activeCategory) {
            setActive(activeCategory);
          }
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
          {categories?.map((category) => {
            return (
              <MobilMenu
                key={category.id}
                category={category}
                active={active}
              />
            );
          })}
        </div>
      </div>
      <div className="hidden md:block mx-10 min-h-screen">
        <div className="sticky top-[calc(50vh-83px)]">
          {categories?.map((category) => {
            return (
              <ComMenu key={category.id} category={category} active={active} />
            );
          })}
        </div>
      </div>

      <div ref={categoryWrapper}>
        {categories?.map((category) => {
          return (
            <div key={category.id} id={category.id.toString()}>
              <ProductCategory
                key={category.id}
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
