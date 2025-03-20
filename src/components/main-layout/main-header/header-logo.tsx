import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Link
      href="/"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2"
    >
      <div className="relative w-[60px] h-[30px]">
        <Image src="/icons/header/header-logo.svg" alt="Header Logo" fill />
      </div>
      <p className="font-bold text-[24px]/[1.2] lg:text-[30px]/[1.2]">Vogue</p>
    </Link>
  );
};

export default HeaderLogo;
