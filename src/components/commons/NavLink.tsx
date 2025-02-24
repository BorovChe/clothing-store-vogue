import { ReactNode } from "react";
import Link from "next/link";

interface INavLinkProps {
  href: string;
  children: ReactNode;
  opacity?: string;
}

const NavLink = ({ href, opacity = "1", children }: INavLinkProps) => {
  return (
    <Link
      className={`text-secondary-000 font-medium leading-[1.5] opacity-[${opacity}]`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
