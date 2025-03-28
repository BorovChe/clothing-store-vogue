import MainContainer from "@/components/common/main-container";
import MainTitle from "@/components/common/main-title";
import OrderTrackingBg from "@/components/order-tracking/order-tracking-bg";
import OrderStepsForm from "@/components/order-tracking/order-tracking-form";

const OrderTrackingSection = () => {
  return (
    <section className="relative pt-20 pb-[140px] overflow-hidden">
      <MainContainer>
        <div className="mb-[156px]">
          <MainTitle>Order Tracking</MainTitle>
        </div>
        <div className="mx-auto md:mx-0 flex flex-col max-w-[470px]">
          <p className="font-medium leading-[1.5] mb-10">
            To track your order please enter your Order ID in the box below and
            press the {`"Track"`} button. This was given to you on your receipt
            and in the confirmation email you should have received.
          </p>
          <OrderStepsForm />
        </div>
        <OrderTrackingBg />
      </MainContainer>
    </section>
  );
};

export default OrderTrackingSection;
