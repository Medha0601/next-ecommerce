import { SignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import headerList from "./headerList";
import HeaderItem from "./headerItem";
import Image from "next/image";
import logo from "@/assets/Images/logo.jpg";

export default function Header() {
  return (
    <div className="flex flex-row justify-between text-black items-center px-4 py-2 md:py-4">
      <div className="flex items-center">
        <div className=" flex gap-5 mr-64">
          <Image src={logo} alt="logo" className="h-20 w-auto" />
        </div>
        <div className="flex items-center gap-8">
        {headerList.map((headerData) => (
          
          <Link href={`${headerData.routeName}`}>
          <HeaderItem
          key={headerData.name}
          name={headerData.name}
          Icon={headerData.Icon}
          />
        </Link>
        ))}
        </div>
      </div>
      <div className="flex items-center justify-end mt-4 md:mt-0">
        <UserButton />
        
      </div>
    </div>
  );
}
