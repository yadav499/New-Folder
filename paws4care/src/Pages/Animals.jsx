import { useEffect } from "react";
import "./Page.css";
import paws47 from "../assets/paws47.jpg"
export default function Animals() {
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
            Animal Welfare
          </h3>
        </div>
      </div>
      {/* second section     */}

      <div className="w-auto py-11 h-auto ">
        <div className="w-[300px] md:w-[1140px] space-y-8 md:space-y-0 md:flex items-center h-auto  mx-auto">
          <div className="w-[300px] h-auto md:w-[500px] mx-auto">
            <img
              src={paws47}
              alt=""
              className="w-[300px] h-[300px] mx-auto md:w-[500px] md:h-[500px] border-2 object-contain bg-black  border-black rounded-lg"
            />
          </div>

          <div className="w-[300px] md:w-[500px] h-auto mx-auto">
            <p className="text-violet-600 text-[1.4rem] font-semibold">
              Care of Pets
            </p>
            <h2
              className="text-[2rem] md:text-[3rem] font-semibold"
              style={{ fontFamily: "'manrope', sans-serif" }}
            >
              Animal Welfare Organisation
            </h2>
            <p
              className="text-[1.1rem] mt-5"
              style={{ fontFamily: "'manrope',sans-serif" }}
            >
              Animal welfare refers to the ethical and compassionate treatment
              of animals, ensuring their physical and mental well-being is
              safeguarded and respected. It encompasses various aspects of
              animals lives, including their housing, nutrition, health care,
              social interactions, and overall quality of life.
            </p>
            <p></p>
          </div>
        </div>
      </div>

      {/* third section */}
      <div className="w-auto h-auto  pb-11  ">
        <div className="w-[300px] md:w-[1140px]   h-auto mx-auto">
          <h3
            className="text-[2rem] md:text-[3rem] text-center font-semibold"
            style={{ fontFamily: "'manrope', sans-serif" }}
          >
            Here are key components and principles <br/> of animal welfare
          </h3>
          <div className="w-[300px] h-auto mx-auto bg-[#0c051c] rounded-lg shadow-md shadow-violet-600 p-10 md:w-[1140px] mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 bg-[]">
            {/* first card */}
            <div className="w-auto md:w-auto space-y-4 md:space-y-0 md:flex gap-5 h-auto mx-auto">
              <div className="md:flex-1 ">
                <img
                  src="https://petstayadvisor.com.au/uploads/media/dog-cat-healthy.jpg"
                  alt=""
                  className="w-[200px] h-[200px]  md:w-[200px] md:h-[200px] mx-auto border-2 border-black rounded-lg"
                />
              </div>
              <div className="md:flex-1 space-y-6 md:space-y-0 ">
                <h2 className="text-[1.2rem] font-semibold text-white">
                ✅ Physical Health
                </h2>
                <hr />
                <p className="text-white text-justify">
                  {" "}
                  Animal welfare involves providing animals with appropriate
                  nutrition, clean water, and access to veterinary care to
                  maintain their physical health. This includes regular
                  check-ups, vaccinations, and prompt treatment of illnesses or
                  injuries.
                </p>
              </div>
            </div>

            {/* second card */}

            <div className="w-auto md:w-auto space-y-4 md:space-y-0 md:flex gap-5 h-auto mx-auto">
              <div className="md:flex-1">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSahoxIFwmtKmyjgrEAaWgq-INB-4one_PU_ZE4KqNGemU-9pDSUXgIR2n0JWi85Tdu45o&usqp=CAU"
                  alt=""
                  className="w-[200px] h-[200px] md:w-[200px] md:h-[200px] mx-auto border-2 border-black rounded-lg "
                />
              </div>
              <div className="md:flex-1 space-y-6 md:space-y-0">
                <h2 className="text-[1.2rem] font-semibold text-white">
                ✅ Behavioral Well-being
                </h2>
                <hr />
                <p className="text-white text-justify">
                  {" "}
                  Animals have natural behaviors and instincts that should be
                  accommodated and respected. Providing enrichment activities,
                  such as toys, puzzles, and social interactions, helps prevent
                  boredom and promotes mental stimulation and emotional
                  well-being.
                </p>
              </div>
            </div>

            {/* third card */}

            <div className="w-auto md:w-auto space-y-4 md:space-y-0 md:flex gap-5 h-auto mx-auto">
              <div className="md:flex-1">
                <img
                  src="https://lh7-us.googleusercontent.com/fDYNhA7IKOh2j9vWBn_DUMhUdGyCHxYsq55D8ST-O-DalZUtTCCQWxYyjiM1VP67k-8vXxw3ITWV_yZdUHetlYYbyOrANtKpgF8HDA3cu_ZleW6z2v5kymrqRTB3CeTSyu5wLDeFEHVmSZGyzGmUNwo"
                  alt=""
                  className="w-[200px] h-[200px] md:w-[200px] md:h-[200px] mx-auto border-2 border-black rounded-lg "
                />
              </div>
              <div className="md:flex-1 space-y-6 md:space-y-0">
                <h2 className="text-[1.2rem] font-semibold text-white">
                ✅  Housing and Environment
                </h2>
                <hr />
                <p className="text-white text-justify">
                  {" "}
                  Animals should be housed in environments that meet their
                  specific needs, considering factors such as space,
                  temperature, ventilation, and cleanliness. Whether in
                  captivity or in the wild, suitable habitats should be provided
                  to ensure the comfort and safety of animals.
                </p>
              </div>
            </div>

            {/* fourth card */}

            <div className="w-auto md:w-auto space-y-4 md:space-y-0 md:flex gap-5 h-auto mx-auto">
              <div className="md:flex-1">
                <img
                  src="https://imgb.srgcdn.com/421d191c-94ae-4285-a352-ec52fa31be88.jpg"
                  alt=""
                  className="w-[200px] h-[200px] md:w-[200px] md:h-[200px] mx-auto border-2 border-black rounded-lg "
                />
              </div>
              <div className="md:flex-1 space-y-6 md:space-y-0">
                <h2 className="text-[1.2rem] font-semibold text-white">
                ✅  Freedom from Pain and Distress
                </h2>
                <hr />
                <p className="text-white text-justify">
                  {" "}
                  Animal welfare advocates for the prevention and alleviation of
                  physical and psychological suffering. This includes avoiding
                  unnecessary pain, injury, or distress, such as through humane
                  handling, euthanasia when necessary, and the use of pain
                  management techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
