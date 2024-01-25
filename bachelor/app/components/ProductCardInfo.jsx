import Stock from "./Stock";

export default function ProductCardInfo({ product }) {
  if (product?.variants.length > 0) {
    return (
      <div className="flex flex-col flex-wrap my-10">
        {product.variants.map((variant) => (
          <div key={variant.id} className="border-t border-gray-300 pt-5 mt-5">
            <div className="flex w-full flex-row justify-between">
              <p className="text-xl">{product.name}</p>
              <p className="text-xl">{variant.price} kr,-</p>
            </div>
            <div className="w-full flex justify-start mt-1">
              <Stock stock={variant.stock} />
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="info my-10">
        <div className="info flex flex-row text-start flex-wrap">
          <div className="flex-none w-1/2 mt-auto">
            <p className="text-base text-gray-500">Kilopris</p>
            <p className="text-xl">{product.price} kr/kg</p>
          </div>
          <div className="flex-none w-1/2 mt-auto">
            <p className="text-base text-gray-500">Generel Vægt</p>
            <p className="text-xl">Ca. {product.weight} g</p>
          </div>

          <div className="flex-none w-1/2 mt-auto ">
            <p className="text-base text-gray-500 mt-6">Fra</p>
            <p className="text-xl">
              {(product?.weight / 1000) * product.price} kr,-
            </p>
          </div>
          <div className="flex-none w-1/2 mt-auto">
            <Stock stock={product.stock} />
          </div>
        </div>
      </div>
    );
  }
}
