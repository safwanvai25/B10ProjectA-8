
import { MdDelete } from "react-icons/md";
const Selected = ({ChoosePlayer,removeData}) => {
    console.log(ChoosePlayer)
    return (
        <div className="w-full">
 {
    ChoosePlayer.map((player,index) => <div className="" key={index}>
                   <div className="p-7 shadow-lg w-full rounded-lg flex justify-between items-center">
    <div className="flex gap-4">
    <div className="h-16 w-16 ">
        <img className="h-full rounded-2xl object-cover " src={player.image} alt="" />
           </div>
                <div>
                    <h1 className="font-semibold text-[1.2rem]">{player.name}</h1>
                    <p className="text-[#13131399]">{player.battingType}</p>
                </div>

    </div>
    <div>
        <button onClick={() => removeData(player)} className="text-[2rem] text-red-400"><MdDelete /></button>
    </div>
            </div>
         
    </div>)
 }
<div>

</div>


        </div>
   
    );
};

export default Selected;