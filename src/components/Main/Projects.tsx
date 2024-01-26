import { MdArrowOutward } from "react-icons/md";

type Props = {
  dataProjects: any;
  index: number;
  openModal: any;
};

const Projects = ({ dataProjects, index, openModal}: Props) => {
  return (
    <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center lg:justify-start md:justify-start lg:items-start  text-white cursor-pointer hover:bg-[] rounded-md py-5 gap-2">
      <div className="lg:w-[30%] md:w-[30%] p-1 lg:ps-4">
        <img
          className="rounded-md lg:h-[70px] w-full object-cover"
          src={`project/${index}.png`}
          alt="topd"
        />
      </div>
      <div className="lg:w-[70%] md:w-[70%]">
        <div className="flex justify-start gap-1 pr-3 items-end">
          {
            index === 1 ? (
              <p onClick={openModal} className="text-md font-bold">{dataProjects.title}</p>
            ):
          <a href={dataProjects.link} target="_blank" rel="noopener noreferrer">
            <p className="text-md font-bold">{dataProjects.title}</p>
          </a>
          }
          <MdArrowOutward className="text-md " />
        </div>
        <p className="text-xs text-gray-300">{dataProjects.date}</p>
        {index === 1 ? (
          <p className="text-xs">{dataProjects.desc}
          <a href=" https://www.linkedin.com/in/arre-pangestu/" className="text-blue-400" target="_blank"> Aree</a>
          <a href= "https://www.linkedin.com/in/rahmat-kurniawan10" className="text-blue-400" target="_blank"> Rahmat</a>
          <a href="https://www.linkedin.com/in/agungprayogipurba" className="text-blue-400 me-1" target="_blank"> Agung</a>
          as a backend developer
          </p>
        ) : (
          <p className="text-xs">{dataProjects.desc}</p>
        )}

        <div className="flex justify-start gap-2 flex-wrap mt-4">
          {dataProjects.tech.map((item: any, index: number) => {
            return (
              <p
                key={index}
                className="text-sm bg-slate-500 rounded-xl py-1 px-2 capitalize"
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
