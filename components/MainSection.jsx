import Nav from './Nav';
import { BsFilterLeft } from 'react-icons/bs';
import { SiBitcoinsv } from 'react-icons/si';
import { FaEthereum } from 'react-icons/fa';
import { SiDogecoin } from 'react-icons/si';
import DashBoardBox from './DashBoardBox';
import MainLineChart from './MainLineChart';
import { FaEllipsisV } from 'react-icons/fa';
import SellOrderInfo from './SellOrderInfo';
import { Fade } from 'react-awesome-reveal';

export default function MainSection() {
  return (
    <div className="flex-grow">
      <Nav />
      <main className="bg-[#f4f4fc] w-11/12 mx-auto rounded-xl">
        <div className="flex justify-between px-8 py-5">
          <h1 className=" text-3xl font-bold">Dashboard</h1>
          <h1 className="flex border border-gray-500/20 rounded-xl px-3 text-md font-bold items-center gap-x-3 cursor-pointer">
            Filters
            <span>
              <BsFilterLeft />
            </span>
          </h1>
        </div>
        <div className="flex flex-col md:flex-row px-8 py-5 justify-center md:justify-start items-center space-y-3 md:space-x-10">
          <DashBoardBox
            Icon={SiBitcoinsv}
            value="$1200"
            percentage="45%"
            dataValue={[10, 15, 10, 25]}
          />
          <DashBoardBox
            Icon={FaEthereum}
            value="$232,40"
            percentage="35%"
            dataValue={[10, 15, 10, 11]}
          />
          <DashBoardBox
            Icon={SiDogecoin}
            value="600"
            percentage="21%"
            dataValue={[8, 12, 16, 11]}
          />
        </div>
        <Fade>
          <div className="flex items-start justify-between px-8 pt-5">
            <div>
              <h1 className=" font-bold text-lg lete">Market Overview</h1>
              <p className=" text-sm text-gray-500 font-light">
                Prices value updates
              </p>
            </div>
            <div>
              <h1 className="border border-gray-500/20 text-sm rounded-xl px-3 py-2 text-md font-bold items-center gap-x-3 cursor-pointer">
                Weekly (2021)
              </h1>
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="px-8 pt-8 w-full md:w-8/12 pb-8">
              <MainLineChart />
            </div>
            <div className=" bg-[#14121f] max-h-[380px] space-y-5 px-4 py-4 rounded-2xl min-w-[300px] mx-auto my-auto">
              <div className="flex justify-between items-center px-1.5">
                <h1 className="text-white">Sell Order</h1>
                <div className="icon">
                  <FaEllipsisV className="text-white w-4 h-4" />
                </div>
              </div>
              <div className="text-white px-1.5 text-sm flex justify-between">
                <h1>Price</h1>
                <h1>Amount</h1>
                <h1>Total</h1>
              </div>
              <div className="overflow-y-scroll scrollbar-hide">
                <SellOrderInfo price="89.03" amount="0.15" total="$126,00" />
                <SellOrderInfo price="94.02" amount="0.18" total="$126,00" />
                <SellOrderInfo price="92.06" amount="0.22" total="$252,00" />
                <SellOrderInfo price="95.20" amount="0.26" total="$176,00" />
                <SellOrderInfo price="95.30" amount="0.31" total="$226,00" />
                <SellOrderInfo price="92.01" amount="0.35" total="$2326,00" />
                <SellOrderInfo price="97.34" amount="0.53" total="$2243,00" />
              </div>
            </div>
          </div>
        </Fade>
      </main>
    </div>
  );
}
