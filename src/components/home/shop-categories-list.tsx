import shopCategories from "@/data/shop-categories.json";
import CategorieItem from "./shop-categorie-item";

const ShopCategoriesList = () => {
  return (
    <ul className="flex flex-wrap justify-center gap-[30px]">
      {shopCategories.map((categorie) => (
        <CategorieItem key={categorie.id} {...categorie} />
      ))}
    </ul>
  );
};

export default ShopCategoriesList;
