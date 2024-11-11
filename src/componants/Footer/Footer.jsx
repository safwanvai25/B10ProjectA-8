import photo from "../../assets/logo-footer.png"
const Footer = () => {
    return (
        <div className="mt-64 bg-[#06091A] text-[#FFFFFF99] ">
          <div className="bg-photo max-w-7xl my-0 mx-auto px-8 py-8  flex flex-col text-center gap-3 relative bottom-56 bor ">
             <h1 className="text-4xl font-bold text-black">Subscribe to our Newsletter</h1>
             <p className="text-[#FFFFFF99]">Get the latest updates and news right in your inbox!</p>
<div>
<input className=" px-8 py-3     rounded-xl mr-4" placeholder="Enter your email" type="text" />
<button className="px-8 py-3 bg-[#E7FE29] rounded-xl text-[#131313] font-bold ">Subscribe</button>
</div>
          </div>
          <div>
    <div>

    </div>


     <div className=" border-b-2 px-[5rem] pb-[5rem] pt-0">
  <div className="flex justify-center mb-12"><img src={photo} alt="" /></div>
  <div className="grid md:grid-cols-3 gap-2 ">
    <div className="">
        <h1 className="text-[#FFFFFF] font-semibold text-[1.2rem]">About us</h1>
        <p>We are a passionate team dedicated <br />
            to providing the best services to 
            our customers.</p>
    </div>
    <div className="flex flex-col text-[1.2rem] md:justify-center md:items-center">
        <h1 className="text-[#FFFFFF] font-semibold">Quick Links</h1>

   <div className="">
   <li >Home</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
   </div>
    </div>
    <div>
        <h1 className="text-[#FFFFFF] text-[1.2rem] font-semibold">Subscribe</h1>
        <p >Subscribe to our newsletter  for the <br /> latest updates.</p>
        <br />
        <input className=" px-8 py-3  rounded-s-lg  rounded-lg" placeholder="Enter your email" type="text" />
        <button className="px-8 py-3 bg-[#E7FE29] rounded-lg btn-box text-[#131313] font-bold btn-box2">Subscribe</button>
    </div>
      </div>


     </div>
   
     <div className="p-6 text-center">
        <h1>@2024 Your Company All Rights Reserved.</h1>
     </div>



          </div>
        </div>
    );
};

export default Footer;