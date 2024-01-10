import { Link } from "@remix-run/react";
import Product from "./Product";
import { buttonVariants } from "./ui/button";
import formatCategoryName from "./formatCategoryName";

export default function ProductCategoryAdmin({ products, category }) {
  const filteredProducts = products.filter(
    (product) => product.category === category
  );
  const formattedCategory = formatCategoryName(category);

  return (
    <div className="list-decimal mb-4 p-4 max-w-lg overflow-hidden rounded-lg bg-white shadow-lg">
      <h1 id={category}>{formattedCategory}</h1>
      {filteredProducts.map((product) => (
        <Link
          key={product._id}
          to={`${product._id}/edit`}
          className={`m-2 ${buttonVariants({ variant: "outline" })}`}
        >
          {product.name}
        </Link>
      ))}
    </div>
  );
}
