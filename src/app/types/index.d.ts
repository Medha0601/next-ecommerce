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


// USER CRUD
interface createUserType{
    clerkId: string,
    email: string,
    username: string,
    firstName: string,
    lastName: string;
    cartItem?: number | undefined 
}

interface UpdateUserType {
    firstName: string,
    lastName: string,
    username: string,
}



export { DebounceFunction, ProductType, productCategory, createUserType, UpdateUserType}