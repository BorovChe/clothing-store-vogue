import NeedHelpSection from "@/sections/order-tracking/need-help";
import OrderStepsSection from "@/sections/order-tracking/order-steps";
import OrderTrackingSection from "@/sections/order-tracking/order-tracking";

const TrackYourOrderPage = () => {
  return (
    <main>
      <OrderTrackingSection />
      <OrderStepsSection />
      <NeedHelpSection />
    </main>
  );
};

export default TrackYourOrderPage;
