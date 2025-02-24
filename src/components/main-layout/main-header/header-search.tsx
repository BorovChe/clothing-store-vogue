import Image from "next/image";

const HeaderSearch = () => {
  return (
    <div className="flex">
      <label htmlFor="search-cloth">
        <Image
          src="/icons/header/search.svg"
          alt="Search Logo"
          width={20}
          height={20}
        />
      </label>
      <input
        type="text"
        name="search-cloth"
        placeholder="Search..."
        className="border-rose-700 border-2"
      />
    </div>
  );
};

export default HeaderSearch;
