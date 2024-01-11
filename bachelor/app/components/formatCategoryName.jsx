export default function formatCategoryName(category) {
  if (category === "boffersteaks") {
    return "Bøffer/Steaks";
  }

  if (category === "spegepolse") {
    return "Spegepølse";
  }

  if (category === "helestege") {
    return "Hele stege";
  }

  if (category === "is") {
    return "Is";
  }

  if (category === "hakket") {
    return "Hakket oksekød";
  }

  const formattedCategory = category.name;

  return formattedCategory;
}
