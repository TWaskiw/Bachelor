import { json, redirect } from "@remix-run/node";
import bcrypt from "bcryptjs";
import { Link, useActionData, useLoaderData } from "@remix-run/react";
import { prisma } from "~/db.server";
import { getSession, commitSession } from "~/sessions.server.js";
import { Button } from "~/components/ui/button";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";

export async function loader({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  return json({ userId: session.get("userId") });
}

export default function Login() {
  const actionData = useActionData();
  const { userId } = useLoaderData();
  return (
    <div className="my-16 p-4 max-w-lg h-full m-auto overflow-hidden rounded-lg bg-white shadow-lg">
      <img src="Logo.svg" alt="Logo" className="max-w-lg m-auto my-2"></img>
      <h1 className="mb-1 text-lg font-bold">Login</h1>
      {actionData?.errorMessage && (
        <p className="mb-3 rounded border border-red-500 bg-red-50 p-2 text-red-900">
          {actionData?.errorMessage}
        </p>
      )}
      {userId ? (
        <div>
          <p>
            Du allerede logget ind; gå til
            <Button asChild className="ml-1">
              <Link to={"/products"}>Products</Link>
            </Button>
          </p>
          <form method="post" action="/logout">
            <Button variant="outline">Log ud</Button>
          </form>
        </div>
      ) : (
        <form method="post">
          <Label htmlFor="phoneNumber">Telefonnummer</Label>
          <Input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Telefonnummer"
            defaultValue={actionData?.values?.phoneNumber}
          />
          <Label htmlFor="password">Kodeord</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Kodeord"
            defaultValue={actionData?.values?.password}
          />
          <br />
          <Button variant="outline">Login</Button>
        </form>
      )}
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const formDataObject = Object.fromEntries(formData);
  const session = await getSession(request.headers.get("Cookie"));
  const phoneNumber = formData.get("phoneNumber").trim();
  const user = await prisma.user.findUnique({
    where: {
      phoneNumber: phoneNumber,
    },
    include: {
      password: true,
    },
  });

  if (!user) {
    return json(
      { errorMessage: "Bruger ikke fundet", values: formDataObject },
      { status: 404 }
    );
  }

  const passwordIsValid = await bcrypt.compare(
    formData.get("password").trim(),
    user.password.password
  );

  if (!passwordIsValid) {
    return json(
      { errorMessage: "Invalid password", values: formDataObject },
      { status: 401 }
    );
  }

  session.set("userId", user.id);
  return redirect("/products", {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}
