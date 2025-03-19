import { ReactNode } from "react";
import Link from "next/link";

interface IShopLinkProps {
  href: string;
  children: ReactNode;
}

const ShopLink = ({ href, children }: IShopLinkProps) => {
  return (
    <Link
      href={href}
      className="py-3 flex justify-center w-full text-sm tracking-[.14em] bg-secondary-fff border-2 border-solid border-secondary-000 
      transition-background duration-300 hover:bg-secondary-e6e6e6 focus:bg-secondary-e6e6e6 outline-none"
    >
      {children}
    </Link>
  );
};

export default ShopLink;
