import ImagesBlock from "./images-block";
import ProductConfigurationForm from "./product-configuration-form";
import { IProduct as IProductDetailsProps } from "@/interfaces/product.interfaces";

const ProductDetails = async ({
  // id,
  name,
  price,
  // currency,
  // previewImage,
  mainImages,
  deskImages,
  // variants,
  category,
  tags,
  // rating,
  // stock,
  // description,
  // features,
  // shipping,
  sku,
  // actions,
  reviews,
}: // isNew,
// stockWarning,
// children,
IProductDetailsProps) => {
  const tagsList = tags.length > 0 ? tags.join(", ") : "No tags available";

  return (
    <article className="flex justify-between">
      <ImagesBlock mainImages={mainImages} deskImages={deskImages} />
      <div>
        <p>{name}</p>
        <div>
          <p>****</p>
          <p>{reviews?.length} Reviews</p>
        </div>
        <p>{price.current}</p>
        <ProductConfigurationForm />
        <p>SKU: {sku}</p>
        <p>CATEGORY {category}</p>
        <div>
          <p>TAGS: {tagsList}</p>
        </div>
      </div>
    </article>
  );
};

export default ProductDetails;
