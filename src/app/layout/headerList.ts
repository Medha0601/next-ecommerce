import { IconType } from "react-icons";
import { HiShoppingCart } from "react-icons/hi";
import { HiHome } from "react-icons/hi2";
import { FaBagShopping } from "react-icons/fa6";
export interface headerListType {
  name: string;
  routeName?: string;
  Icon: IconType;
}
const headerList: headerListType[] = [
  {
    name: "HOME",
    routeName: "/",
    Icon: HiHome,
  },
  {
    name: "PRODUCTS",
    routeName: "Products",
    Icon: FaBagShopping,
  },
  {
    name: "CART",
    routeName: "cart",
    Icon: HiShoppingCart,
  },
];

export default headerList;
