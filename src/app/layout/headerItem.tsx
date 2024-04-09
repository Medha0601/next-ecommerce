import { headerListType } from "./headerList";

export default function HeaderItem({ name, Icon }: headerListType) {
  return (
    <>
      <div className=" text-white items-center flex gap-3 cursor-pointer hover:underline decoration-2 underline-offset-8 mb-2">
        <Icon />
        <h1 className=" ">{name}</h1>
      </div>
    </>
  );
}
