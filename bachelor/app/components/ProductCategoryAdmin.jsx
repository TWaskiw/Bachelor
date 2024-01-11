import { Link } from "@remix-run/react";
import Product from "./Product";
import { buttonVariants } from "./ui/button";

export default function ProductCategoryAdmin({ products, category, id }) {
  const filteredProducts = products.filter(
    (product) => product.categoryId === id
  );

  return (
    <div className="list-decimal mb-4 p-4 max-w-lg overflow-hidden rounded-lg bg-white shadow-lg">
      <h1 id={id}>{category}</h1>
      {filteredProducts.map((product) => (
        <Link
          key={product.id}
          to={`${product.id}/edit`}
          className={`m-2 ${buttonVariants({ variant: "outline" })}`}
        >
          {product.name}
        </Link>
      ))}
    </div>
  );
}
