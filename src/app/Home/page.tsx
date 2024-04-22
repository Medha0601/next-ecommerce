import { currentUser } from "@clerk/nextjs/server"
import userAvtar from "@/assets/Images/userAvtar.png"
import Image from "next/image";

 const Dashboard = async () => {
    const user = await currentUser();
    return (
        <a href="#" className="group block max-w-sm mx-auto rounded-lg p-6 ring-2 ring-slate-500/50 hover:bg-blue-300">
            <div className="flex items-center space-x-3">
                <Image src={userAvtar}
                alt="user icon"
                className="h-6 w-6" />
                <h3 className=" text-slate-400 group-hover:text-white text-sm font-semibold "> Welcome, {user?.firstName}</h3>
                
            </div>
            <p className=" text-slate-400 group-hover:text-white text-sm">Lorem ipsum dolor sit amet.</p>
        </a>
    );
};

export default Dashboard