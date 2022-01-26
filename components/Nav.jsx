import { BsSearch } from 'react-icons/bs';
import { AiOutlineBell } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';
import { AiOutlineGift } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';

export default function Nav() {
  return (
    <header className="sticky md:top-0 top-[72px] flex py-6 px-20 bg-[#ebebf5] justify-between z-40">
      <div className="flex w-screen md:w-[300px] bg-white  py-2 px-5 rounded-full items-center space-x-3">
        <BsSearch className="w-4 h-4" />
        <input
          type="text"
          className="outline-none bg-transparent text-sm text-[#14121f]"
          placeholder="Search"
        />
      </div>
      <div className="hidden md:flex space-x-5">
        <div className=" bg-white rounded-full px-2 py-2 cursor-pointer">
          <AiOutlineBell className=" h-5 w-5" />
        </div>
        <div className=" bg-white rounded-full px-2 py-2 cursor-pointer">
          <BiMessageDetail className=" h-5 w-5" />
        </div>
        <div className=" bg-white rounded-full px-2 py-2 cursor-pointer">
          <AiOutlineGift className=" h-5 w-5" />
        </div>
        <div className=" bg-white rounded-full px-2 py-2 cursor-pointerp">
          <FiSettings className=" h-5 w-5" />
        </div>
      </div>
    </header>
  );
}
