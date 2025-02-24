import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Link href="/" className="flex">
      <Image
        src="/icons/header/header-logo.svg"
        alt="Header Logo"
        width={60}
        height={30}
      />
      <p className="uppercase">Vogue</p>
    </Link>
  );
};

export default HeaderLogo;
