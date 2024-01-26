import { IoCloseCircle } from "react-icons/io5";
type Props = {
  openModal: any
}
const ModalVideo = ({openModal}: Props) => {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-55 flex justify-center items-center">
    <div className="lg:w-1/2 md:w-1/2 w-full bg-white lg:h-[400px] md:h-[400px] h-[250px] rounded-lg relative">
  <IoCloseCircle 
  onClick={openModal}
  className="text-3xl text-red-500 absolute 
  -top-3
  right-0
  lg:-top-5 
  md:-top-5
  md:-right-5
  lg:-right-5 z-10 cursor-pointer"/>
      <div className="flex justify-center items-center rounded-lg overflow-hidden h-full absolute bottom-0 top-0 left-0 right-0 ">
      <video
      controls
    className="h-full w-full object-cover"
  >
    <source src="/video/triviaproject.mp4" type="video/mp4" />
  </video>

      </div>

    </div>
    
  </div>
  )
}

export default ModalVideo