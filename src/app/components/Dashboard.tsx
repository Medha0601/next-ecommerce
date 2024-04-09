import { currentUser } from "@clerk/nextjs/server"


export const Dashboard = async () => {
    const user = await currentUser();
  return (
    <>
    <div className=" text-black bg-gray-100 mx-20 px-5 py-10">
    {/* {user ? (<div>Welcome {user.firstName}</div>):(<div>not signed in</div>) } */}
    <div>Welcome {user?.firstName}</div>
    
    {/* <div>email: {user?.emailAddresses}</div> */}
    </div>
    </>
  )
}
