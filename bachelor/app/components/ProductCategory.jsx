import { Link } from "@remix-run/react";
import Product from "./Product";
import { buttonVariants } from "./ui/button";
import formatCategoryName from "./formatCategoryName";
global.Buffer = global.Buffer || require("buffer").Buffer;
import logo from "../../public/Logo.svg";
import Stock from "./Stock";
import Pil from "../../public/pil.svg";

export default function ProductCategory({ products, category }) {
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  const formattedCategory = formatCategoryName(category);

  return (
    <div className="flex flex-col md:m-8 lg:m-2 sm:m-16 m-4 lg:mt-8">
      <h1 className="text-5xl font-black" id={category}>
        {formattedCategory}
      </h1>
      <div className="grid grid-cols-1 gap-10 sm:w-full md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 auto-rows-[600px,auto] max-w-[800px]">
        {filteredProducts.map((product) => {
          return (
            <div
              key={product._id}
              className="list-decimal mb-4 overflow-hidden rounded w-full shadow-lg cursor-pointer hover:shadow-xl"
            >
              <Link to={`${product._id}`}>
                <article>
                  <div className="bg-red object-cover rounded-t-md h-2/4">
                    <img
                      src={product.image}
                      className="h-full w-full object-cover max-h-96"
                      alt={product.name}
                    />
                  </div>
                  <div className="flex flex-col items-start flex-basis-45 p-4">
                    <h3 className="font-extrabold text-gray-800 font-sans text-lg  md:text-3xl lg:text-3xl xl:text-3xl">
                      {product.name}
                    </h3>
                    <p className="text-gray-300">
                      {product.inventory[0].price} kr/kg
                    </p>
                    <p className="text-gray-600">
                      Ca. {product.inventory[0].weight} g
                    </p>
                    <p className="py-4 text-xl">
                      Fra {product.inventory[0].price} kr,-
                    </p>
                    <div className="mt-16 flex flex-row justify-between w-full h-full">
                      <Stock stock={product.inventory[0].stock} />
                      <img
                        src={Pil}
                        className="w-6 h-6 my-auto"
                        alt="Navigations pil"
                      ></img>
                    </div>
                  </div>
                </article>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
