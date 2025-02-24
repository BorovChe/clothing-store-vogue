import ResponsiveContainer from "@/components/commons/container";
import MainNavigationList from "@/components/main-layout/main-navigation/main-navigation-list";
import NewsLetter from "@/components/main-layout/main-navigation/news-letter";

const NavigationSection = () => {
  return (
    <section className="bg-primary-f5f6f8 py-[60px]">
      <ResponsiveContainer>
        <div className="flex">
          <MainNavigationList />
          <NewsLetter />
        </div>
      </ResponsiveContainer>
    </section>
  );
};

export default NavigationSection;
