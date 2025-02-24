import NavLink from "@/components/commons/NavLink";

interface ISubNavigationItemProps {
  id: string;
  href: string;
  title: string;
}

const SubNavigationItem = ({ href, title }: ISubNavigationItemProps) => {
  return (
    <li>
      <NavLink href={href} opacity="0.8">
        {title}
      </NavLink>
    </li>
  );
};

export default SubNavigationItem;
