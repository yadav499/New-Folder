import { useEffect } from "react";
import "./Page.css";
export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="animalcare1 w-auto flex items-center justify-center  pt-[6rem] ">
        <div className="w-[300px] md:w-[1140px] h-auto  mx-auto">
          <h3
            className="text-white text-[2rem] font-semibold  md:text-[3rem]  "
            style={{ fontFamily: "'manrope', sans-serif" }}
          >
            About us
          </h3>
        </div>
      </div>
      {/* second section */}

      <div className="w-auto py-11 h-auto">
        <div className="w-[300px] md:w-[1140px] md:flex md:gap-10 items-center h-auto mx-auto">
          {/* first card */}
          <div className="md:flex-1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg-ic487rrPcz7vQpe6yj2ryXG9XH8nu640w&s"
              alt=""
              className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] border-2 border-black rounded-lg"
            />
          </div>

          <div className="md:flex-1">
            <p className="text-violet-600 text-[1.3rem]">About</p>
            <h2
              className="text-[2rem] md:text-[3rem] font-semibold"
              style={{ fontFamily: "'manrope', sans-serif" }}
            >
              Enhancing Animal Welfare, One Paw at a Time
            </h2>
            <p
              className=" md:text-[1.2rem] mt-5"
              style={{ fontFamily: "'manrope', sans-serif" }}
            >
              Welcome to Paws4care, where we are dedicated to promoting animal
              welfare and enhancing the lives of our furry friends. At
              Paws4care, we believe that every animal deserves love, care, and
              respect, regardless of their species or background. With our
              passion and commitment, we strive to make a positive impact on the
              lives of animals in need. Join us as we embark on a journey to
              create a world where animals are treated with kindness and
              compassion.
            </p>
          </div>
        </div>
      </div>

      {/* third section */}
      <div className="w-auto py-11  h-auto ">
        <div className="w-[300px] md:w-[1140px] space-y-8 md:space-y-0 md:flex md:justify-between items-center h-auto mx-auto ">
          {/* first card */}
          <div className="bg-[#0c051c] rounded-lg p-5 md:w-[500px] w-[300px]">
            <h2 className="text-[2rem] text-center md:text-[2.5rem] text-white">
              Our Mission
            </h2>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCS-5Rg1Npse2dKFJw5q2BCvh6Qw15uttskARO7aw6Eg&s"
              alt=""
              className="w-[300px] h-[300px] md:w-[500px] md:h-[300px] border-2 border-white rounded-lg mt-10"
            />
            <p className="text-white text-justify mt-5">
              Our mission at Paws4care is to improve the welfare of animals
              through advocacy, education, and action. We are committed to
              providing a voice for animals in need, raising awareness about
              their plight, and implementing effective solutions to address
              their needs. By working collaboratively with communities,
              organizations, and individuals, we aim to create a more
              compassionate world for all living beings.
            </p>
          </div>

          {/* second card */}
          <div className="bg-[#0c051c] rounded-lg p-5 md:w-[500px] w-[300px]">
            <h2 className="text-[2rem] text-center md:text-[2.5rem] text-white">
              Our Initiatives
            </h2>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREDvtiy5kzd-_OHoJ4CdgJWBrCquTS54JiPo1puY8qXv0GKgwWVoQaMjFRm4-IkxxY44M&usqp=CAU"
              alt=""
              className="w-[300px] h-[300px] md:w-[500px] md:h-[300px] border-2 border-white rounded-lg mt-10"
            />

            <h4
              className="text-white text-justify mt-5 text-[1.2rem]"
              style={{ fontFamily: "'manrope', sans-serif" }}
            >
              Rescue and Rehabilitation
            </h4>
            <h4
              className="text-white text-justify mt-5 text-[1.2rem]"
              style={{ fontFamily: "'manrope', sans-serif" }}
            >
              Spay and Neuter Programs
            </h4>
            <h4
              className="text-white text-justify mt-5 text-[1.2rem]"
              style={{ fontFamily: "'manrope', sans-serif" }}
            >
              Education and Outreach
            </h4>
            <h4
              className="text-white text-justify mt-5 text-[1.2rem]"
              style={{ fontFamily: "'manrope', sans-serif" }}
            >
              Advocacy and Policy Change
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
