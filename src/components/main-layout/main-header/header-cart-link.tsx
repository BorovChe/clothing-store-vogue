import Image from "next/image";
import Link from "next/link";

const HeaderCartLink = () => {
  return (
    <Link href="/cart">
      <Image
        src="/icons/header/cart.svg"
        alt="Cart Icon"
        width={16}
        height={20}
      />
      <div className="w-3 h-3 flex justify-center items-center rounded-full bg-secondary-fff">
        <div className="w-[9px] h-[9px] rounded-full bg-other-error" />
      </div>
    </Link>
  );
};

export default HeaderCartLink;
