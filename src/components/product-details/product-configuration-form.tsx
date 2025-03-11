import ProductQuantity from "./product-quantity";

const ProductConfigurationForm = () => {
  return (
    <form>
      <h3>COLOR</h3>
      <p>
        <input type="radio" name="color" />
        <label htmlFor="color">test</label>
      </p>
      <p>
        <input type="radio" name="color" />
        <label htmlFor="color">test</label>
      </p>
      <p>
        <input type="radio" name="color" />
        <label htmlFor="color">test</label>
      </p>
      <p>
        <input type="radio" name="color" />
        <label htmlFor="color">test</label>
      </p>
      <h3>SIZE</h3>
      <p>
        <input type="radio" name="color" />
        <label htmlFor="color">test</label>
      </p>
      <p>
        <input type="radio" name="color" />
        <label htmlFor="color">test</label>
      </p>
      <p>
        <input type="radio" name="color" />
        <label htmlFor="color">test</label>
      </p>
      <p>
        <input type="radio" name="color" />
        <label htmlFor="color">test</label>
      </p>
      <ProductQuantity />
      <button>ADD TO BAG</button>
      <button>BUY NOW</button>
      <p> ADD TO WISHLIST</p>
    </form>
  );
};

export default ProductConfigurationForm;
