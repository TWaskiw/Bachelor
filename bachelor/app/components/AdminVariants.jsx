import { Form, useFetcher } from "@remix-run/react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "../components/ui/dialog";

export default function AdminVariants({ variants }) {
  return (
    <div className="my-4 rounded-lg bg-white shadow-lg p-4">
      {variants.map((variant) => {
        return (
          <Dialog key={variant.id}>
            <DialogTrigger asChild>
              <Button className="m-2" variant="outline">
                {variant.taste}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogTitle>Rediger {variant.taste}</DialogTitle>
              <Form key={variant.id} method="post">
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

                <div className="mb-4">
                  <Label htmlFor={`weight-${variant.id}`}>Lager</Label>
                  <Input
                    type="number"
                    name="stock"
                    id={`stock-${variant.id}`}
                    defaultValue={variant.stock}
                    className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <DialogClose asChild>
                  <div className="flex justify-between gap-4 mb-4">
                    <Button
                      type="submit"
                      name="actionType"
                      value="updateVariant"
                      className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
                    >
                      Gem
                    </Button>
                    <Button
                      type="submit"
                      name="intent"
                      value="deleteVariant"
                      variant="outline"
                    >
                      Slet {variant.taste}
                    </Button>
                  </div>
                </DialogClose>
              </Form>
            </DialogContent>
          </Dialog>
        );
      })}
    </div>
  );
}
