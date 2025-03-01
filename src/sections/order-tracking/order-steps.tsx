import MainContainer from "@/components/commons/main-container";
import OrderStepsList from "@/components/order-tracking/order-steps-list";
import React from "react";

const OrderStepsSection = () => {
  return (
    <section>
      <MainContainer>
        <h2 className="text-center">Easy 3 Steps</h2>
        <OrderStepsList />
      </MainContainer>
    </section>
  );
};

export default OrderStepsSection;
