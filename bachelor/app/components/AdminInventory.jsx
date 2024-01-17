import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export default function AdminInventory({ product }) {
  return (
    <div className="flex-col justify-center w-full h-full mb-4 p-4 max-w-lg overflow-hidden rounded-lg bg-white shadow-lg">
      <Label className="block text-gray-600 mb-2">
        Lagerstatus for {product.weight} ml/L
      </Label>
      <div className="mt-4">
        <Label htmlFor="name" className="block text-gray-600 mb-2">
          Pris
        </Label>

        <Input
          type="number"
          name="price"
          id="price"
          placeholder={product.price}
          defaultValue={product.price}
          className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mt-4">
        <Label htmlFor="weight" className="block text-gray-600 mb-2">
          Vægt
        </Label>

        <Input
          type="number"
          name="weight"
          id="weight"
          placeholder={product.weight}
          defaultValue={product.weight}
          className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mt-4">
        <Label htmlFor="stock" className="block text-gray-600 mb-2">
          Lager
        </Label>

        <Input
          type="number"
          name="stock"
          id="stock"
          placeholder={product.stock}
          defaultValue={product.stock}
          className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
}
