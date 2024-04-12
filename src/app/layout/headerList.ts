import { IconType } from "react-icons";
import { HiOutlineSearch, HiShoppingCart } from "react-icons/hi";
import { HiHome } from "react-icons/hi2";

export interface headerListType {
    
        name: string,
        routeName?: string
        Icon: IconType,
    
}
  const headerList: headerListType[] = [
    {
        name: "HOME",
        routeName: "/",
        Icon:  HiHome
    },
    {
        name: 'PRODUCTS',
        routeName: "Products",
        Icon: HiOutlineSearch
    },
    {
        name: "CART",
        routeName: "cart",
        Icon: HiShoppingCart
    }

]

export default headerList