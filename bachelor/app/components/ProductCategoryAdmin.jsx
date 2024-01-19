import { Form, Link, useFetcher } from "@remix-run/react";
import Product from "./Product";
import { Button, buttonVariants } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";

export default function ProductCategoryAdmin({ products, category, id }) {
  const filteredProducts = products.filter(
    (product) => product.categoryId === id
  );
  const fetcher = useFetcher();
  return (
    <div className="list-decimal mb-4 p-4 max-w-lg overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="w-full flex justify-between">
        <h1>{category}</h1>
        <div className="flex justify-between gap-4 mb-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Slet</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Er du sikker på at du vil slette {category} og alle
                  dertilhørende produkt- og produktvarianter?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Dette er permanent
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Annullér</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <fetcher.Form method="post">
                    <input type="hidden" name="category" value={id} />
                    <input
                      type="hidden"
                      name="actionType"
                      value="deleteCategory"
                    />
                    <button type="submit">Slet {category}</button>
                  </fetcher.Form>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      {filteredProducts.map((product) => (
        <Link
          key={product.id}
          to={`${product.id}/edit`}
          className={`m-2 ${buttonVariants({ variant: "outline" })}`}
        >
          {product.name}
        </Link>
      ))}
    </div>
  );
}
