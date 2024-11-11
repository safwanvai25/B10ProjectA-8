import Blog from "../Blog/Blog";
import Selected from "../Selected/Selected";

const Blogs = ({AciveButton,Alldata,PlayerBuy,ChoosePlayer,isButtonActive,removeData}) => {

    
    return (
        <div className="mt-12">
            {
                AciveButton && <div className="grid  md:grid-cols-3 gap-6">
                {Alldata.map((blog , index) => <Blog PlayerBuy={PlayerBuy} key={index}  dataBlog={blog}></Blog> ) }
                
                 </div>
            
            }
            {
               AciveButton ||<div className="">
                <Selected removeData={removeData} ChoosePlayer={ChoosePlayer}></Selected>
                 <div className="mt-5 border-8 w-[18rem] border-[#E7FE29] rounded-lg">
                 <button onClick={isButtonActive} className="active w-full px ">Add More Player</button>
                 </div>
               </div> 
            }
        </div>
    );
};

export default Blogs;