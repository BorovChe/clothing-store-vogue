import HeroSection from "@/sections/home/hero";
import JournalSection from "@/sections/common/journal";
import journals from "@/data/temp-journal.json";
import AboutUsHomeSection from "@/sections/home/about-us";
import ShopCategoriesSection from "@/sections/home/shop-categories";
import HomeBannerSection from "@/sections/home/home-banner";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HomeBannerSection />
      <ShopCategoriesSection />
      <AboutUsHomeSection />
      <JournalSection sectionTitle="From the Journal" journals={journals} />
    </>
  );
};

export default HomePage;
