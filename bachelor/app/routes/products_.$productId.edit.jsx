import BackButton from "~/components/BackButton";
import { prisma } from "~/db.server";
import { json, redirect } from "@remix-run/node";
import {
  useLoaderData,
  Form,
  useActionData,
  useFetcher,
  useSearchParams,
} from "@remix-run/react";
import { requireUserSession } from "../sessions.server";
import { Switch } from "../components/ui/switch";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import AdminInventory from "../components/AdminInventory";
import AdminVariants from "../components/AdminVariants";
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
import InventoryNew from "../components/InventoryNew";
import { useRef } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import AdminVariantNew from "../components/AdminVariantNew";
import { Toaster } from "../components/ui/sonner";
import {
  deleteProduct,
  deleteVariant,
} from "../components/backendFunctions/deleteFunctions";
import { toast } from "sonner";
import { newVariant } from "../components/backendFunctions/createFunctions";

export async function loader({ params, request }) {
  await requireUserSession(request);
  productId = parseInt(params.productId, 10);

  const product = await prisma.product.findUnique({
    where: { id: productId },
    include: {
      variants: true,
    },
  });

  const category = await prisma.category.findUnique({
    where: { id: product.categoryId },
  });

  const categories = await prisma.category.findMany();

  if (!product) {
    throw new Response(`Dette produkt findes ikke: ${params.productId}`, {
      status: 404,
    });
  }
  return json({ product, category, categories, productId });
}

export async function action({ request, params }) {
  const form = await request.formData();
  const formValues = Object.fromEntries(form);
  const productId = parseInt(params.productId, 10);

  console.log(form);
  console.log(formValues);

  try {
    const intent = form.get("intent") || ""; // Sætter en standardværdi, hvis det er undefined
    const actionType = form.get("actionType") || ""; // Sætter en standardværdi

    if (intent) {
      switch (intent) {
        case "deleteProduct":
          try {
            await deleteProduct(productId);
            return redirect(`/products?deleted=true`);
          } catch (error) {
            console.error(error);
            return json(
              {
                status: "error",
                message: "Fejl ved sletning af produkt",
              },
              { status: 500 }
            );
          }

        case "deleteVariant":
          try {
            const variantId = parseInt(form.get("variantId"), 10);
            await deleteVariant(variantId);
            return json({
              status: "success",
              message: "Variant blev slettet",
            });
          } catch (error) {
            console.error(error); // Log fejlen for debugging
            return json(
              {
                status: "error",
                message: "Fejl ved sletning af variant",
              },
              { status: 500 }
            );
          }
      }
    }
    if (actionType) {
      switch (actionType) {
        case "updateProduct":
          const name = form.get("name").trim();
          if (!name) {
            return json(
              { errorMessage: "Navn skal udfyldes", values: formValues },
              { status: 400 }
            );
          } else {
            const categoryName = form.get("category");
            const newCategory = await prisma.category.findFirst({
              where: {
                name: categoryName,
              },
            });
            await prisma.product.update({
              where: {
                id: productId,
              },
              data: {
                name: name,
                description: form.get("description"),
                show: form.get("show") === "on",
                recommended: form.get("recommended") === "on",
                category: {
                  connect: { id: newCategory.id },
                },
              },
            });
            return redirect(`/products`);
          }

        case "updateVariant":
          const variantId = parseInt(form.get("variantId"), 10);

          await prisma.ProductVariant.update({
            where: {
              id: variantId,
            },
            data: {
              name: form.get("name"),
              price: parseInt(form.get("price"), 10),
              stock: parseInt(form.get("stock"), 10),
            },
          });
          break;
        case "newVariant":
          try {
            await newVariant(form, productId);
            return json({
              status: "success",
              message: "Variant blev oprettet",
            });
          } catch (error) {
            return json(
              {
                status: "error",
                message: "Fejl ved oprettelse af variant",
              },
              { status: 500 }
            );
          }
      }
    }
    return null;
  } catch (error) {
    console.log(error);
    return json({ errors: error.errors, values: formValues }, { status: 400 });
  }
}

export default function EditProduct() {
  const { product, category, categories } = useLoaderData();
  const actionData = useActionData();
  const [activeShow, setActiveShow] = useState(product.show);
  const [activeRec, setActiveRec] = useState(product.recommended);
  const [selectedValue, setSelectedValue] = useState(category.id);
  const deleteBtn = useRef(null);
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");

  useEffect(() => {
    if (actionData?.status === "success") {
      toast.success(actionData.message);
    } else if (actionData?.status === "error") {
      toast.error(actionData.message);
    }
  }, [actionData]);

  useEffect(() => {
    if (success === "true") {
      toast.success("Produktet blev oprettet");
    }
  }, [success]);

  return (
    <div className="max-w-lg container mx-auto">
      <BackButton />
      <Tabs defaultValue="product">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="product">Redigér {product.name}</TabsTrigger>
          <TabsTrigger value="variant">Varianter</TabsTrigger>
        </TabsList>
        <TabsContent value="product">
          <Form method="post" className="mx-auto">
            <div>
              {actionData?.errorMessage && (
                <p className="mb-3 rounded border border-red-500 bg-red-50 p-2 text-red-900">
                  {actionData?.errorMessage}
                </p>
              )}
            </div>
            <Input type="hidden" name="actionType" value="updateProduct" />
            <div className="mb-4">
              <Label htmlFor="name" className="block text-gray-600 mb-2">
                Navn
              </Label>

              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Navn"
                defaultValue={product?.name}
                className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <Label htmlFor="description" className="block text-gray-600 mb-2">
                Beskrivelse
              </Label>
              <Textarea
                type="text"
                name="description"
                id="description"
                placeholder="Beskrivelse"
                defaultValue={product?.description}
                className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="category" className="block text-gray-600 mb-2">
                Kategori
              </Label>
              <Select
                onValueChange={(newValue) => setSelectedValue(newValue)}
                name="category"
                defaultValue={category.name}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Vælg kategori" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="mb-4 flex justify-between">
              <div className="mb-4">
                <Label htmlFor="show" className="block text-gray-600 mb-2">
                  Skal den vises?
                </Label>
                <Switch
                  onCheckedChange={() => {
                    setActiveShow(!activeShow);
                  }}
                  checked={activeShow}
                  name="show"
                />
                <input
                  type="hidden"
                  name="show"
                  value={activeShow ? "on" : "off"}
                />
              </div>

              <div className="mb-4">
                <Label
                  htmlFor="recommended"
                  className="block text-gray-600 mb-2"
                >
                  Anbefales på forsiden?
                </Label>
                <Switch
                  onCheckedChange={() => {
                    setActiveRec(!activeRec);
                  }}
                  checked={activeRec}
                  name="recommended"
                />
                <input
                  type="hidden"
                  name="recommended"
                  value={activeRec ? "on" : "off"}
                />
              </div>
            </div>

            <div className="flex justify-between gap-4 mb-4">
              <Button
                ref={deleteBtn}
                name="intent"
                value=""
                type="submit"
                className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
              >
                Gem
              </Button>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline">Slet produkt</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Er du sikker på at du vil slette {product.name}?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Dette fjerner den permanent
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Annullér</AlertDialogCancel>
                    <AlertDialogAction asChild>
                      <Button
                        onClick={() => {
                          deleteBtn.current.value = "deleteProduct";
                          deleteBtn.current.click();
                        }}
                        variant="outline"
                      >
                        Bekræft
                      </Button>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </Form>
        </TabsContent>
        <TabsContent value="variant">
          <div>
            {product.variants && product.variants.length > 0 ? (
              <AdminVariants
                variants={product.variants}
                productId={product.id}
              />
            ) : null}

            <AdminVariantNew />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
