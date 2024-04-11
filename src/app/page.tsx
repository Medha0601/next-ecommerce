import { UserButton } from "@clerk/nextjs";
import Header from "./layout/header";
import { Dashboard } from "./components/Dashboard";
// import ProductItem from "./Products/productItem";

export default function Home() {
  return (
    <div>
      <div >
        <Header/>
        <Dashboard/>
        {/* <ProductItem /> */}
      {/* <UserButton  /> */}
      </div>
    </div>
  );
}
