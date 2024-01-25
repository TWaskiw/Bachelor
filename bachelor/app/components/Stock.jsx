export default function Stock({ stock }) {
  let stockStatus = "";
  let stockColor = "";
  if (stock === 0) {
    stockStatus = "Ikke på lager";
    stockColor = "rounded-full  bg-red-400 w-2.5 h-2.5";
  } else if (stock >= 1 && stock <= 4) {
    stockStatus = "Få på lager";
    stockColor = "rounded-full  bg-yellow-400 w-2.5 h-2.5";
  } else {
    stockStatus = "På lager";
    stockColor = "rounded-full bg-green-400 w-2.5 h-2.5";
  }
  return (
    <div className="flex  items-center">
      <span className={stockColor}></span>
      <h1 className="ml-1 text-xl">{stockStatus}</h1>
    </div>
  );
}
