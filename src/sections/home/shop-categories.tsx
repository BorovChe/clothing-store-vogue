import MainContainer from "@/components/common/main-container";
import SectionTitle from "@/components/common/section-title";
import ShopCategoriesList from "@/components/home/shop-categories-list";

const ShopCategoriesSection = () => {
  return (
    <section className="pb-[58px]">
      <MainContainer>
        <div className="mb-10">
          <SectionTitle>Shop by</SectionTitle>
        </div>
        <ShopCategoriesList />
      </MainContainer>
    </section>
  );
};

export default ShopCategoriesSection;
