import MainContainer from "@/components/common/main-container";
import MainNavigationList from "@/components/main-layout/main-navigation/main-navigation-list";
import NewsLetter from "@/components/main-layout/main-navigation/news-letter";

const NavigationSection = () => {
  return (
    <section className="bg-primary-f5f6f8 py-[60px]">
      <MainContainer>
        <div className="flex flex-col lg:flex-row">
          <MainNavigationList />
          <NewsLetter />
        </div>
      </MainContainer>
    </section>
  );
};

export default NavigationSection;
