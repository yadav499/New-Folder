import error from "../assets/errorpage.jpg"
import {Link} from "react-router-dom"
export default function Notfound() {
  return (
    <div className="w-[300px] md:w-[500px] mx-auto pt-[8rem]">
      <img src={error} alt=""  />

      <div className="w-[200px] my-7 mx-auto">
       <Link to="/"> <button className="w-[200px] p-3 bg-purple-400 rounded-lg text-white font-medium text-center hover:scale-105 transition-transform">Back Home</button> </Link>

      </div>
    </div>
  )
}
