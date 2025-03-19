import Link from "next/link";
import SubNavigationList from "./sub-navigation-list";

interface IMainNavigationItemProps {
  title: string;
  mainHref: string;
  navigation: { id: string; href: string; title: string }[];
}

const MainNavigationItem = ({
  title,
  mainHref,
  navigation,
}: IMainNavigationItemProps) => {
  return (
    <li className="min-w-[134px]">
      <Link href={mainHref} className="inline-block mb-6 outline-none">
        <h3 className="tracking-[0.12em] leading-normal font-bold">{title}</h3>
      </Link>
      <SubNavigationList navigation={navigation} />
    </li>
  );
};

export default MainNavigationItem;
