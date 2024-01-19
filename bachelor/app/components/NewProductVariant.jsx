import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";

export default function NewProductVariant() {
  return (
    <div className="flex-col justify-center w-full h-full mb-4 p-4 max-w-lg overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="mt-4">
        <Label htmlFor="name" className="block text-gray-600 mb-2">
          Pris
        </Label>

        <Input
          type="number"
          name="price"
          id="price"
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
          className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
}
