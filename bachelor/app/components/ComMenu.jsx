import { Link } from "react-scroll";
import { buttonVariants } from "./ui/button";

export default function ComMenu({ category, active }) {
  const isActive = active && "id" in active && active.id === category.id;
  const variant = isActive ? "outlineLunds" : "ghostNav";
  return (
    <div>
      <Link
        to={category.id}
        spy={true}
        smooth={true}
        duration={600}
        offset={-16}
        className={`whitespace-nowrap hover:cursor-pointer w-full ${buttonVariants(
          {
            variant: variant,
          }
        )}`}
      >
        {category.name}
      </Link>
    </div>
  );
}
