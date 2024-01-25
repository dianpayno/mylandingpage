import { MdComputer } from "react-icons/md";
import { menu, bottomMenu } from "../../mocks/menubar";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="
      sticky top-0 left-0 right-0
      py-7 lg:px-12 md:px-12 px-7 bg-[#F8F7F3] shadow-lg lg:flex md:flex hidden justify-between">
        <div className="lg:text-2xl md:text-2xl text-xl font-bold flex items-end">
          <p>dian</p>
          <MdComputer />
        </div>
        <div className="lg:flex md:flex hidden justify-center items-center gap-5 font-semibold text-lg ">
          {menu.map((item) => {
            return (
              
              <p className="hover:text-green-500 cursor-pointer" key={item.id}>
                <Link to={item.link}>
                {item.title}
                </Link>
              </p>
            );
          })}
        </div>
      </div>
      <div
        className="
    fixed bottom-0 left-0 right-0 
    py-2 lg:px-12 md:px-12 px-5 bg-[#F8F7F3] shadow-inner lg:hidden md:hidden flex justify-around"
      >
        <div className="flex justify-center items-center gap-10">
          {bottomMenu.map((item: any) => {
            return (
              <div className="flex flex-col justify-center items-center">
                <Link className="flex flex-col justify-center items-center"
                  to={item.link}
                >
                  <p>{item.icon}</p>
                  <p className="text-sm">{item.title}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
