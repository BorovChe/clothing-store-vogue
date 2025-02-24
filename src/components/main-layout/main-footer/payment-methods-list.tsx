import paymentMethods from "@/data/payment-methods.json";
import PaymentMethodItem from "./payment-method-item";

const PaymentMethodsList = () => {
  return (
    <ul className="flex gap-3">
      {paymentMethods.map(({ id, icon }) => (
        <PaymentMethodItem key={id} icon={icon} />
      ))}
    </ul>
  );
};

export default PaymentMethodsList;
