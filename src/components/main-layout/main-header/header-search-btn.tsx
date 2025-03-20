import Image from "next/image";

const HeaderSearchBtn = () => {
  return (
    <div>
      <Image
        src="/icons/header/search.svg"
        width={20}
        height={20}
        alt="Open Searh"
      />
    </div>
  );
};

export default HeaderSearchBtn;
