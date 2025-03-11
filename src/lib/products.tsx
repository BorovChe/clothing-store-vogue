import products from "@/data/temp-clothing.json";
import { IProduct } from "@/interfaces/product.interfaces";

export async function getAllProducts(): Promise<IProduct[]> {
  const productsList = [...products];

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return productsList;
}

export async function getProductDetails(id: string): Promise<IProduct> {
  const productItem = products.find((item) => item.id === id);

  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return productItem;
}
