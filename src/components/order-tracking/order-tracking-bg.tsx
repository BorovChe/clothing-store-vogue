const OrderTrackingBg = () => {
  return (
    <>
      <div className="absolute top-0 right-[calc(50%-720px)] w-[684px] h-[684px] rounded-full bg-[#c5ccfa46] bg-order-tracking-gradient bg-no-repeat" />
      <div className="absolute top-0 right-[calc(50%-720px)] w-[370px] h-[450px] bg-[url('/images/order-tracking/order-tracking-bg.png')] bg-no-repeat" />
    </>
  );
};

export default OrderTrackingBg;
