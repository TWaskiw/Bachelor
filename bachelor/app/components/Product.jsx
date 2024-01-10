import { Link } from "@remix-run/react";
import Stock from "~/components/Stock";

export default function Product({ product }) {
  return (
    <div>
      <li className="list-none" key={product._id}>
        <h2>{product.name}</h2>
      </li>
      <ul className="list-disc">
        {product.inventory?.map((inventory) => {
          return (
            <div>
              <li className="list-none text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-gray-600 mb-2">
                Pris: {inventory.price}
              </li>
              <li className="list-none text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-gray-600 mb-2">
                Vægt: {inventory.weight}
              </li>
              <Stock key={product._id} stock={inventory.stock} />
            </div>
          );
        })}
      </ul>
      <p className="text-gray-700">{product.description}</p>
    </div>
  );
}
