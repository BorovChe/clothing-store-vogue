import NavItem from "./nav-item";
import headerNavItems from "@/data/header-nav-items.json";

const NavList = () => {
  return (
    <ul className="flex">
      {headerNavItems.map((item) => (
        <NavItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default NavList;
