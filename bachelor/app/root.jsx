import stylesheet from "~/tailwind.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { getSession } from "./sessions.server";
import { json } from "@remix-run/node";
import Navigation from "./components/Navigation";
import { Toaster } from "@/components/ui/sonner";

export async function loader({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  return json({ userId: session.get("userId") });
}

export const links = () => [
  {
    rel: "stylesheet",
    href: stylesheet,
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navigation />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Toaster richColors />
      </body>
    </html>
  );
}
