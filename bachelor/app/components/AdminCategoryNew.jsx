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

export default function AdminCategoryNew({}) {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="m-2" variant="outline">
            + Tilføj kategori
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Tilføj ny kategori</DialogTitle>
          <Form method="post">
            <input type="hidden" name="actionType" value="newCategory" />
            <div className="mb-4">
              <Input
                type="text"
                name="name"
                className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <DialogClose asChild>
              <Button
                type="submit"
                className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
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
