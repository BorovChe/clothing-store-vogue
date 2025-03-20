import Link from "next/link";

const MainPromotional = () => {
  return (
    <Link
      className="block px-4 py-1 sm:py-3 text-center text-[10px]/[1.7] sm:text-sm/[1.7] tracking-[.14em] text-secondary-fff uppercase  bg-secondary-000 "
      href="/collection "
    >
      Stay ahead of the trends! New collection now available — be the first to
      shop!
    </Link>
  );
};

export default MainPromotional;
