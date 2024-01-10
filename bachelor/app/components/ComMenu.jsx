import { Link } from "react-scroll";
import { buttonVariants } from "./ui/button";
import formatCategoryName from "./formatCategoryName";

export default function ComMenu({ category, active }) {
  const formattedCategory = formatCategoryName(category);

  return (
    <div>
      <Link
        to={category}
        spy={true}
        smooth={true}
        duration={600}
        offset={-16}
        className={`whitespace-nowrap hover:cursor-pointer w-full ${buttonVariants(
          {
            variant: category === active ? "outlineLunds" : "ghostNav",
          }
        )}`}
      >
        {formattedCategory}
      </Link>
    </div>
  );
}
