import Pil from "../../public/pil.svg";
import Stock from "./Stock";

export default function ProductCardsInfo({ product }) {
  if (product.variants.length === 0) {
    return (
      <div className="flex flex-col items-start flex-basis-45 p-4">
        <h3 className="font-extrabold text-gray-800 font-sans text-lg  md:text-3xl lg:text-3xl xl:text-3xl">
          {product.name}
        </h3>
        <p className="text-gray-300">{product.price} kr/kg</p>
        <p className="text-gray-600">Ca. {product.weight} g</p>
        <p className="py-4 text-xl">Fra {product.price} kr,-</p>
        <div className="mt-16 flex flex-row justify-between w-full h-full">
          <Stock stock={product.stock} />

          <img
            src={Pil}
            className="w-6 h-6 my-auto"
            alt="Navigations pil"
          ></img>
        </div>
      </div>
    );
  } else {
    return (
      <div class="flex flex-col items-start p-4 h-full">
        <h3 className="font-extrabold text-gray-800 font-sans text-lg  md:text-3xl lg:text-3xl xl:text-3xl">
          {product.name}
        </h3>
        <p className="text-gray-600 break-words">{product.description}</p>

        <div class="w-full flex flex-row justify-end mt-auto">
          <img
            src={Pil}
            className="w-6 h-6 my-auto"
            alt="Navigations pil"
          ></img>
        </div>
      </div>
    );
  }
}
