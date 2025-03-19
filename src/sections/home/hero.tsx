import ShopLink from "@/components/common/links/shop-link";
import MainContainer from "@/components/common/main-container";
import HeroBackground from "@/components/home/hero-background";

const HeroSection = () => {
  return (
    <section className="relative pt-16 pb-[220px] xl:py-[220px] max-w-[1440px] mx-auto px-4 md:px-[120px] bg-primary-ffd5c5 -z-0 overflow-hidden">
      <HeroBackground />
      <MainContainer>
        <div className="max-w-[564px]">
          <h1 className="mb-3 text-[46px] md:text-[56px]/[1.2] tracking-tight">
            Summer's Coming...
          </h1>
          <p className="mb-7 max-w-[454px] font-medium leading-[1.5]">
            We started with humble beginnings — selling out of our basement and
            frantically shipping orders as soon as we woke up.
          </p>
          <div className="max-w-[174px]">
            <ShopLink href="/collection">SHOP NOW</ShopLink>
          </div>
        </div>
      </MainContainer>
    </section>
  );
};

export default HeroSection;
