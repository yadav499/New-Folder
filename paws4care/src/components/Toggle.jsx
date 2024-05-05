import { FaArrowRight } from "react-icons/fa";

import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function Toggle({onClose}) {
  return (
    <div className="w-full h-auto" onClick={onClose}>
        <div className="w-[200px] pt-[3rem] h-screen bg-white">
            <ul className="ml-3 w-[150px] mx-auto">
              <Link to="/">  <li className="my-2 text-md flex items-center justify-between " >Home <FaArrowRight/></li></Link>
                <hr />
               <Link to="/animal-care"> <li className="my-2 text-md flex items-center justify-between ">Animal Welfare  <FaArrowRight/></li> </Link>
                <hr />
             <Link to="/about-us">   <li className="my-2 text-md flex items-center justify-between">About Us  <FaArrowRight/></li> </Link>
                <hr />
              <Link to="/contact-us"> <li className="my-2 text-md flex items-center justify-between">Contact Us  <FaArrowRight/></li> </Link>
            </ul>

        </div>

    </div>
  )
}
