import MainContainer from "@/components/common/main-container";
import TopBarCurrency from "./top-bar-currency";

const MainTopBar = () => {
  return (
    <div className="bg-primary-f5f6f8 py-3">
      <MainContainer>
        <div className="flex justify-between ">
          <p className="text-secondary-666 font-medium text-sm sm:text-base leading-[1.5]">
            337 Roncesvalles Ave, Toronto
          </p>
          <TopBarCurrency />
        </div>
      </MainContainer>
    </div>
  );
};

export default MainTopBar;
