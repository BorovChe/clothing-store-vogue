import MainBtn from "../common/main-btn";

const OrderTrackingForm = () => {
  return (
    <form>
      <p className="flex flex-col gap-2 mb-4">
        <label htmlFor="order-id" className="font-medium">
          Order ID
        </label>
        <input
          type="text"
          name="order-id"
          placeholder="Found in your order confirmation email"
          className="py-2 px-4 border-[2px] border-secondary-eee font-medium text-sm outline-none leading-normal 
            transition-border duration-300 hover:border-secondary-999 focus:border-secondary-999"
        />
      </p>
      <p className="flex flex-col gap-2 mb-6">
        <label htmlFor="email" className="font-medium">
          Billing Email
        </label>
        <input
          type="text"
          placeholder="Email you used during checkout"
          name="email"
          className="py-2 px-4 border-[2px] border-secondary-eee font-medium text-sm outline-none leading-normal 
              transition-border duration-300 hover:border-secondary-999 focus:border-secondary-999"
        />
      </p>
      <div className="max-w-[226px]">
        <MainBtn>TRACK MY ORDER</MainBtn>
      </div>
    </form>
  );
};

export default OrderTrackingForm;
