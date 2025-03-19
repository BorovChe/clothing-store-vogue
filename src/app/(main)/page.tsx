import HeroSection from "@/sections/home/hero";
import JournalSection from "@/sections/home/journal";
import journals from "@/data/temp/temp-journal.json";
import AboutUsHomeSection from "@/sections/home/about-us";
import ShopCategoriesSection from "@/sections/home/shop-categories";
import HomeBannerSection from "@/sections/home/home-banner";
import CollectionHomeSection from "@/sections/home/home-collection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CollectionHomeSection />
      <HomeBannerSection />
      <ShopCategoriesSection />
      <AboutUsHomeSection />
      <JournalSection journals={journals} />
    </>
  );
};

export default HomePage;
