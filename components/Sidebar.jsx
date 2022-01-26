import SidebarItems from './SidebarItems';
import { BsSpeedometer } from 'react-icons/bs';
import { BiWalletAlt } from 'react-icons/bi';
import { RiCoinsFill } from 'react-icons/ri';
import { ImCoinDollar } from 'react-icons/im';
import { RiExchangeLine } from 'react-icons/ri';
import { FiSettings } from 'react-icons/fi';
import { FiRefreshCcw } from 'react-icons/fi';
import { FaEllipsisV } from 'react-icons/fa';
import { useState } from 'react';

export default function Sidebar() {
  const [activePosition, setActivePosition] = useState('Dashboard');

  return (
    <div className="flex flex-row md:flex-col py-3 md:py-0 items-center md:items-start justify-around md:justify-start w-screen bg-[#EBEBF5] md:w-[250px] md:max-w-[250px] md:h-screen sticky z-50 top-0 md:left-0">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold md:px-14 md:py-4 cursor-pointer mb-2">
          Wallet
        </h1>
      </div>
      <div className="flex flex-col ml-0 md:ml-10 justify-center items-center space-y-2">
        <img
          className=" h-12 w-12 md:h-16 md:w-16 rounded-full hover:scale-125 cursor-pointer transition ease-in-out"
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"
          alt=""
        />
        <div className="hidden md:flex flex-col items-center">
          <h1 className=" text-xl font-bold cursor-pointer">Alex</h1>
          <p className=" text-gray-500 font-light">Product Designer</p>
        </div>
      </div>
      <div className="hidden md:flex flex-col items-start space-y-3 pt-8">
        <div
          className=" w-[300px]"
          onClick={() => setActivePosition('Dashboard')}
        >
          <SidebarItems
            name="Dashboard"
            Icon={BsSpeedometer}
            active={activePosition === 'Dashboard' ? true : false}
          />
        </div>
        <div className="w-[300px]" onClick={() => setActivePosition('wallet')}>
          <SidebarItems
            name="My wallet"
            Icon={BiWalletAlt}
            active={activePosition === 'wallet' ? true : false}
          />
        </div>
        <div
          className="w-[300px]"
          onClick={() => setActivePosition('Transaction')}
        >
          <SidebarItems
            name="Transaction"
            Icon={RiCoinsFill}
            active={activePosition === 'Transaction' ? true : false}
          />
        </div>
        <div className="w-[300px]" onClick={() => setActivePosition('Crypto')}>
          <SidebarItems
            name="Crypto"
            Icon={ImCoinDollar}
            active={activePosition === 'Crypto' ? true : false}
          />
        </div>
        <div
          className="w-[300px]"
          onClick={() => setActivePosition('Exchange')}
        >
          <SidebarItems
            name="Exchange"
            Icon={RiExchangeLine}
            active={activePosition === 'Exchange' ? true : false}
          />
        </div>
        <div className="w-[300px]" onClick={() => setActivePosition('Setting')}>
          <SidebarItems
            name="Setting"
            Icon={FiSettings}
            active={activePosition === 'Setting' ? true : false}
          />
        </div>
      </div>
      <div className="hidden md:inline-block bg-[#14121f] w-4/5 rounded-2xl mx-auto mt-10 space-y-3 py-5">
        <div className="flex items-center justify-between px-5">
          <div className="icon">
            <FiRefreshCcw className="text-white w-4 h-4" />
          </div>
          <div className="icon">
            <FaEllipsisV className="text-white w-4 h-4 " />
          </div>
        </div>
        <div className="flex space-y-2 pl-5 flex-col text-white text-sm">
          <h1>History available</h1>
          <p className=" text-xs text-white/75">
            Check your weekly transaction reports
          </p>
        </div>
      </div>
    </div>
  );
}
