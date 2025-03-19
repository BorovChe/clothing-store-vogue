export interface IPrice {
  current: number;
  old?: number;
  discount?: number;
}

export interface IReview {
  author: string;
  rating: number;
  comment: string;
}

export interface IActions {
  addToBag: boolean;
  addToWishlist: boolean;
}

export interface IVariants {
  [key: string]: Record<string, number> | null;
}

export interface IProduct {
  id: string;
  name: string;
  slug: string;
  price: IPrice;
  currency: string;
  previewImage: string;
  mainImages: string[];
  deskImages: string[];
  variants: IVariants;
  category: string;
  tags: string[];
  rating: number;
  stock: boolean;
  description: string;
  features: string[];
  shipping: string;
  sku: string;
  actions: IActions;
  reviews?: IReview[];
  isNew?: boolean;
  stockWarning?: boolean;
}
