import Link from "next/link";

interface ISubNavigationListProps {
  navigation: { id: string; href: string; title: string }[];
}

const SubNavigationList = ({ navigation }: ISubNavigationListProps) => {
  return (
    <ul className="flex flex-col gap-3">
      {navigation.map(({ id, href, title }) => (
        <li key={id}>
          <Link
            className="text-secondary-000 font-medium leading-normal opacity-80 transition-opacity duration-200 hover:opacity-100"
            href={href}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SubNavigationList;
