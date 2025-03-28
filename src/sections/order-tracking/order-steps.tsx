import MainContainer from "@/components/common/main-container";
import SectionTitle from "@/components/common/section-title";
import OrderStepsList from "@/components/order-tracking/order-steps-list";
import React from "react";

const OrderStepsSection = () => {
  return (
    <section className="relative py-20 border-t border-secondary-eee">
      <MainContainer>
        <div className="mb-10">
          <SectionTitle>Easy 3 Steps</SectionTitle>
        </div>
        <div className="hidden md:block  absolute left-1/2 top-[226px] -translate-x-1/2 max-w-[660px] w-full h-[1px] px-20 -z-10 border-dashed border-b-[1px] opacity-30 border-[#4d66ff]" />
        <OrderStepsList />
      </MainContainer>
    </section>
  );
};

export default OrderStepsSection;
