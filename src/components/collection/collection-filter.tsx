const CollectionFilter = () => {
  return (
    <form>
      <div>
        <p>CATEGORIES</p>
        <p>
          <input type="radio" name="jeans" />
          <label htmlFor="jeans">Jeans</label>
        </p>
        <p>
          <input type="radio" name="shirts" />
          <label htmlFor="shirts">Shirts</label>
        </p>
        <p>
          <input type="radio" name="footwear" />
          <label htmlFor="footwear">Footwear</label>
        </p>
        <p>
          <input type="radio" name="tops" />
          <label htmlFor="tops">Tops</label>
        </p>
      </div>
      <div>
        <p>BRAND</p>
        <p>
          <input type="radio" name="nike" />
          <label htmlFor="nike">Nike</label>
        </p>
        <p>
          <input type="radio" name="adidas" />
          <label htmlFor="adidas">Adidas</label>
        </p>
        <p>
          <input type="radio" name="gucci" />
          <label htmlFor="gucci">Gucci</label>
        </p>
        <p>
          <input type="radio" name="levi’s" />
          <label htmlFor="levi’s">Levi’s</label>
        </p>
      </div>
      <div>
        <p>COLOR</p>
        <p>
          <input type="radio" name="beige" />
          <label htmlFor="beige">Beige</label>
        </p>
        <p>
          <input type="radio" name="black" />
          <label htmlFor="black">Black</label>
        </p>
        <p>
          <input type="radio" name="blue" />
          <label htmlFor="blue">Blue</label>
        </p>
        <p>
          <input type="radio" name="brown" />
          <label htmlFor="brown">Brown</label>
        </p>
      </div>
      <div>
        <p>SIZE</p>
        <p>
          <input type="radio" name="size-s" />
          <label htmlFor="size-s">S</label>
        </p>
        <p>
          <input type="radio" name="size-m" />
          <label htmlFor="size-m">M</label>
        </p>
        <p>
          <input type="radio" name="size-l" />
          <label htmlFor="size-l">L</label>
        </p>
        <p>
          <input type="radio" name="size-xl" />
          <label htmlFor="size-xl">XL</label>
        </p>
        <p>
          <input type="radio" name="size-2xl" />
          <label htmlFor="size-2xl">2XL</label>
        </p>
        <p>
          <input type="radio" name="size-uk6" />
          <label htmlFor="size-uk6">UK6</label>
        </p>
        <p>
          <input type="radio" name="size-uk7" />
          <label htmlFor="size-uk7">UK7</label>
        </p>
      </div>
      <div>
        <p>PRICE</p>
        <p>
          <input type="radio" name="10-100" />
          <label htmlFor="10-100">$10 - $100</label>
        </p>
        <p>
          <input type="radio" name="100-200" />
          <label htmlFor="100-200">$100 - $200</label>
        </p>
        <p>
          <input type="radio" name="200-300" />
          <label htmlFor="200-300">$200 - $300</label>
        </p>
        <p>
          <input type="radio" name="300-400" />
          <label htmlFor="300-400">$300 - $400</label>
        </p>
      </div>
      <button type="reset">CLEAR FILTER (3)</button>
    </form>
  );
};

export default CollectionFilter;
