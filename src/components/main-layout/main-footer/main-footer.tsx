import MainContainer from "@/components/commons/main-container";
import PaymentMethodsList from "./payment-methods-list";
import FooterTerm from "./term";

const MainFooter = () => {
  return (
    <footer className="py-4">
      <MainContainer>
        <div className="flex justify-between">
          <FooterTerm />
          <PaymentMethodsList />
        </div>
      </MainContainer>
    </footer>
  );
};

export default MainFooter;
