import Image from "next/image";

const TopBarCurrency = () => {
  return (
    <div className="flex">
      <Image
        src="/icons/top-bar/currency.svg"
        alt="currency"
        width={40}
        height={24}
      />
      <p>USD</p>
    </div>
  );
};

export default TopBarCurrency;
