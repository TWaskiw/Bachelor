import BackButton from "~/components/BackButton";
import { prisma } from "~/db.server";
import { json, redirect } from "@remix-run/node";
import { useLoaderData, Form, useActionData } from "@remix-run/react";
import { requireUserSession } from "../sessions.server";
import { Switch } from "../components/ui/switch";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { useState } from "react";
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

export async function loader({ params, request }) {
  await requireUserSession(request);

  const db = await connectDb();

  const product = await db.models.Product.findById(params.productId);

  if (!product) {
    throw new Response(
      `Produkt med dette id findes ikke: ${params.productId}`,
      {
        status: 404,
      }
    );
  }
  return json(product);
}

export async function action({ request, params }) {
  const form = await request.formData();
  const formValues = Object.fromEntries(form);
  const db = await connectDb();
  console.log(formValues, "testestset er der en delete intent");

  if (form.get("intent") === "delete") {
    await db.models.Product.findByIdAndDelete(params.productId);
    return redirect(`/products/`);
  }

  try {
    const product = await db.models.Product.findById(params.productId);
    product.show = form.get("show") === "on";
    product.recommended = form.get("recommended") === "on";
    product.name = form.get("name");
    product.description = form.get("description");
    product.stock = form.getAll("stock");
    product.inventory[0] = {
      stock: form.get("stock0"),
      weight: form.get("weight0"),
      price: form.get("price0"),
    };
    if (form.get("stock1")) {
      product.inventory[1] = {
        stock: form.get("stock1"),
        weight: form.get("weight1"),
        price: form.get("price1"),
      };
      product.inventory[2] = {
        stock: form.get("stock2"),
        weight: form.get("weight2"),
        price: form.get("price2"),
      };
    }

    await product.save();
    return redirect(`/products/${params.productId}/edit`);
  } catch (error) {
    console.log(error);
    return json({ errors: error.errors, values: formValues }, { status: 400 });
  }
}

export default function EditProduct() {
  const product = useLoaderData();
  const actionData = useActionData();
  const [activeShow, setActiveShow] = useState(product.show);
  const [activeRec, setActiveRec] = useState(product.recommended);
  const [selectedValue, setSelectedValue] = useState(product.category);
  const deleteBtn = useRef(null);

  return (
    <div className="max-w-lg container mx-auto p-4">
      <BackButton />

      <Form method="post" className="mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Redigér {product.name}</h1>
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
            defaultValue={product?.category}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Vælg kategori" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="boffersteaks">Bøffer/Steaks</SelectItem>
              <SelectItem value="hakket">Hakket oksekød</SelectItem>
              <SelectItem value="helestege">Hele Stege</SelectItem>
              <SelectItem value="spegepolse">Spegepølse</SelectItem>
              <SelectItem value="is">Is</SelectItem>
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
          </div>

          <div className="mb-4">
            <Label htmlFor="recommended" className="block text-gray-600 mb-2">
              Anbefales på forsiden?
            </Label>
            <Switch
              onCheckedChange={() => {
                setActiveRec(!activeRec);
              }}
              checked={activeRec}
              name="recommended"
            />
          </div>
        </div>

        <div className="mb-4">
          <div className="w-full ml-auto">
            {product.inventory.map((item, idx) => (
              <InventoryNew
                actionData={actionData}
                product={item}
                idx={idx}
                key={item.weight}
              />
            ))}
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
                      deleteBtn.current.value = "delete";
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
    </div>
  );
}
