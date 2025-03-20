import Image from "next/image";

const TopBarCurrency = () => {
  return (
    <div className="relative flex items-center justify-between w-20">
      <div className="relative w-10 h-6">
        <Image src="/icons/top-bar/currency.svg" alt="currency" fill />
      </div>
      <p className="text-sm/[1.5] font-medium">USD</p>
    </div>
  );
};

export default TopBarCurrency;
