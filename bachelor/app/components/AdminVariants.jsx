import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "./ui/button";
import { Form } from "@remix-run/react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "../components/ui/dialog";

export async function action({ request }) {
  const formData = await request.formData();
  const form = Object.fromEntries(formData);
  await prisma.productvariant.update({
    where: {
      id: variant.id,
    },
    data: {
      name: form.get("taste"),
      price: parseInt(form.get("price"), 10),
      weight: parseInt(form.get("weight"), 10),
    },
  });
}

export default function AdminVariants({ variants }) {
  return (
    <div className="my-4 rounded-lg bg-white shadow-lg p-4">
      {variants.map((variant) => (
        <Form key={variant.id} method="post">
          <Dialog>
            <DialogTrigger asChild>
              <button>{variant.taste}</button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Rediger Variant: {variant.taste}</DialogTitle>
              <input type="hidden" name="variantId" value={variant.id} />
              <div className="mb-4">
                <Label htmlFor={`taste-${variant.id}`}>Navn</Label>
                <Input
                  type="text"
                  name="taste"
                  id={`taste-${variant.id}`}
                  defaultValue={variant.taste}
                  className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor={`price-${variant.id}`}>Pris</Label>
                <Input
                  type="number"
                  name="price"
                  id={`price-${variant.id}`}
                  defaultValue={variant.price}
                  className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor={`weight-${variant.id}`}>Vægt</Label>
                <Input
                  type="number"
                  name="weight"
                  id={`weight-${variant.id}`}
                  defaultValue={variant.weight}
                  className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                />
              </div>
              <Button
                type="submit"
                className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
              >
                Gem
              </Button>
            </DialogContent>
          </Dialog>
        </Form>
      ))}
    </div>
  );
}
