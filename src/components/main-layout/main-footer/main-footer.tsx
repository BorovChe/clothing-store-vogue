import MainContainer from "@/components/common/main-container";
import PaymentMethodsList from "./payment-methods-list";
import FooterTerm from "./term";

const MainFooter = () => {
  return (
    <footer className="py-4">
      <MainContainer>
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-center">
          <FooterTerm />
          <PaymentMethodsList />
        </div>
      </MainContainer>
    </footer>
  );
};

export default MainFooter;
