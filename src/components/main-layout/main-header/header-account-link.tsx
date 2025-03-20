import Image from "next/image";
import Link from "next/link";

const HeaderAccountLink = () => {
  return (
    <Link
      href="/account"
      className="flex items-center p-2 lg:p-4 border-x border-secondary-eee"
    >
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
