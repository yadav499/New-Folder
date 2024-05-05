import { useEffect, useState } from "react";
import "./Page.css";
import { FaHouseChimney } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phoneNo: "",
    organisation: "",
    message: "",
  });

  const handlechange = (e) =>{
   setFormdata({
    ...formdata,
    [e.target.name] : e.target.value
   })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email,  phoneNo,organisation, message} = formdata;
   if(!name || !email || !phoneNo || !organisation || !message){ 
    toast.error("pls fill all the fields");
   }else{
    try {
      const response = await axios.post("/api/v1/user/senddetails", formdata);
      console.log(response);
      toast.success("send successfully");
      setFormdata({
        name: "",
        email: "",
        organisation: "",
        phoneNo: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("erro while sending");
    }
   }
  };


  return (
    <>
      <div className="animalcare1 w-auto flex items-center justify-center  pt-[6rem] ">
        <div className="w-[300px] md:w-[1140px] h-auto  mx-auto">
          <h3
            className="text-white text-[2rem] font-semibold  md:text-[3rem]  "
            style={{ fontFamily: "'manrope', sans-serif" }}
          >
            Contact Us
          </h3>
        </div>
      </div>

      {/* second card */}
      <div className="w-auto h-auto py-11">
        <div className="w-[300px] md:w-[1140px] mx-auto md:flex items-center md:justify-between">
          <div className="w-[300px] space-y-7 md:w-[400px] h-auto mx-auto">
            {/* first section */}
            <div className="bg-[#0c051c] py-5 rounded-lg flex items-center justify-evenly  w-[300px] md:w-[400px] mx-auto">
              <FaHouseChimney className="w-[50px] md:w-[100px] text-violet-50 h-[100px]  rounded-lg " />
              <div>
                <h4 className="text-white ">Address</h4>
                <p className="text-white">
                  Alpha Colony, Beta Vihar, <br /> Gama -9080
                </p>
              </div>
            </div>

            <div className="bg-[#0c051c] py-5 rounded-lg flex items-center justify-evenly  w-[300px] md:w-[400px] mx-auto">
              <MdEmail className="w-[50px] md:w-[100px] h-[100px] text-violet-50 rounded-lg " />
              <div>
                <h4 className="text-white ">Email</h4>
                <p className="text-white">paws4care@gmail.com</p>
              </div>
            </div>

            <div className="bg-[#0c051c] py-5 rounded-lg flex items-center justify-between px-10  w-[300px] md:w-[400px] mx-auto">
              <BsFillTelephoneFill className="w-[50px] md:w-[100px] h-[100px] text-white  rounded-lg " />
              <div>
                <h4 className="text-white ">Mobile Number</h4>
                <p className="text-white">(+91) 7667460550</p>
              </div>
            </div>
          </div>

          <div className="w-[300px] my-10 md:my-0 h-auto mx-auto md:w-[500px]   ">
            <h2
              className="text-[1.5rem] md:text-[2rem]  text-center font-semibold"
              style={{ fontFamily: "'manrope', sans-serif" }}
            >
              Get In Touch With Us
            </h2>
           

            <form action="" onSubmit={handleSubmit} className="md:w-[380px]  my-6 mx-auto">
              <div>
                <label htmlFor="">Your Name</label>
                <br />
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  value={formdata.name}
                  onChange={handlechange}
                
                  className="w-[300px] h-12 pl-4 md:w-[380px] border-2 border-violet-700 rounded-lg"
                />
              </div>
              <br />
              <div>
                <label htmlFor="" className="">
                  Your Email
                </label>
                <br />
                <input
                  type="Email"
                  placeholder="name@gmail.com"
                  name="email"
                  value={formdata.email}
                  onChange={handlechange}
             
                  className="w-[300px] h-12 pl-4 md:w-[380px] border-2 border-violet-700 rounded-lg"
                />
              </div>
              <br />
              <div>
                <label htmlFor="" className="">
                  Your Organisation Name
                </label>
                <br />
                <input
                  type="text"
                  placeholder="nameAlpha pvt Ltd"
                  name="organisation"
                  value={formdata.organisation}
                  onChange={handlechange}
               
                  className="w-[300px] h-12  pl-4 md:w-[380px] border-2 border-violet-700 rounded-lg"
                />
              </div>
              <br />
              <div>
                <label htmlFor="" className="">
                  Your Phone Number
                </label>
                <br />
                <input
                  type="tel"
                  placeholder=" +91 657xxxxx7"
                  name="phoneNo"
                  value={formdata.phoneNo}
                  onChange={handlechange}

                  className="w-[300px] h-12 pl-4 md:w-[380px] border-2 border-violet-700 rounded-lg"
                />
              </div>
              <br />
              <div>
                <label htmlFor="" className="">
                  {" "}
                  Your Message
                </label>
                <br />
                <textarea
                  placeholder="message"
                  rows={5}
                  cols={5}
                  name="message"
                  onChange={handlechange}
                  value={formdata.message}
                  className="w-[300px]  pl-4 md:w-[380px] border-2 border-violet-700 rounded-lg"
                />
              </div>
              <div className="w-[200px] mx-auto mt-14">
                <button className="w-[200px] h-12  bg-[#0c051c] rounded-lg text-white">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}
