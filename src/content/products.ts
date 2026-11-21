import type { ImageAsset } from "./media";

export type Product = {
  id: string;
  category: string;
  title: string | null;
  description: string | null;
  cover: ImageAsset | null;
  price: number | null;
  promotionalPrice: number | null;
  purchaseUrl: string | null;
  badge?: string;
};

export const products: Product[] = [
  { id: "fat-loss", category: "Fat loss", title: null, description: null, cover: null, price: null, promotionalPrice: null, purchaseUrl: null },
  { id: "workout", category: "Training", title: null, description: null, cover: null, price: null, promotionalPrice: null, purchaseUrl: null },
  { id: "nutrition", category: "Nutrition", title: null, description: null, cover: null, price: null, promotionalPrice: null, purchaseUrl: null },
];
