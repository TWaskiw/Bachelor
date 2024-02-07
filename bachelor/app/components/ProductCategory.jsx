import { Link } from "@remix-run/react";
import { buttonVariants } from "./ui/button";
import formatCategoryName from "./formatCategoryName";
global.Buffer = global.Buffer || require("buffer").Buffer;
import logo from "../../public/Logo.svg";
import paavej from "../../public/billedepaavej.png";
import ProductCardsInfo from "./ProductCardsInfo";

export default function ProductCategory({ products, category }) {
  const filteredProducts = products.filter(
    (product) => product.categoryId === category.id
  );
  // const formattedCategory = formatCategoryName(category);

  return (
    <div className="flex flex-col md:m-8 lg:m-2 sm:m-16 m-4 lg:mt-8">
      <h1 className="text-5xl font-black" id={category.id.toString()}>
        {category.name}
      </h1>
      <div className="grid grid-cols-1 gap-10 sm:w-full md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 auto-rows-[600px,auto] max-w-[800px]">
        {filteredProducts.map((product) => {
          return (
            <article
              key={product.id}
              className="list-decimal mb-4 overflow-hidden rounded w-full shadow-lg cursor-pointer hover:shadow-xl"
            >
              <Link to={`${product.id}`}>
                <div>
                  <div className="bg-red object-cover rounded-t-md h-2/4">
                    <img
                      src={paavej}
                      className="h-full w-full object-cover max-h-96"
                      alt={product.name}
                    />
                  </div>
                  <ProductCardsInfo product={product} />
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
