import { requireUserSession } from "../sessions.server";
import { prisma } from "~/db.server";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "../components/ui/table";
import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export async function loader({ request }) {
  await requireUserSession(request);

  const products = await prisma.product.findMany({
    include: {
      variants: true,
    },
  });
  console.log(products);

  return json({ products });
}

export async function action({ request }) {
  const form = await request.formData();

  // Opdater produkter
  for (const [key, value] of form.entries()) {
    if (key.startsWith("product-stock-")) {
      const id = parseInt(key.split("-")[2], 10);
      const stock = parseInt(value, 10);
      await prisma.product.update({
        where: { id },
        data: { stock },
      });
    } else if (key.startsWith("variant-stock-")) {
      const id = parseInt(key.split("-")[2], 10);
      const stock = parseInt(value, 10);
      await prisma.productVariant.update({
        where: { id },
        data: { stock },
      });
    }
  }

  return redirect("/lager");
}

export default function Lager() {
  const { products } = useLoaderData();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.variants.some((variant) =>
          variant.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="list-decimal mx-auto mt-4 mb-16 max-w-[800px] overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="m-4">
        <Input
          className="max-w-[200px]"
          type="text"
          placeholder="Søg i produkter..."
          value={searchTerm}
          onChange={handleSearchChange}
        ></Input>
      </div>
      <Form method="post">
        <Table>
          <thead>
            <TableRow>
              <TableCell>Produkt</TableCell>
              <TableCell>Variant</TableCell>
              <TableCell>Lagerbeholdning</TableCell>
            </TableRow>
          </thead>
          <TableBody>
            {filteredProducts.map((product, index) => {
              const bgColorClass = index % 2 === 0 ? "bg-gray-100" : "bg-white";
              return (
                <React.Fragment key={product.id}>
                  <TableRow className={bgColorClass}>
                    <TableCell className="p-4 align-middle">
                      {product.name}
                    </TableCell>
                    <TableCell className="p-4 align-middle">—</TableCell>{" "}
                    {/* Ingen variant */}
                    <TableCell className="p-4 align-middle">
                      <Input
                        type="number"
                        name={`product-stock-${product.id}`}
                        defaultValue={product.stock}
                        required
                      />
                    </TableCell>
                  </TableRow>
                  {product.variants.map((variant) => (
                    <TableRow key={variant.id} className={bgColorClass}>
                      <TableCell className="p-4 align-middle"></TableCell>{" "}
                      {/* Tom celle for hovedprodukt */}
                      <TableCell className="p-4 align-middle">
                        {variant.name}
                      </TableCell>
                      <TableCell className="p-4 align-middle">
                        <Input
                          type="number"
                          name={`variant-stock-${variant.id}`}
                          defaultValue={variant.stock}
                          required
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </React.Fragment>
              );
            })}
          </TableBody>
        </Table>
        <div className="w-full flex justify-end">
          <Button className="m-4" type="submit" variant="outlineLunds">
            Opdater
          </Button>
        </div>
      </Form>
    </div>
  );
}
