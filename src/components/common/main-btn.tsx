import Link from "next/link";
import { ReactNode } from "react";

interface IMainBtn {
  onClick?: () => void;
  link?: string;
  children: ReactNode;
}

const MainBtn = ({ onClick, link, children }: IMainBtn) => {
  if (link)
    return (
      <Link
        href={link}
        className="flex justify-center w-full py-3 text-sm/[1.5] text-secondary-fff tracking-[.14em] bg-secondary-000 transition-transform duration-300 hover:scale-105"
      >
        {children}
      </Link>
    );

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full py-2 text-secondary-fff text-sm leading-normal tracking-[.14em] bg-secondary-000 transition-transform duration-300 hover:scale-105"
    >
      {children}
    </button>
  );
};

export default MainBtn;
