import ResponsiveContainer from "@/components/commons/container";
import NavList from "./nav-list";
import HeaderLogo from "./header-logo";
import HeaderSearch from "./header-search";
import HeaderCartLink from "./header-cart-link";
import HeaderAccountLink from "./header-account-link";

const MainHeader = () => {
  return (
    <header>
      <ResponsiveContainer>
        <div className="flex justify-between items-center">
          <nav>
            <NavList />
          </nav>
          <HeaderLogo />
          <HeaderSearch />
          <HeaderCartLink />
          <HeaderAccountLink />
        </div>
      </ResponsiveContainer>
    </header>
  );
};

export default MainHeader;
