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

export default function AdminVariantNew() {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="m-2" variant="outline">
            + Tilføj variant
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Tilføj ny variant</DialogTitle>
          <Form method="post">
            <div className="mb-4">
              <Label htmlFor="taste">Navn</Label>
              <Input
                type="text"
                name="taste"
                id="taste"
                className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
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

            <DialogClose asChild>
              <Button
                type="submit"
                name="actionType"
                value="newVariant"
                className="bg-orange-400 text-white py-2 px-4 mt-4 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
              >
                Gem
              </Button>
            </DialogClose>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
