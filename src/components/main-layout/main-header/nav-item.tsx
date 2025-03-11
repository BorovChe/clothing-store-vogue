import NavLink from "@/components/common/NavLink";

interface INavItemProps {
  id: string;
  href: string;
  title: string;
}

const NavItem = ({ href, title }: INavItemProps) => {
  return (
    <li>
      <NavLink href={href}>{title}</NavLink>
    </li>
  );
};

export default NavItem;
