import { IconType } from "react-icons";
import { HiOutlineSearch, HiShoppingCart } from "react-icons/hi";
import { HiHome } from "react-icons/hi2";

export interface headerListType {
    
        name: string,
        Icon: IconType
    
}
  const headerList: headerListType[] = [
    {
        name: "HOME",
        Icon:  HiHome
    },
    {
        name: 'SEARCH',
        Icon: HiOutlineSearch
    },
    {
        name: "Cart",
        Icon: HiShoppingCart
    }

]

export default headerList