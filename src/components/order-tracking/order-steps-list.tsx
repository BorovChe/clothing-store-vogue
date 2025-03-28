import orderSteps from "@/data/order-steps.json";
import OrderStepsItem from "./order-steps-item";

const OrderStepsList = () => {
  return (
    <ul className="flex flex-col justify-center items-center md:flex-row gap-10 md:gap-[100px]">
      {orderSteps.map((step) => (
        <OrderStepsItem key={step.id} {...step} />
      ))}
    </ul>
  );
};

export default OrderStepsList;
