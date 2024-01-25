import Navbar from "../components/Navbar";
import finger from "../assets/finger-svgrepo-com.svg";
import location from "../assets/location-svgrepo-com.svg";
import imageEmail from "../assets/email-inbox-letter-svgrepo-com.svg";

const ContatLayout = () => {
    const email = "dianpayno2023@gmail.com"
    const  handleEmailClick = () => {
      window.location.href = `mailto:${email}`
    }
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center mt-20 p-20">
        <p className="text-blue-500 text-xl uppercase font-bold">Contact</p>
        <div className="flex gap-3">
          <p className="text-xl font-bold">Don't be Shy, Hit Me Up!</p>
          <img
            style={{ width: "30px", height: "30px" }}
            src={finger}
            alt="finger"
          />
        </div>

        <div className="flex gap-10 lg:flex-row md:flex-row flex-col">
          <div className=" gap-1 items-center justify-center lg:flex-row md:flex-row flex flex-col">
            <div className="bg-white shadow-lg rounded-full p-2 w-[50px] h-[50px] ">
              <img
                style={{ width: "30px", height: "30px" }}
                src={location}
                alt="location"
              />
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-sm">Location</p>
              <p className="font-medium text-sm text-blue-500">
                Depok, Indonesia
              </p>
            </div>
          </div>

          <div className="flex lg:flex-row md:flex-row flex-col gap-1 items-center justify-center">
            <div className="bg-white shadow-lg rounded-full p-2 w-[50px] h-[50px]">
              <img
                style={{ width: "30px", height: "30px" }}
                src={imageEmail}
                alt="location"
              />
            </div>
            <div 
            
            onClick={handleEmailClick}
            className="flex flex-col cursor-pointer">
              <p className="font-bold text-sm">Email</p>
              <p className="font-medium text-sm text-blue-500">
                dianpayno2023@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="bg-black fixed bottom-0 left-0 right-0 h-24 hidden lg:flex md:flex lg:p-10 md:p-10 p-3">
            <p className="text-white font-bold lg:text-lg md:text-lg">Copyright © 2024. All rights are reserved</p>
        </div>
      </div>
    </div>
  );
};

export default ContatLayout;
