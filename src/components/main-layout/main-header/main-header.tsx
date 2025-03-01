import MainContainer from "@/components/commons/main-container";
import NavList from "./nav-list";
import HeaderLogo from "./header-logo";
import HeaderSearch from "./header-search";
import HeaderCartLink from "./header-cart-link";
import HeaderAccountLink from "./header-account-link";

const MainHeader = () => {
  return (
    <header>
      <MainContainer>
        <div className="flex justify-between items-center">
          <nav>
            <NavList />
          </nav>
          <HeaderLogo />
          <HeaderSearch />
          <HeaderCartLink />
          <HeaderAccountLink />
        </div>
      </MainContainer>
    </header>
  );
};

export default MainHeader;
