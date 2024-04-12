import { headerListType } from "./headerList";

export default function HeaderItem({ name, Icon }: headerListType) {
  return (
    <>
      <div className=" flex items-center gap-3  text-white cursor-pointer hover:text-gray-300 hover:underline decoration-2 underline-offset-8 mb-2">
        <Icon className=" size-5" />
        <h1 className="  ">{name}</h1>
      </div>
    </>
  );
}
