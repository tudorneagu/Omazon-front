import { useContext } from "react";
import { ProductContext } from "../../../contexts/ProductContext";
import type { ICategory } from "../../../@types/index.types";

function SearchCategory() {
  const { categories } = useContext(ProductContext);

  return (
    <select
      defaultValue=""
      className=" bg-main-lower text-s-regular text-brand-grey px-3 rounded-l-lg">
      <option value="" disabled>
        Toutes nos catégories
      </option>

      {categories.map((category: ICategory) => (
        <option key={category.id} value={category.id}>
          {category.title}
        </option>
      ))}
    </select>
  );
}

export default SearchCategory;
