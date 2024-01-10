import { Link } from "@remix-run/react";
import Pil from "../../public/pil.svg";

const handleGoBack = () => {
  window.history.back();
};

export default function BackButton({ children, ...rest }) {
  return (
    <Link to="#" onClick={handleGoBack} className="flex flex-row py-4">
      <img src={Pil} className="w-6 h-6 rotate-180" alt="Navigations pil"></img>
      <p className="text-black pl-2">Tilbage</p>
    </Link>
  );
}
