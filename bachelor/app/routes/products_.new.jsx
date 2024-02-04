import BackButton from "~/components/BackButton";
import { prisma } from "~/db.server";
import { json, redirect } from "@remix-run/node";
import {
  useLoaderData,
  Form,
  useActionData,
  useSearchParams,
} from "@remix-run/react";
import { requireUserSession } from "../sessions.server";
import { Switch } from "../components/ui/switch";
import { Textarea } from "../components/ui/textarea";
import { Button, buttonVariants } from "../components/ui/button";
import { useEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Checkbox } from "../components/ui/checkbox";
import InventoryNew from "../components/InventoryNew";
import NewProductVariant from "../components/NewProductVariant";
import { toast } from "sonner";

export async function loader({ request }) {
  await requireUserSession(request);
  const categories = await prisma.category.findMany();

  return json({ categories });
}

export async function action({ request }) {
  const session = await requireUserSession(request);
  const form = await request.formData();
  const formValues = Object.fromEntries(form);
  console.log(form.get("image"));
  console.log(formValues);

  const stockValue = form.get("stock");
  const stock = stockValue === null ? 0 : parseInt(stockValue, 10);
  console.log(form.get("category"));

  try {
    const categoryName = form.get("category");
    console.log(categoryName);
    const name = form.get("name");
    const price = form.get("price");
    const weight = form.get("weight");

    if (!name) {
      return json(
        { errorMessage: "Udfyld navn", values: formValues },
        { status: 400 }
      );
    }

    const categoryId = await prisma.category.findFirst({
      where: {
        name: categoryName,
      },
      select: {
        id: true,
      },
    });

    if (!categoryId) {
      return json(
        { errorMessage: "Vælg kategori", values: formValues },
        { status: 400 }
      );
    }

    const isCheckboxChecked = form.get("moreVariants") === "on";
    if (!isCheckboxChecked) {
      if (!price) {
        return json(
          { errorMessage: "Udfyld pris", values: formValues },
          { status: 400 }
        );
      }

      if (!weight) {
        return json(
          { errorMessage: "Udfyld vægt", values: formValues },
          { status: 400 }
        );
      }
    }

    // Objekt af data til 'create' forespørgslen
    const productData = {
      weight: parseInt(form.get("weight"), 10),
      price: parseInt(form.get("price"), 10),
      name: form.get("name"),
      description: form.get("description"),
      show: form.get("show") === "on",
      recommended: form.get("recommended") === "on",
      image: form.get("image"),
      categoryId: Number(categoryId.id),
    };

    // Tjek om 'stock' har en værdi og tilføj det til 'productData', hvis det er tilfældet
    const stockValue = form.get("stock");
    if (stockValue) {
      productData.stock = parseInt(stockValue, 10);
    } else {
      // Hvis 'stock' ikke er angivet, brug standardværdien fra databasen
      productData.stock = 0;
    }

    // Brug 'productData' til at oprette produktet
    const product = await prisma.product.create({
      data: productData,
    });

    if (isCheckboxChecked) {
      return redirect(`/products/${product.id}/edit?success=true`);
    } else {
      return redirect(`/products?success=true`);
    }
  } catch (error) {
    console.error("Fejl ved oprettelse af produkt:", error);
    return json({ errors: error.errors, values: formValues }, { status: 400 });
  }
}

export default function NewProduct() {
  const actionData = useActionData();
  const [activeShow, setActiveShow] = useState("");
  const [activeRec, setActiveRec] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [isVariantChecked, setIsVariantChecked] = useState(false);
  const test = useRef(null);
  const { categories } = useLoaderData();
  const handleCheckboxChange = (checked) => {
    setIsVariantChecked(checked);
  };

  return (
    <div className="max-w-lg container mx-auto p-4">
      <BackButton />
      <Form method="post" className=" mx-auto" encType="multipart/form-data">
        <h1 className="text-2xl font-semibold mb-4">Tilføj produkt</h1>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.addEventListener(
              "load",
              () => {
                test.current.value = reader.result;
                console.log(test.current.value);
              },
              false
            );

            if (file) {
              reader.readAsDataURL(file);
            }
          }}
        />
        <input type="hidden" name="image" ref={test} />
        <div className="mb-4">
          <Label htmlFor="name" className="block text-gray-600 mb-2">
            Navn
          </Label>

          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Navn"
            defaultValue={actionData?.values?.name}
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
            defaultValue={actionData?.values?.description}
            className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="category" className="block text-gray-600 mb-2">
            Kategori
          </Label>
          <Select name="category">
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
          <div>
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

          <div>
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
        <div className="items-top flex space-x-2 mb-8">
          <Checkbox
            id="moreVariants"
            name="moreVariants"
            onCheckedChange={handleCheckboxChange}
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Har dette produkt flere under-varianter?
            </label>
            {isVariantChecked && (
              <p className="text-sm text-muted-foreground">
                Tilføj varianter på rediger-produkt siden, efter at have trykket
                "Gem"
              </p>
            )}
          </div>
        </div>

        {!isVariantChecked && <NewProductVariant />}
        <div>
          {actionData?.errorMessage && (
            <p className="mb-3 rounded border border-red-500 bg-red-50 p-2 text-red-900">
              {actionData?.errorMessage}
            </p>
          )}
        </div>
        <div className="flex justify-between gap-4 mb-4">
          <Button
            type="submit"
            className="bg-orange-400 text-white py-2 px-4 rounded hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
          >
            Gem
          </Button>
        </div>
      </Form>
    </div>
  );
}
