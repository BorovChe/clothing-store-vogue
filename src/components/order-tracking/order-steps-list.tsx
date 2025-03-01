import orderSteps from "@/data/order-steps.json";
import OrderStepsItem from "./order-steps-item";

const OrderStepsList = () => {
  return (
    <ul className="flex">
      {orderSteps.map((step) => (
        <OrderStepsItem key={step.id} {...step} />
      ))}
    </ul>
  );
};

export default OrderStepsList;
