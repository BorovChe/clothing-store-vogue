import ResponsiveContainer from "@/components/commons/main-container";
import TopBarCurrency from "./top-bar-currency";

const MainTopBar = () => {
  return (
    <div className="bg-primary-f5f6f8 py-3">
      <ResponsiveContainer>
        <div className="flex justify-between ">
          <p>337 Roncesvalles Ave, Toronto</p>
          <TopBarCurrency />
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default MainTopBar;
