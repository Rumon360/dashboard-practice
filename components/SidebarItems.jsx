export default function SidebarItems({ name, Icon, active }) {
  return (
    <div className="flex relative transition ease-in-out space-x-7 w-full py-1.5 pl-10 cursor-pointer rounded-lg hover:bg-gray-300 items-center">
      <Icon className=" w-6 h-6" />
      <h1 className="text-gray-500 font-light">{name}</h1>
      {active && (
        <div className=" absolute bg-[#14121f] h-7 w-[5px] -left-[27px]"></div>
      )}
    </div>
  );
}
