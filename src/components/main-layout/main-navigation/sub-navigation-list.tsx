import SubNavigationItem from "./sub-navigation-item";

interface ISubNavigationListProps {
  navigation: { id: string; href: string; title: string }[];
}

const SubNavigationList = ({ navigation }: ISubNavigationListProps) => {
  return (
    <ul>
      {navigation.map((item) => (
        <SubNavigationItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default SubNavigationList;
