import { UserButton } from "@clerk/nextjs";
import Header from "./layout/header";
import { Dashboard } from "./components/Dashboard";

export default function Home() {
  return (
    <div>
      <div >
        <Header/>
        <Dashboard/>
      {/* <UserButton  /> */}
      </div>
    </div>
  );
}
