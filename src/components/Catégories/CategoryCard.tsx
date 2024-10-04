import { Link, useNavigate } from "react-router-dom";
import type { ICategory } from "../../@types/index.types";

interface CategoryProps {
  category: ICategory;
}

function CategoryCard({ category }: CategoryProps) {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(`/category/${category.slug}/products`);
  };

  return (
    <Link
      to={`/category/${category.slug}/products`}
      className="w-[212px] h-[264px] flex flex-col items-center justify-between"
      onClick={handleCategoryClick}>
      <div className="bg-black/5 w-[212px] h-[212px] flex justify-center items-center rounded-full">
        <img
          className="h-[120px] -z-10"
          src={`./assets/categories/${category.image}`}
          alt={category.title}
        />
      </div>
      <h2 className="heading-s text-main-highest mb-6">{category.title}</h2>
    </Link>
  );
}

export default CategoryCard;
