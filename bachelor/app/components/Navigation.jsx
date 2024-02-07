import { Link, useLoaderData } from "@remix-run/react";
import React from "react";
import { Button } from "../components/ui/button";
import { getSession } from "~/sessions.server";
import logo from "../../public/Logo.svg";

export async function loader({ request }) {
  const session = await getSession(request.headers.get("Cookie"));
  return json({ userId: session.get("userId") });
}

const Navigation = () => {
  const { userId } = useLoaderData();
  let Links = [
    { name: "Produkter", link: "/produkter" },
    // { name: "Hjem", link: "/" },
    { name: "Gården", link: "/om-gaarden" },
    { name: "Ismejeri", link: "/ismejeri" },
  ];
  let [open, setOpen] = React.useState(false);

  return (
    <div className="shadow-md w-full  top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="flex font-bold text-2xl cursor-pointer text-gray-800 items-center">
          <span>
            <Link to="/">
              <img src={logo} alt="Logo"></img>
            </Link>
          </span>
        </div>
        <div onClick={() => setOpen(!open)}>
          <p
            name="{open ? 'close' : 'menu'}"
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            x
          </p>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 absolute md:static bg-white md:z-auto z-[-1] 
        left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? "top-20" : "top-[-100%]"
        }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-7">
              <Button asChild variant="link">
                <Link to={link.link}>{link.name}</Link>
              </Button>
            </li>
          ))}
          {userId ? (
            <li className="md:ml-8 md:my-0 my-7 rounded border-2">
              <Button asChild variant="link">
                <Link to="/products">Produktstyring</Link>
              </Button>
              <Button asChild variant="link">
                <Link to="/lager">Lager</Link>
              </Button>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
