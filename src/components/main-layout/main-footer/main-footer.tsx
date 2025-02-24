import ResponsiveContainer from "@/components/commons/container";
import PaymentMethodsList from "./payment-methods-list";
import FooterTerm from "./term";

const MainFooter = () => {
  return (
    <footer className="py-4">
      <ResponsiveContainer>
        <div className="flex justify-between">
          <FooterTerm />
          <PaymentMethodsList />
        </div>
      </ResponsiveContainer>
    </footer>
  );
};

export default MainFooter;
