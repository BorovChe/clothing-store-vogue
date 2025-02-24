import MainNavigationItem from "./main-navigation-item";
import mainNavigation from "@/data/main-navigation.json";

const MainNavigationList = () => {
  return (
    <ul className="flex gap-40 mr-auto">
      {mainNavigation.map((item) => (
        <MainNavigationItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default MainNavigationList;
