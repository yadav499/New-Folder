
import { FaBars, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import pawslogo from "../assets/paws4carelogo.png";
import { useState } from "react";
import Toggle from "./Toggle";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [toggle, setToggle] =  useState(false);
    const [popup, setPopup] = useState(false);
    const handlepopup = () =>{
        setPopup(!popup);
    }
    const handleToggle = ()=>{
        setToggle(!toggle);
    }
    const onClose = ()=>{
        setToggle(false);
        setPopup(false);
    }
  return (
    <>
  
    <div className="w-full h-auto fixed z-50">

        {/* topbar */}
        <div className="w-full h-10 bg-[#0c051c] flex items-center">
            <div className="md:flex-1 pl-10 md:flex  w-[500px] mx-auto hidden">
     <marquee className="text-white ">
     ✨"Pet owners, please 🙏 remember to leash your pets, clean up after them, and be mindful of noise to ensure a harmonious community."
            </marquee>
            </div>
           <div className="w-[500px] mx-auto flex-1">

        
            <ul className="w-[200px] flex mx-auto  md:float-end md:pr-10 items-center justify-between ">
                
                <li className="border-2 border-white p-1 rounded-lg"><FaFacebook className="text-white text-[1.3rem]"/></li>  
                <li className="border-2 border-white p-1 rounded-lg"><FaInstagram className="text-white text-[1.3rem]"/></li>  
                <li className="border-2 border-white p-1 rounded-lg"><FaTwitter className="text-white text-[1.3rem]"/></li>
                <li className="border-2 border-white p-1 rounded-lg"><FaLinkedin className="text-white text-[1.3rem]"/></li>
            </ul>
            </div>
        </div>


        {/* main navbar */}

        <div className="w-full h-14 md:h-16 flex items-center justify-between px-4  md:px-10 bg-[#f5f1ff]  ">
           <div className="flex gap-[6rem] items-center">
            <img src={pawslogo} alt="" className="w-[10rem]" />

            <ul className="hidden md:flex md:gap-8">
            <Link to="/">  <li className="menu text-[1rem] hover:scale-105 transition-transform hover:text-violet-700 font-semibold text-violet-900" style={{fontFamily:"'manrope', sans-serif"}}>Home</li></Link>  
             <Link to="/animal-care">  <li className="text-[1rem] transition-transform hover:scale-105 hover:text-violet-700 font-semibold text-violet-900" style={{fontFamily:"'manrope', sans-serif"}}>Animal Welfare</li></Link> 
              <Link to="/about-us">  <li className="text-[1rem] transition-transform hover:scale-105 hover:text-violet-700 font-semibold text-violet-900" style={{fontFamily:"'manrope', sans-serif"}}>About Us</li> </Link>
             <Link to="/contact-us">  <li className="text-[1rem] transition-transform hover:scale-105 hover:text-violet-700 font-semibold text-violet-900" style={{fontFamily:"'manrope', sans-serif"}}>Contact Us</li></Link> 
            </ul>
            </div>
              <div>
               <button className="bg-[#0c051c]  hidden md:block  rounded-lg p-3 text-white border-l border-b border-violet-600 shadow-md " onClick={handlepopup}>Donate Now</button>
            <div className="bg-[#0c051c] p-3 rounded-lg md:hidden" onClick={handleToggle}>
                <FaBars className="text-[1rem] text-white"/>
            </div>
            </div> 

        </div>

    {toggle && <Toggle onClose={onClose}/>}
    {popup && (
        <div className="w-[100%] h-[100vh] bg-[rgba(0,0,0,0.75)] absolute flex justify-center items-center top-0 z-50" onClick={onClose}>
              <div className="w-[300px] h-auto md:w-[800px] py-11 md:h-[400px] bg-violet-100 rounded-lg">
                 <div className="w-[300px] mx-auto">
                    <img src="https://images.squarespace-cdn.com/content/v1/536fe0f6e4b08758c320b79a/2f6c2449-24ae-44e1-bb30-c3337bb5d68a/Pick+a+Project+Icons+%284%29.jpg" alt="" className="w-[200px] h-[200px] border-2 rounded-lg border-black mx-auto" />

                    <div className="w-[200px] mx-auto my-10">
                     <a href="https://api-wa.co/5dyaTV"> <button className="w-[200px] h-14 rounded-lg bg-[#0c051c] text-white hover:scale-105 transition-transform ">Donate Now</button>  </a> 

                    </div>

                 </div>
              </div>
            </div>
    )}
    </div>
    </>
  )
}
