import { Form, Link, useFetcher } from "@remix-run/react";
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

  return (
    <div className="list-decimal mb-4 p-4 max-w-lg overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="w-full flex justify-between">
        <h1>{category.name}</h1>
        <div className="flex justify-between gap-4 mb-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="link">Slet</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Er du sikker på at du vil slette {category.name} og alle dets
                  produkter og varianter?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  Dette er permanent
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Annullér</AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Form method="post">
                    <input type="hidden" name="category" value={id} />
                    <input
                      type="hidden"
                      name="actionType"
                      value="deleteCategory"
                    />
                    <button type="submit">Slet {category.name}</button>
                  </Form>
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
