type DebounceFunction<T extends (...args: any[]) => any> = (
  func: T
) => (...args: Parameters<T>) => ReturnType<T>;

interface ProductType {
  id?: number;
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

interface productCategory {
  categories: string;
}




export { DebounceFunction, ProductType, productCategory}