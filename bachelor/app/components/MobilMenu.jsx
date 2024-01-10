import { Link } from "react-scroll";
import { buttonVariants } from "./ui/button";
import formatCategoryName from "./formatCategoryName";

export default function MobilMenu({ category, active }) {
  const formattedCategory = formatCategoryName(category);

  return (
    <Link
      to={category}
      spy={true}
      smooth={true}
      duration={600}
      offset={-130}
      className={`whitespace-nowrap hover:cursor-pointer m-2 justify-center border w-32 p-2 ${buttonVariants(
        {
          variant: category === active ? "outlineLunds" : "ghostNav",
        }
      )}`}
    >
      {formattedCategory}
    </Link>
  );
}
