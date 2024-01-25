import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiChakraui } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

import { MdEmail } from "react-icons/md";


type Props = {
  active?:number,
  setActive?:any
  setScroll?:any
}

const MainContent = ({active, setActive, setScroll}:Props) => {

  const email = "dianpayno2023@gmail.com";
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleClick = (index:number) => {
    setActive(index);
    if (active === 0) {
      setScroll(0);
    } else if (active === 1) {
      setScroll(200);
    }
  }
  return (
    <div className="lg:fixed md:fixed top-0 left-32 lg:mt-20 md:mt-20 bottom-0 flex flex-col text-white justify-center ">
      <p className="lg:text-4xl md:text-4xl text-2xl font-bold capitalize lg:text-left md:text-left text-center">
        Dian Herdiana
      </p>
      <p className="lg:text-lg md:text-lg text-lg font-semibold mt-3 capitalize lg:text-left md:text-left text-center">
        Front-end React & React Native Developer
      </p>
      <span className="lg:text-md md:text-md text-sm text-center lg:mt-7 md:mt-7 lg:p-0 md:p-0 p-5 text-gray-300">
        I build clean and responsive design both web
      </span>
      <span className="lg:text-md md:text-md text-sm text-center text-gray-300 mb-7">and mobile Apps</span>
      <div>
        {["about me", "projects"].map((item: any, index: number) => {
          const isActive = index === active;
          return (
            <div
              onClick={()=>handleClick(index)}
              key={index}
              className="flex my-7 justify-start items-center gap-2 cursor-pointer"
            >
              <div
                className={`h-[2px] ${
                  isActive ? "w-[9%] bg-white" : "w-[5%] bg-gray-500"
                } rounded-xl `}
              ></div>
              <span className="text-sm font-semibold capitalize">{item}</span>
            </div>
          );
        })}
      </div>
      <div className="lg:p-0 md:p-0 px-5 flex lg:justify-start md:justify-start justify-center items-center gap-3">
        <Link to="https://github.com/dianpayno">
          <FaGithub className="text-xl hover:scale-125" />
        </Link>
        <MdEmail
          onClick={handleEmailClick}
          className="text-xl cursor-pointer hover:scale-125"
        />
        <a href="https://www.linkedin.com/in/dianherdiana/">
        
        < FaLinkedin className="text-xl hover:scale-125" />
        </a>
      </div>
      <div className="w-full flex lg:flex-row md:flex-row flex-col justify-start my-10 items-center">
        <div>
          <p className="text-sm font-semibold text-slate-500 me-2">
            Tech Stack |
          </p>
        </div>

        <div className="flex justify-center m-2">
          <div className="flex justify-center items-center gap-1">
            <FaHtml5 className="text-xl text-orange-600 hover:scale-110" />
            <FaCss3Alt className="text-xl text-blue-500 hover:scale-110" />
          </div>
          <div className="flex justify-center items-center gap-1 ms-3">
            <BiLogoJavascript className="text-xl text-yellow-500 rounded hover:scale-110" />
            <BiLogoTypescript className="text-xl text-blue-500 hover:scale-110" />
          </div>
          <div className="flex justify-center items-center gap-1 ms-3">
            <FaReact className="text-xl text-blue-400 hover:scale-110 " />
          </div>
          <div className="flex justify-center items-center gap-1 ms-3">
            <BiLogoTailwindCss className="text-xl text-blue-400 hover:scale-110" />
            <SiChakraui className="text-xl text-teal-500 hover:scale-110 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
