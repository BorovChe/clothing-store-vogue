import Image from "next/image";

const HeaderSearch = () => {
  return (
    <div className="hidden relative lg:flex border-l border-secondary-eee">
      <label htmlFor="search-cloth">
        <Image
          src="/icons/header/search.svg"
          alt="Search Logo"
          width={20}
          height={20}
          className="absolute top-1/2 left-6 -translate-y-1/2"
        />
      </label>
      <input
        type="text"
        name="search-cloth"
        placeholder="Search..."
        className="py-6 pl-[60px] pr-1 placeholder:font-medium placeholder:leading-[1.5] outline-none"
      />
    </div>
  );
};

export default HeaderSearch;
