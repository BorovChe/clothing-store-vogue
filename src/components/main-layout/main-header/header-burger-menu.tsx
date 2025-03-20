import Image from "next/image";

const HeaderBurgerMenu = () => {
  return (
    <div>
      <Image
        src="/icons/header/menu.svg"
        alt="Burger Menu"
        width={24}
        height={24}
        className="filter invert"
      />
    </div>
  );
};

export default HeaderBurgerMenu;
