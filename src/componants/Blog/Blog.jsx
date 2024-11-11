import { FaFlag } from "react-icons/fa";

const Blog = ({dataBlog,PlayerBuy}) => {
  
      const {playerId,name,country,image,role,battingType,bowlingType,biddingPrice} = dataBlog;
    return (
        <div className="shadow-2xl w-full px-7 py-6 rounded-lg">
            <div>
                <img className="w-full rounded-lg" src={image} alt="" />
                <h2 className="mt-3 font-semibold text-[1.2rem]"><span></span> {name}</h2>
            </div>
            <div className="space-y-3">
                <div className="flex items-center justify-between pb-5 border-b-4"> <div className="flex items-center  text-[1.1rem] text-gray-400 gap-3"><span className="text-[1.1rem] "><FaFlag /></span>{country}</div> <div><button className="px-4 py-2 shadow border rounded-lg">{role}</button></div></div>
                
                <div className="mt-3"><h1 className="font-bold">Rating</h1> </div>
                <div className="flex justify-between items-center">
                    <p className="font-bold">Batting Type : </p>
                    <p className="text-gray-400">{battingType}</p>
                </div>
              
                <div className="flex justify-between">
                <h1 className="font-bold">Bowling Type: </h1>
                <p className="text-gray-400">{bowlingType}</p>
                </div>
                <div className="flex justify-between">
                    <h1 className="font-bold">Tk (Lakh Tk) :</h1>
                    <p className="text-gray-400">{biddingPrice} $</p>
                </div>
                <button onClick={() => PlayerBuy(dataBlog)} className="px-6 py-3  shadow rounded-lg">Choose Player</button>
            </div>
        </div>
    );
};

export default Blog;