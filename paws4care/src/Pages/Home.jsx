import "./Page.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slide2 from "../assets/paws42.png";
import slide3 from "../assets/paws43.png";

import newi from "../assets/new.png";
import organisation from "../assets/paws44.jpg";
import action1 from "../assets/ty.webp";
import action2 from "../assets/ty1.webp";
import action3 from "../assets/ty2.webp";
import paws46 from "../assets/paws46.jpg";
import { useEffect } from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";


export default function Home() {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
 
  return (
    <div className="w-auto pt-[6rem] h-auto ">
      <div className="home w-auto py-7 md:pb-0 md:pt-[2rem] h-auto ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <>
              <div className="w-[300px] md:w-[1140px] md:flex md:justify-between items-center mx-auto h-auto ">
                <div className="md:w-[500px]">
                  <h3
                    className=" text-[2.5rem] font-semibold text-center md:text-[3.5rem] md:text-left"
                    style={{ fontFamily: "'manrope', sans-serif" }}
                  >
                    Paws4Care Cares for All Animals
                  </h3>
                  <p
                    className="text-center text-[1.2rem] font-medium text-md md:text-left"
                    style={{ fontFamily: "'manrope', sans-serif" }}
                  >
                    Together, lets make a difference in the {<br />} lives of
                    animals in need.
                  </p>
                  <div className="flex items-center mx-auto gap-4 my-6 w-[300px] md:justify-normal justify-evenly  md:w-[300px] md:gap-[3rem] md:ml-0">
                  <a href="https://api-wa.co/5dyaTV"> <button className="p-2 rounded-md ring ring-offset-2  ring-violet-900 hover:scale-105 transition-transform">
                      Donate Now
                    </button> </a> 
                   <Link to="/animal-care"> <button className="bg-gradient-to-tr from-violet-400 to-violet-700 hover:scale-105 transition-transform text-white p-2 rounded-md ring ring-offset-2  ring-violet-900">
                      Explore more
                    </button> </Link>
                  </div>
                </div>

                <img
                  src={newi}
                  alt=""
                  className="md:h-[500px] rounded-t-full"
                />
              </div>
              <div className="custom-shape-divider-bottom-1709455069">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    className="shape-fill"
                  ></path>
                </svg>
              </div>
            </>
          </SwiperSlide>
          <SwiperSlide>
            <>
              <div className="w-[300px] md:w-[1140px] md:flex md:justify-between items-center mx-auto h-auto ">
                <div className="md:w-[500px]">
                  <h3
                    className="text-[2.3rem] md:text-[3.5rem] md:text-left font-semibold text-center"
                    style={{ fontFamily: "'manrope', sans-serif" }}
                  >
                    Empower Animal Guardianship
                  </h3>
                  <p
                    className="text-center font-medium text-[1.2rem] text-md md:text-left"
                    style={{ fontFamily: "'manrope', sans-serif" }}
                  >
                    Educate, support, and advocate for responsible {<br />} pet
                    ownership
                  </p>
                  <div className="flex items-center mx-auto gap-4 my-6 w-[300px] md:justify-normal justify-evenly  md:w-[300px] md:gap-[3rem] md:ml-0">
                  <a href="https://api-wa.co/5dyaTV"> <button className=" hover:scale-105 transition-transform  p-2 rounded-md ring ring-offset-2  ring-violet-900">
                      Donate Now
                    </button> </a>
                 <Link to="/animal-care"><button className="bg-gradient-to-tr from-violet-400 to-violet-700 hover:scale-105 transition-transform text-white p-2 rounded-md ring ring-offset-2  ring-violet-900">
                      Explore more
                    </button> </Link>   
                  </div>
                </div>

                <img
                  src={slide2}
                  alt=""
                  className="md:h-[500px] rounded-t-full"
                />
              </div>
              <div className="custom-shape-divider-bottom-1709455069">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    className="shape-fill"
                  ></path>
                </svg>
              </div>
            </>
          </SwiperSlide>
          <SwiperSlide>
            <>
              <div className="w-[300px] md:w-[1140px] md:flex md:justify-between items-center mx-auto h-auto ">
                <div className="md:w-[500px]">
                  <h3
                    className="text-[2.4rem] md:text-[3.5rem]  font-semibold text-center md:text-left"
                    style={{ fontFamily: "'manrope', sans-serif" }}
                  >
                    Support Our All Rescue Efforts
                  </h3>
                  <p
                    className="text-center text-[1.2rem] font-medium text-md md:text-left"
                    style={{ fontFamily: "'manrope', sans-serif" }}
                  >
                    Every donation helps us save and rehabilitate {<br />}{" "}
                    animals in distress.
                  </p>
                  <div className="flex items-center mx-auto gap-4 w-[300px] justify-evenly md:justify-normal md:w-[300px] md:gap-[3rem] md:ml-0 my-6">
                 <a href="https://api-wa.co/5dyaTV">  <button className="  p-2 rounded-md ring ring-offset-2  hover:scale-105 transition-transform ring-violet-900">
                      Donate Now
                    </button> </a>
                  <Link to="/animal-care"> <button className="bg-gradient-to-tr from-violet-400 to-violet-700 hover:scale-105 transition-transform text-white p-2 rounded-md ring ring-offset-2  ring-violet-900">
                      Explore more
                    </button> </Link>
                                      </div>
                </div>

                <img
                  src={slide3}
                  alt=""
                  className="md:h-[500px] rounded-t-full"
                />
              </div>
              <div className="custom-shape-divider-bottom-1709455069">
                <svg
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1200 120"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                    className="shape-fill"
                  ></path>
                </svg>
              </div>
            </>
          </SwiperSlide>
        </Swiper>
       
      </div>

      {/* second section */}


      <div className="w-[100%] h-auto py-11 bg-[#0c051c]">
       <div className="w-[300px] h-auto md:w-[1140px] mx-auto  gap-[2rem] grid grid-cols-1 md:grid-cols-3 ">
        <div className=" w-[300px] mx-auto space-y-4  ">
          <img src="https://d2zp5xs5cp8zlg.cloudfront.net/image-66577-800.jpg" alt="" className="w-[100px] rounded-lg object-contain md:w-[150px] h-[100px] md:h-[150px] border-t-4 border-l border-r border-b mx-auto" />
            <h2 className="text-white text-center md:text-[1.2rem]" style={{fontFamily:"'manrope', sans-serif"}}>Pet Wellness <br/> and Groomig</h2>
        </div>
        <div className="w-[300px] mx-auto space-y-4 ">
          <img src="https://m.media-amazon.com/images/I/61QebmjTh1L._AC_UF1000,1000_QL80_.jpg" alt="" className="w-[100px] rounded-lg md:w-[150px] h-[100px] md:h-[150px] border-t-4 border-l border-r border-b mx-auto " />
            <h2 className="text-white text-center md:text-[1.2rem]" style={{fontFamily:"'manrope', sans-serif"}}>Best Quality <br/> Pet Accessories</h2>
        </div>
        <div className="w-[300px] mx-auto space-y-4  ">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwkAT1pG6YHu4kl1S3tq-M3cGHmIpvAc3yJweKHRxyog&s" alt="" className="w-[100px] rounded-lg md:w-[150px] h-[100px] md:h-[150px] border-t-4 border-l border-r border-b mx-auto " />
            <h2 className="text-white text-center md:text-[1.2rem]" style={{fontFamily:"'manrope', sans-serif"}}>Best Affordable <br/> Organic  Pet Food</h2>
        </div>


       </div>

      </div>

      <div className="w-auto home py-11  h-auto ">
        <div className="w-[300px] md:w-[1140px] md:flex space-y-10 md:space-y-0 items-center h-auto mx-auto">
          
          <div className="w-[300px]  flex items-center h-[300px] md:w-[500px] md:h-[500px] border-2 border-black bg-black rounded-lg mx-auto">
            <img src={paws46} alt="" className=" rounded-lg -ml-8 drop-shadow-md skew-y-6  shadow-black" />
          </div>

          <div className="w-[300px] md:w-[500px] h-auto mx-auto">
            <p className="text-violet-500 text-[1.3rem]">About</p>
            <h2 className="text-[2rem] md:text-[3.5rem] font-semibold " style={{fontFamily:"'manrope', sans-serif"}}>Best Agency For Your Pet</h2>
            <p style={{fontFamily:"'manrope', sans-serif"}} className="text-[1rem] mt-6">The Poo Patrol logo, slogan, and symbols are shown as an overlay over the full-screen backdrop picture. A full-width area with branded colors and forts contains a one sentence explanation.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
                {/* first list */}
                <p className="flex items-center gap-5 text-[1.1rem] font-semibold" style={{fontFamily:"'manrope', sans-serif"}}><BsFillArrowUpRightCircleFill className="text-violet-600 text-[1.5rem]"/>20 Years Experience</p> 
                <p className="flex items-center gap-5 text-[1.1rem] font-semibold" style={{fontFamily:"'manrope', sans-serif"}}><BsFillArrowUpRightCircleFill className="text-violet-600 text-[1.5rem]"/>Animal Lover</p>
                <p className="flex items-center gap-5 text-[1.1rem] font-semibold" style={{fontFamily:"'manrope', sans-serif"}}><BsFillArrowUpRightCircleFill className="text-violet-600 text-[1.5rem]"/>Certified Groomer</p>
                <p className="flex items-center gap-5 text-[1.1rem] font-semibold" style={{fontFamily:"'manrope', sans-serif"}}><BsFillArrowUpRightCircleFill className="text-violet-600 text-[1.5rem]"/>Pet Parents of 5 Dogs</p>
             
        
                </div>  


          </div>

        </div>

      </div>

      {/* second section */}

      <div className="w-auto pt-14 h-auto ">
        <div className="w-[300px] border-t-2 border-l-4 border-b-2 border-r-4 rounded-lg shadow-md  border-violet-400 md:w-[1140px] h-auto mx-auto">
          <h3
            className="text-[2rem] md:text-[3.5rem] text-center font-semibold drop-shadow-md bg-gradient-to-r from-violet-700 via-violet-400 to-violet-700 text-transparent bg-clip-text "
            style={{ fontFamily: "'manrope', sans-serif" }}
          >
            Trusted Organisation with Us
          </h3>
          <div className="w-[250px] md:w-[500px] my-11 rounded-lg mx-auto h-auto">
            <img src={organisation} alt="" className="rounded-lg" />
          </div>
        </div>
      </div>

      {/* third section */}
      <div className="animalcare1 mt-11 flex items-center">
        <div className="w-[300px] h-auto mx-auto md:w-[500px] md:ml-[10rem]">
          <h2
            className="uppercase text-white text-[2rem] md:text-[4rem] font-bold"
            style={{ fontFamily: "'manrope', sans-serif" }}
          >
            Every{" "}
            <span className="text-violet-500 drop-shadow-md"> Animal </span> is
            Someone{" "}
          </h2>
          <div className="border-2 border-white pl-5 ">
            <h2
              className="uppercase text-white text-[2rem] md:text-[3rem]"
              style={{ fontFamily: "'manrope', sans-serif" }}
            >
              Who will you be?
            </h2>
          </div>
        </div>
      </div>
       
       {/* fourth section */}

       <div className="w-auto py-10 md:py-7 h-auto ">
        <div className="w-[300px] md:w-[1140px] h-auto mx-auto">
          <h3 className="text-center text-[2rem] md:text-[3rem] font-semibold drop-shadow-md bg-gradient-to-r from-violet-700 via-violet-400 to-violet-700 text-transparent bg-clip-text " style={{fontFamily:"'mnarope', sans-serif"}}>Paws4Care in Action</h3>
             
             <div className="w-[300px] my-6 md:w-[1140px] h-auto mx-auto">
             <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
         
          modules={[Autoplay, Pagination]}
          className="mySwiper md:pb-14 "
        >
              {/* first card */}
               <SwiperSlide>

             
              <div className="w-[300px] py-5  h-auto md:flex md:gap-10 md:w-[1140px] border-t-4   rounded-lg border-violet-300  mx-auto">
                <img src={action1} alt="" className="w-[300px] md:w-[500px] mx-auto rounded-lg  " />
                <div className=" relative md:pt-[5rem] pt-[2rem]">
                  <h2 className="md:text-[7rem] text-[3rem] absolute  font-semibold text-white drop-shadow-md right-0 -top-[3rem]  ">01</h2>
              
                <h2 className="text-[1.5rem] md:text-[2rem] font-semibold text-center md:text-left " style={{fontFamily:"'manrope', sans-serif"}}>Adopt, Dont Shop</h2>
                <p className="text-[1rem] font-medium text-justify my-5 " style={{fontFamily:"'manrope', sans-serif"}}>Consider adopting a pet from a shelter or rescue organization instead of buying one from a breeder or pet store. By adopting, you not only provide a loving home for an animal in need but also help reduce the demand for puppy mills and irresponsible breeding practices.</p>
                </div>

              </div>
              </SwiperSlide>
              <SwiperSlide>

             
<div className="w-[300px] h-auto md:flex  md:gap-10 md:w-[1140px] py-5 border-t-4  rounded-lg border-violet-300  mx-auto">
  <img src={action2} alt="" className="w-[300px] md:w-[500px] mx-auto rounded-lg  " />
  <div className=" relative md:pt-[5rem] pt-[2rem]">
    <h2 className="md:text-[7rem] text-[3rem] absolute  font-semibold text-white drop-shadow-md right-0 -top-[3rem]  ">02</h2>

  <h2 className="text-[1.5rem] md:text-[2rem] text-center md:text-left font-semibold " style={{fontFamily:"'manrope', sans-serif"}}>Support Legislation for Animal Rights</h2>
  <p className="text-[1rem] font-medium text-justify my-5" style={{fontFamily:"'manrope', sans-serif"}}>Stay informed about and advocate for legislation that protects animals from cruelty and exploitation. Contact your representatives to voice support for bills that strengthen animal welfare laws, such as bans on animal testing for cosmetics, restrictions on factory farming practices, and increased penalties for animal abuse.</p>
  </div>

</div>
</SwiperSlide>
<SwiperSlide>

             
<div className="w-[300px] py-5 h-auto md:flex md:gap-10 md:w-[1140px] border-t-4  rounded-lg border-violet-300  mx-auto">
  <img src={action3} alt="" className="w-[300px] md:w-[500px] mx-auto rounded-lg  " />
  <div className=" relative md:pt-[5rem] pt-[2rem]">
    <h2 className="md:text-[7rem] text-[3rem] absolute  font-semibold text-white drop-shadow-md right-0 -top-[3rem]  ">03</h2>

  <h2 className="text-[1.5rem] md:text-[2rem] text-center md:text-left font-semibold " style={{fontFamily:"'manrope', sans-serif"}}>Promote Vegan and Cruelty-Free Products</h2>
  <p className="text-[1rem] font-medium text-justify my-5" style={{fontFamily:"'manrope', sans-serif"}}>Make compassionate choices by opting for vegan and cruelty-free products. Choose plant-based foods over animal products to reduce demand for factory farming, and select cosmetics, clothing, and household items that are not tested on animals. By supporting ethical businesses, you can help create a more humane world for animals.</p>
  </div>

</div>
</SwiperSlide>
              </Swiper>


             </div>

            


        </div>

       </div>

       

    </div>
  );
}
