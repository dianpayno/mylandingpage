import MainContent from "../components/Main";
import { motion } from "framer-motion";
import Description from "../components/Main/Description";
import { useEffect, useState } from "react";
import Projects from "../components/Main/Projects";
import { GoProjectSymlink } from "react-icons/go";
import { projects } from "../mocks/menubar";
import { IoCloseCircle } from "react-icons/io5";
import ModalVideo from "../components/ModalVideo/Index";

const HomeLayout = () => {
  const [scroll, setScroll] = useState(200);
  const [active, setActive] = useState(0);
  const[openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
    document.body.style.overflow = 'hidden'; 
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    document.body.style.overflow = '';
  }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY === scroll || window.scrollY > scroll) {
        setActive(1);
      } else if (window.scrollY > 0 && window.scrollY < scroll) {
        setActive(0);
      }

      console.log(window.scrollY);
    });
  }, [scroll, setActive]);

  return (
    <div className="w-full flex lg:flex-row md:flex-row bg-gradient-to-r from-[#09203F] to-[#537895] flex-col p-10 gap-10 justify-center items-center">
      <div className={`lg:w-1/2 md:w-1/2 w-full relative`}>
        <MainContent
          active={active}
          setActive={setActive}
          setScroll={setScroll}
        />
        
      </div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        className="lg:w-1/2 md:w-1/2 w-full flex flex-col justify-center lg:me-20 cursor-default"
      >
        <div className="lg:mt-40 justify-center  flex flex-col relative ">
          <Description />
          
        </div>
        <div className="flex flex-col mt-36">

          <div className="flex justify-start items-center gap-3">
          <p className="text-white font-bold text-left">Projects</p>
          <GoProjectSymlink className="text-white text-xl"/>

          </div>
     {
      projects.map((item:any, index:number)=>{
        return (
        <div key={index}>
          <Projects index={index}  openModal={handleOpenModal} dataProjects={item} />
        </div>
        )
      })
     }
        </div>
      </motion.div>
      {
        openModal && <ModalVideo openModal={handleCloseModal}/>
      }
     
      
    </div>
  );
};

export default HomeLayout;
