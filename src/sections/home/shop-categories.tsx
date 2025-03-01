import MainContainer from "@/components/commons/main-container";
import SectionTitle from "@/components/commons/section-title";
import ShopCategoriesList from "@/components/home/shop-categories-list";

const ShopCategoriesSection = () => {
  return (
    <section>
      <MainContainer>
        <SectionTitle>Shop by</SectionTitle>
        <ShopCategoriesList />
      </MainContainer>
    </section>
  );
};

export default ShopCategoriesSection;
