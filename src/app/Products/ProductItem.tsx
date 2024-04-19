import Image from "next/image";
import { ProductType } from "../types/index";

export default function ProductItem({ product }: { product: ProductType }) {
  const truncateDescription = (text: string, maxWords: number) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    } else return text;
  };
  return (
    <div className="mb-4 md:w-1/4 sm:w-full px-4">
      <img src={product.image} alt={product.title} width={100} height={100} />
      <div>
        <h2 className="text-white text-xl font-bold">{product.title}</h2>
        <p className="text-gray-400">
          {truncateDescription(product.description, 10)}
        </p>
        <p className="text-gray-400">Price: ${product.price}</p>
        <p className="text-gray-400">Category: {product.category}</p>
      </div>
    </div>
  );
}
