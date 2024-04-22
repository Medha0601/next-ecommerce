import { UserButton } from "@clerk/nextjs";
import Header from "./layout/header";
import Dashboard from "./Home/page";


// import ProductItem from "./Products/productItem";

export default function Home() {
  return (
    <div>
      <div >
        <Dashboard/>
      </div>
    </div>
  );
}
