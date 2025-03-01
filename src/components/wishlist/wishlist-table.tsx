import Image from "next/image";

const WishlistTable = () => {
  return (
    <table className="mx-auto">
      <thead>
        <tr>
          <th scope="col">PRODUCT</th>
          <th scope="col">PRICE</th>
          <th scope="col">STATUS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            <button></button>
          </th>
          <td>
            <Image
              src="/temp/temp-wish-list/temp-wish-list.png"
              alt="temp"
              width={100}
              height={132}
            />
          </td>
          <td>
            <p>Funny Shorts with Mesh Lining Swimwear Bathing Suits</p>
          </td>
          <td>
            <p>$300</p>
          </td>
          <td>
            <p>In Stocks</p>
          </td>
          <td>
            <p>
              <button>ADD TO CART</button>
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default WishlistTable;
