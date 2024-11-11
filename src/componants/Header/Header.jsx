import { SiBitcoinsv } from "react-icons/si";

import cricketer from "../../assets/banner-main.png"
import bater from "../../assets/logo.png"
const Header = ({coin,claimButton,Button}) => {

    return (
        <div className="">
            <nav className="md:flex  md:justify-between  transparent pb-4 shadow-sm sticky top-6 space-y-4">
                <div className="flex justify-center md:">
                    <img src={bater} alt="" />
                </div>
                <div className="md:flex flex-col md:flex-row items-center ">
                   <ul className="flex space-x-7 text-[#131313B3] justify-center">
                    <li>Home</li>
                    <li>Fixture</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                   </ul>
                   <div className="flex justify-center  space-x-2 md:ml-7 shadow-md md:px-5 md:py-2 py-5 rounded-lg  ">
                     <span>{coin}</span>

                    <span>Coin</span>
                    
                   <span className="text-yellow-400 text-2xl"><SiBitcoinsv /></span>
                
                   
                   </div>
                </div>
            </nav>
            <section className="mt-5 img-section flex flex-col gap-4 justify-center items-center text-center">
     <img src={cricketer} alt="" />
     <h1 className="text-4xl font-semibold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
     <p className="text-[#1a1919b4] text-[1.1rem]">Beyond Boundaries Beyond Limits</p>
<div className="  rounded-2xl border-2 border-[#E7FE29] p-1">
<button onClick={() => claimButton(true)} className={Button ? 'px-7 py-4  rounded-2xl bg-[#E7FE29] text-[1.1rem] font-bold' :'px-7 py-4  rounded-2xl transparent  text-[1.1rem] font-bold'}>Claim Free Credit</button>
</div>
            </section>
        </div>
    );
};

export default Header;