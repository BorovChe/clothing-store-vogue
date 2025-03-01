import HeroSection from "@/sections/home/hero";
import JournalSection from "@/sections/common/journal";
import journals from "@/data/temp-journal.json";
import AboutUsHomeSection from "@/sections/home/about-us";
import ShopCategoriesSection from "@/sections/home/shop-categories";
import BannerSection from "@/sections/home/banner";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <BannerSection />
      <ShopCategoriesSection />
      <AboutUsHomeSection />
      <JournalSection sectionTitle="From the Journal" journals={journals} />
    </main>
  );
};

export default HomePage;
