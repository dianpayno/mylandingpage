import GambarCover from "../assets/asset1.jpeg";
import Navbar from "../components/Navbar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";

const AboutMe = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Navbar />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        className="w-full flex lg:flex-row md:flex-row flex-col p-10 gap-10 justify-center items-center"
      >
        <div className="lg:w-1/2 md:w-1/2 w-full p-10">
          <Carousel
            responsive={responsive}
            draggable={false}
            showDots={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
          >
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://img.freepik.com/free-photo/high-angle-shot-beautiful-forest-with-lot-green-trees-enveloped-fog-new-zealand_181624-19717.jpg?w=900&t=st=1705733994~exp=1705734594~hmac=1e151b1c1d24f2fa3cd2c25cc31806cf32f8e61578ea59e1f6a94c931bb677dc"
              alt="GambarCover"
            />
            <img
              className="w-full h-full object-cover rounded-lg"
              src={GambarCover}
              alt="GambarCover"
            />
          </Carousel>
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full flex flex-col lg:p-6 md:p6 ">
          <p className="uppercase font-bold text-blue-500 text-center">
            about me
          </p>
          <p className="text-gray-600 mt-2">
            My name is Dian, I'm a Frontend Developer. My passion is to create,
            develop a clean and responsive web design
          </p>

          <p className="text-gray-600 my-2">
            My main stack currently is React Js in combination with Tailwind CSS
            and TypeScript. I also can create and develop mobile apps with React
            Native
          </p>

          <p className="text-gray-600 mb-2">
            I've learned about backend development lately, such as Node Js,
            Express Js.
          </p>

          <p className="text-gray-600 pb-10">
            As a develover I like to challenge myself to learn lots of new things,
            and I think that's a good thing because our values ​​and knowledge
            will continue to grow
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
