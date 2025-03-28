const OrderTrackingBg = () => {
  return (
    <>
      <div className="hidden md:block absolute top-[202px] right-[calc(50%-896px)] w-[734px] h-[734px] rounded-full bg-[#c5ccfa46] bg-order-tracking-gradient bg-no-repeat" />
      <div className="hidden md:block absolute bottom-20 right-[calc(50%-456px)] w-[370px] h-[450px] bg-[url('/images/order-tracking/order-tracking-bg.png')] bg-[left_-20px_top_-12px]  bg-no-repeat" />
    </>
  );
};

export default OrderTrackingBg;
