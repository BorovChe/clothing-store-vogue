import SubNavigationList from "./sub-navigation-list";

interface IMainNavigationItemProps {
  title: string;
  navigation: { id: string; href: string; title: string }[];
}

const MainNavigationItem = ({
  title,
  navigation,
}: IMainNavigationItemProps) => {
  return (
    <li>
      <h3>{title}</h3>
      <SubNavigationList navigation={navigation} />
    </li>
  );
};

export default MainNavigationItem;
