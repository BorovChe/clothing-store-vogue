import MainNavigationItem from "./main-navigation-item";
import mainNavigation from "@/data/main-navigation.json";

const MainNavigationList = () => {
  return (
    <ul className="flex flex-wrap justify-between mb-8 gap-8 lg:gap-40 lg:mr-auto  lg:mb-0">
      {mainNavigation.map((item) => (
        <MainNavigationItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default MainNavigationList;
