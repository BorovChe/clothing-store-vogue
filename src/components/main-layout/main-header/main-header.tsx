import MainContainer from "@/components/common/main-container";
import HeaderNavList from "./header-nav-list";
import HeaderLogo from "./header-logo";
import HeaderSearch from "./header-search";
import HeaderCartLink from "./header-cart-link";
import HeaderAccountLink from "./header-account-link";
import HeaderBurgerMenu from "./header-burger-menu";
import HeaderSearchBtn from "./header-search-btn";

const MainHeader = () => {
  return (
    <header>
      <MainContainer>
        <div className="h-[50px] lg:h-[72px] relative flex justify-between items-center">
          <div className="flex items-center gap-3 lg:hidden">
            <HeaderBurgerMenu />
            <HeaderSearchBtn />
          </div>
          <nav className="hidden lg:block">
            <HeaderNavList />
          </nav>
          <HeaderLogo />
          <div className="flex">
            <HeaderSearch />
            <HeaderCartLink />
            <HeaderAccountLink />
          </div>
        </div>
      </MainContainer>
    </header>
  );
};

export default MainHeader;
