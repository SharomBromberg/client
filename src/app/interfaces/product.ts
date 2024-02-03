import { Category } from "./categories";

export interface Product {
  _id?: string;
  name: string;
  description: string;
  price: number;
  category: Category;  // Utilizando la interfaz Category directamente
  imagesURL: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}