import headerNavItems from "@/data/header-nav-items.json";
import Link from "next/link";

const HeaderNavList = () => {
  return (
    <ul className="flex gap-11">
      {headerNavItems.map(({ id, href, title }) => (
        <li key={id}>
          <Link className="block py-6 font-medium leading-[1.5]" href={href}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderNavList;
