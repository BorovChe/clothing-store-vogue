import { ReactNode } from "react";

import ProductDetails from "@/components/product-details/product-details";
import MainContainer from "@/components/common/main-container";
import { IProduct } from "@/interfaces/product.interfaces";

interface IProductDetailsSectionProps {
  children: ReactNode;
  product: IProduct;
}

const ProductDetailsSection = ({
  children,
  product,
}: IProductDetailsSectionProps) => {
  return (
    <section>
      <MainContainer>
        <ProductDetails {...product} />
        {children}
      </MainContainer>
    </section>
  );
};

export default ProductDetailsSection;
