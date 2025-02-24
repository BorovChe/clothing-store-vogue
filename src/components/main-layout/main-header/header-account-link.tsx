import Image from "next/image";
import Link from "next/link";

const HeaderAccountLink = () => {
  return (
    <Link href="/account">
      <Image
        src="/icons/header/account.svg"
        alt="Account Icon"
        width={16}
        height={18}
      />
    </Link>
  );
};

export default HeaderAccountLink;
