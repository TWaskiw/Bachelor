import BackButton from "~/components/BackButton";
import connectDb from "~/db/connectDb.server.js";
import { json, redirect } from "@remix-run/node";
import { useLoaderData, Form, useActionData } from "@remix-run/react";
import { requireUserSession } from "../sessions.server";
import { Switch } from "../components/ui/switch";
import { Textarea } from "../components/ui/textarea";
import { Button, buttonVariants } from "../components/ui/button";
import { useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import InventoryNew from "../components/InventoryNew";

export async function loader({ request }) {
  await requireUserSession(request);
  return null;
}

export async function action({ request }) {
  const session = await requireUserSession(request);
  const form = await request.formData();
  const formValues = Object.fromEntries(form);
  const db = await connectDb();
  console.log(form.get("image"));
  console.log(formValues);

  try {
    const newProduct = new db.models.Product({
      name: form.get("name"),
      description: form.get("description"),
      category: form.get("category"),
      show: Boolean(form.get("show")),
      recommended: Boolean(form.get("recommended")),
      image: form.get("image"),
      inventory: form.get("stock1")
        ? [
            {
              stock: form.get("stock0"),
              weight: form.get("weight0"),
              price: form.get("price0"),
            },
            {
              stock: form.get("stock1"),
              weight: form.get("weight1"),
              price: form.get("price1"),
            },
            {
              stock: form.get("stock2"),
              weight: form.get("weight2"),
              price: form.get("price2"),
            },
          ]
        : [
            {
              stock: form.get("stock0"),
              weight: form.get("weight0"),
              price: form.get("price0"),
            },
          ],
    });
    await newProduct.save();
    return redirect(`/products`);
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
  const test = useRef(null);

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

          <Select
            onValueChange={(newValue) => setSelectedValue(newValue)}
            name="category"
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

        <div className="mb-4">
          {selectedValue === "is" ? (
            <div className="w-full ml-auto">
              <InventoryNew idx={0} actionData={actionData} />
              <InventoryNew idx={1} actionData={actionData} />
              <InventoryNew idx={2} actionData={actionData} />
            </div>
          ) : (
            <InventoryNew idx={0} actionData={actionData} />
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
