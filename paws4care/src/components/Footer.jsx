import { FaEnvelope, FaGlobe } from "react-icons/fa";
import footerlogo from "../assets/paws4carelogo.png";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="w-auto h-auto  md:pb-2 bg-[#0c051c]">
         <div className="w-[80%]  space-y-16 md:space-y-0   md:flex items-center justify-between mx-auto py-14 ">

         <div className="w-[300px] border-l-8 border-b-violet-500 pl-3 md:w-[800px] space-y-2 mx-auto ">
        <h3 className="text-white text-[1.5rem]  md:text-[2.5rem] font-semibold " style={{fontFamily:"'manrope', sans-serif"}}>

        SUPPORT OUR CAMPAIGNS LOCALLY</h3>
        <p className="text-white text-[1.2rem]" style={{fontFamily:"'manrope', sans-serif"}}>Join Paws4Care’s Action Team to hear about protests, events, and {<br className="hidden md:block"/>} volunteer opportunities  in your area. You’ll also get tips and ideas {<br className="hidden md:block"/>} to help you advocate for animals.</p>
        </div>

        <div className="w-[200px] mx-auto ">
        <a href="https://api-wa.co/5dyaTV"> <button className="w-[200px] h-12 bg-violet-400 rounded-lg hover:scale-105 transition-transform text-white">Join Today!</button> </a>

        </div>
      </div>
<hr className="hidden md:block" />
        <div className="w-[80%] md:mt-14 h-auto md:flex md:justify-between  mx-auto">

            <div className=" ">
               <img src={footerlogo} alt="" className="md:w-[300px]  drop-shadow-lg shadow-black border-2 border-white bg-white rounded-md p-2" />

            </div>
            <div className="my-4">
                <h3 className="text-white text-[1.4rem] font-semibold">Quick Links</h3>

                 <ul className="mt-4">
                 <Link to="/">   <li className="text-white my-2 hover:translate-x-2 transition-transform">Home</li> </Link>
                  <Link to="/animal-care"> <li className="text-white hover:translate-x-2 transition-transform my-2">Animal Welfare</li> </Link>
                  <Link to="/about-us"> <li className="text-white hover:translate-x-2 transition-transform my-2">About us</li> </Link>
                   <Link to="/contact-us"> <li className="text-white hover:translate-x-2 transition-transform my-2">Contact Us</li> </Link>
                 </ul>
            </div>
            <div>
                <h3 className="text-white text-[1.4rem] font-semibold">Address</h3>
                 <div className="flex my-2 items-center gap-4 py-3 px-2 border-b border-l border-r w-[200px] rounded-lg">
                    <FaLocationDot className="text-white  text-[2rem]"/>
                    <p className="text-white">Patna, Bihar</p>
                 </div>
                 <h3 className="text-white text-[1.4rem] font-semibold">Connect on</h3>
                 <div className="flex items-center my-4 gap-4 px-2 py-3  border-b border-l border-r w-[220px] rounded-lg">
                    <FaEnvelope className="text-white  text-[2rem]"/>
                    <p className="text-white">info@paws4care.com</p>
                 </div>
                 <div className="flex items-center mt-4 gap-4 py-3 px-2 border-b border-l border-r w-[200px] rounded-lg">
                    <FaGlobe className="text-white  text-[2rem]"/>
                    <p className="text-white">paws4care.com</p>
                 </div>
                
            </div>
           

        </div>
        <div className="w-[300px] md:w-[500px] my-3 mx-auto">
         <ul className="flex flex-wrap md:justify-between gap-4">
          <Link to="/terms&conditions" > <li className="text-white font-semibold text-sm  p-2 ">Terms & Conditions</li></Link>
          <Link to="/cookies-policy">  <li className="text-white font-semibold text-sm p-2 ">Cookies Policy</li> </Link> 
          <Link to="/privacy-policy"> <li className="text-white font-semibold text-sm p-2 "> Privacy Policy</li> </Link> 
          
         </ul>
        </div>
 
        <p className="text-white text-center">Copyright©2024.All Rights Reserved.PAWS4CARE</p>

    </div>

  )
}
