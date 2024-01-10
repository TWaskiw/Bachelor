import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export default function AdminInventory({ product }) {
  return (
    <div>
      <div className="flex-col justify-center w-full h-full">
        <ul className="list-disc" key={product._id}>
          {product.inventory?.map((inventory) => {
            return (
              <div
                key={inventory.weight}
                className="mb-4 p-4 max-w-lg overflow-hidden rounded-lg bg-white shadow-lg"
              >
                <Label className="block text-gray-600 mb-2">
                  Lagerstatus for {inventory.weight} ml/L
                </Label>
                <RadioGroup
                  name={inventory.weight}
                  defaultValue={JSON.stringify(inventory.stock)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="1" />
                    <Label htmlFor="1">På lager</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="2" />
                    <Label htmlFor="2">Få på lager</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="3" />
                    <Label htmlFor="3">Ikke på lager</Label>
                  </div>
                </RadioGroup>
                <div className="mt-4">
                  <Label htmlFor="name" className="block text-gray-600 mb-2">
                    Pris
                  </Label>

                  <Input
                    type="number"
                    name="price"
                    id="price"
                    placeholder={inventory.price}
                    defaultValue={inventory.price}
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
                    placeholder={inventory.weight}
                    defaultValue={inventory.weight}
                    className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
