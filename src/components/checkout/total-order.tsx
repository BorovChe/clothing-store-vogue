import Image from "next/image";
import Link from "next/link";

const TotalOrder = () => {
  return (
    <div>
      <h3>YOUR ORDER</h3>
      <p>Product</p>
      <p>Sub-total</p>
      <ul>
        <li>
          <p>Nike Air VaporMax Flyknit 3</p> <p>$300</p>
        </li>
        <li>
          <p>Nike Air Max 97</p> <p>$300</p>
        </li>
      </ul>
      <div>
        <p>Sub-total</p>
        <p>$600</p>
      </div>
      <div>
        <p>Shipping</p>
        <p>
          <input name="flet" type="radio" />
          <label htmlFor="flet">Flat rate $10</label>
        </p>
        <p>
          <input name="free" type="radio" />
          <label htmlFor="free">Free shipping</label>
        </p>
        <p>
          <input name="local" type="radio" />
          <label htmlFor="local">Local pickup</label>
        </p>
      </div>
      <div>
        <p>Total</p>
        <p>$610</p>
      </div>
      <div>
        <div>
          <p>Shipping</p>
          <p>
            <input name="direct" type="radio" />
            <label htmlFor="direct">Direct bank transfer</label>
          </p>
          <p className="max-w-[350px]">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
          <p>
            <input name="cash" type="radio" />
            <label htmlFor="cash">Cash on delivery</label>
          </p>
          <p>
            <input name="paypal" type="radio" />
            <label htmlFor="paypal">Paypal</label>
            <span></span>
            <Image
              src="/icons/payment-methods/payment-methods.svg"
              alt="Payment Methods"
              width={70}
              height={24}
            />
          </p>
        </div>
      </div>
      <p>
        <input type="checkbox" id="terms" name="terms" />
        <label htmlFor="terms">
          I agree to the website <Link href={"/"}>Terms and Conditions</Link>
        </label>
      </p>
      <button type="submit">PLACE ORDER</button>
    </div>
  );
};

export default TotalOrder;
