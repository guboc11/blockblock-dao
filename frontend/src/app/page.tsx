import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';
import LoopIcon from '@mui/icons-material/Loop';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logo from "../../public/blockblcok_logo.png"
import HomeIcon from '@mui/icons-material/Home';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import BarChartIcon from '@mui/icons-material/BarChart';

export default function Home() {

  return (
    <main className="max-w-md">
      {/* 상단 */}
      <div className="">
        <div className="flex flex-row-reverse">
          <AccountCircleIcon className="w-14 h-14 text-[#1B40B1]/30" ></AccountCircleIcon>
        </div>
        <div className="flex justify-center">
          <Image className="mb-10" src={Logo} alt="blockblock logo" width={112} height={42}></Image>
        </div>
        <div className="flex justify-center">
          <div className="bg-[#1B40B1]/20 w-80 h-10 rounded-3xl flex justify-between py-1 px-3">
            <button>
              <SearchIcon></SearchIcon>
            </button>
            <input className="w-full bg-transparent"></input>
            <button>
              <LoopIcon></LoopIcon>
            </button>
          </div>
        </div>
      </div>
      {/* 중간 */}
      <div className="h-[36rem]">

      </div>
      {/* 하단 */}
      <hr className="mx-6 my-2"></hr>
      <div className="flex justify-around items-baseline">
        <HomeIcon className="h-8 w-8 text-[#274BB7]"></HomeIcon>
        <EnergySavingsLeafIcon className="h-14 w-14 text-[#1B40B1]"></EnergySavingsLeafIcon>
        <BarChartIcon className="h-8 w-8 text-[#274BB7]"></BarChartIcon>

      </div>
      
    </main>
  );
}
