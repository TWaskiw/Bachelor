import { createCookie } from "@remix-run/node";

export const sessionCookie = createCookie("__session", {
  httpOnly: true,
  maxAge: 60 * 60 * 24 * 1000, // 1 day
  secrets: [process.env.COOKIE_SECRET],
});
