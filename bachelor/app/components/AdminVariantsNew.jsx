import { useFetcher } from "@remix-run/react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "../components/ui/dialog";

export default function AdminVariants({ variants }) {
  return (
    <div className="my-4 rounded-lg bg-white shadow-lg p-4">
      {variants.map((variant) => {
        const fetcher = useFetcher();
        return (
          <fetcher.Form key={variant.id} method="post">
            <input type="hidden" name="actionType" value="newVariant" />
            <input type="hidden" name="variantId" value={variant.id} />
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
            {/*             <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">{variant.taste}</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogTitle>Rediger {variant.taste}</DialogTitle>

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
                  asChild
                >
                  Gem
                </Button>
              </DialogContent>
            </Dialog> */}
          </fetcher.Form>
        );
      })}
    </div>
  );
}
