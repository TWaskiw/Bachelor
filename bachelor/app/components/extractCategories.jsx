export default function extractCategories({ products }) {
  const categories = new Set();
  products.forEach((product) => {
    categories.add(product.category);
  });
  return Array.from(categories);
}
