import { ProductType } from "@/app/types/product";
import { Document, Schema, model, models } from "mongoose";

export interface TProduct extends Document {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
const ProductSchema:  Schema<TProduct> = new Schema<TProduct>({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: false },
  category: { type: String, required: true },
  image: { type: String },
  rating: { type: Schema.Types.ObjectId },
});

const Product = model<TProduct>("Product", ProductSchema)

export default Product;
