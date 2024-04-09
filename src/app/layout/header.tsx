import { SignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import headerList from "./headerList";
import HeaderItem from "./headerItem";
import Image from "next/image";
import logo from "@/assets/Images/logo.jpg";

export default function Header() {
  return (
    <div className="flex justify-between items-center text-white px-1 py-1 my-2">
      <div className="flex gap-12 items-center">
        <div>
          <Image src={logo} alt="logo" height={100} width={100} />
        </div>
        {headerList.map((headerData) => (
          <HeaderItem
            key={headerData.name}
            name={headerData.name}
            Icon={headerData.Icon}
          />
        ))}
      </div>
      <div className="flex gap-2">
        <UserButton />
        {/* <SignedIn>
          
          <div className="flex-center cursor-pointer gap-2 p-4">
            <UserButton afterSignOutUrl="/" showName />
            
          </div>
        </SignedIn>
        <SignedOut>
          
          <Link href="/sign-in">Login</Link>
        </SignedOut> */}
      </div>
    </div>
  );
}
