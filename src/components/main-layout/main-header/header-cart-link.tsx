import Image from "next/image";
import Link from "next/link";

const HeaderCartLink = () => {
  return (
    <Link
      href="/cart"
      className="relative flex items-center border-l p-2 py-[16px] lg:p-4"
    >
      <div className="relative w-4 h-[20px]">
        <Image src="/icons/header/cart.svg" alt="Cart Icon" fill />
      </div>
      <div className="absolute top-[calc(50%+2px)] lg:top-1/2 right-[4px] lg:right-[12px] w-3 h-3 flex justify-center items-center rounded-full bg-secondary-fff">
        <div className="w-[9px] h-[9px] rounded-full bg-other-error" />
      </div>
    </Link>
  );
};

export default HeaderCartLink;
