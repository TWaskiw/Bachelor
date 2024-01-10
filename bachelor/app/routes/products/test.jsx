import { useParams } from "@remix-run/react";

export default function EditProduct() {
  const { productId } = useParams();
  console.log(productId);

  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}
