const OrderTrackingForm = () => {
  return (
    <form>
      <p>
        <label htmlFor="order-id">Order ID</label>
        <input
          type="text"
          name="order-id"
          placeholder="Found in your order confirmation email"
          className="border-rose-700 border-2"
        />
      </p>
      <p>
        <label htmlFor="email">Billing Email</label>
        <input
          type="text"
          placeholder="Email you used during checkout"
          name="email"
          className="border-rose-700 border-2"
        />
      </p>
    </form>
  );
};

export default OrderTrackingForm;
