import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Input } from "./ui/input";

export default function InventoryNew({ actionData, product, idx }) {
  return (
    <div className="mb-4 p-4 max-w-lg overflow-hidden rounded-lg bg-white shadow-lg">
      <Label className="block text-gray-600 mb-2">
        {product ? `Lagerstatus for ${product.weight} ml/L` : "Lagerstatus"}
      </Label>
      <RadioGroup name={"stock" + idx} defaultValue={product?.stock || ""}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={1} id="1" />
          <Label htmlFor="1">På lager</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={2} id="2" />
          <Label htmlFor="2">Få på lager</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value={3} id="3" />
          <Label htmlFor="3">Ikke på lager</Label>
        </div>
      </RadioGroup>
      <div className="mt-4">
        <Label htmlFor="name" className="block text-gray-600 mb-2">
          Kilopris
        </Label>

        <Input
          type="number"
          name={"price" + idx}
          id="price"
          placeholder="Pris"
          defaultValue={actionData?.values?.price || product?.price}
          className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mt-4">
        <Label htmlFor="weight" className="block text-gray-600 mb-2">
          Vægt (g)
        </Label>

        <Input
          type="number"
          name={"weight" + idx}
          id="weight"
          placeholder="Vægt (g)"
          defaultValue={actionData?.values?.weight || product?.weight}
          className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
}
