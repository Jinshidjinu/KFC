
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () =>{

  return(

    <div className="max-w-[1600] mx-auto grid sm:grid-cols-2 sm:h-[500px] gap-4">


        <div className="bg-food-image-2 bg-cover bg-center top-0 w-full flex flex-col justify-center text-center text-white p-4 h-[300px] sm:h-full  ">

        <div className="bg-white rounded-xl w-[350px] md:w-auto flex gap-2  p-2 h-14">
           <form className="border border-gray-300 shadow-xl col-span-7 sm:col-span-8 flex justify-between items-center max-w-[700px] mx-auto w-full p-0 rounded-md text-black bg-gray-100/90">

            <input className="ml-4 bg-transparent focus:outline-none"  type="text"  placeholder="Type your location...." />

            <button className="text-3xl">
                <AiOutlineSearch/>
            </button>
            </form>

          <div className="col-span-3 flex justify-center items-center">
        <button className="relative mx-auto my-auto rounded-lg before:ease h-8 w-20 overflow-hidden border bg-orange-600 text-white">
            <span className="relative z-10">Find Me</span>
        </button>
    </div>
          
        </div>
        </div>
        <div className="rounded-xl bg-food-image bg-center h-[300px] sm:h-full"></div>
    </div>

   
  )

}

export default Hero