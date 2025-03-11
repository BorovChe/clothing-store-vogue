const CheckoutForm = () => {
  return (
    <form action="">
      <p>
        <label htmlFor="first-name">First name*</label>
        <input name="first-name" />
      </p>
      <p>
        <label htmlFor="last-name">Last name*</label>
        <input name="last-name" />
      </p>
      <p>
        <label htmlFor="company-name">Company name (optional)</label>
        <input name="last-name" />
      </p>
      <p>
        <label htmlFor="country">Country / Region*</label>
        <select name="country" id="country">
          <option value="new-york">New York</option>
          <option value="miami">Miami</option>
        </select>
      </p>
      <p>
        <label htmlFor="street">Street address*</label>
        <input name="street" />
      </p>
      <p>
        <input
          name="apartment"
          placeholder="Apartment, suite, unit, etc. (optional)"
        />
      </p>
      <p>
        <label htmlFor="street">Street address*</label>
        <input name="street" />
      </p>
      <p>
        <label htmlFor="city">Town / City*</label>
        <input name="city" />
      </p>
      <p>
        <label htmlFor="postcode*">Postcode*</label>
        <input name="postcode*" />
      </p>
      <p>
        <label htmlFor="phone">Phone*</label>
        <input name="phone" />
      </p>
      <p>
        <label htmlFor="email">Email address*</label>
        <input name="email" />
      </p>
      <p>
        <input type="checkbox" id="different-adress" name="different-adress" />
        <label htmlFor="different-adress">Ship to a different address?</label>
      </p>
      <p>
        <label htmlFor="notes">Order notes (optional)</label>
        <textarea name="notes" />
      </p>
    </form>
  );
};

export default CheckoutForm;
