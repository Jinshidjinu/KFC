import {useState} from "react";
import {AiOutlineClose,AiOutlineMenu, AiOutlineShoppingCart} from 'react-icons/ai'
import kfcLogo from '../assets/Icons/kfcLogo.492728c6.svg'


const Navbar = () => {

    const [nav,setNav]=useState(false)
    const handleNav = ()=>{
      setNav(!nav)

    }
  return (
    <div className="text-black h-[80px] max-w[1600px] mx-auto flex justify-between items-center">
        <img src={kfcLogo} alt="logo"></img>
      <div className="hidden sm:flex gap-3 md:gap">
        <button className="rounded-lg h-8 w-20 border  border-orange-500 bg-orange-700 text-white shadow-2xl">
            Log In
        </button>
         <button className="rounded-lg h8 w-20 border    border-orange-500 bg-orange-700 text-white shadow-2xl">
            Sign Up
         </button>
      </div>

      <a className="p-5 my-auto text-2xl text-orange-700"><AiOutlineShoppingCart/></a>
       <ul className="hidden md:flex">
        <li className="p-5"><a href="#food">Food</a></li>
        <li className="p-5"><a href="#download">Download</a></li>
       </ul>

    <div onClick={handleNav} className="block md:hidden mr-6 z-20">

        {nav? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
    </div>

    <div className={nav ? 'z-10 fixed h-full top-[80px] w-full ease-in-out duration-500':'fixed top-[-100%]'}>
        
        <ul className="p-8 text-2xl w-full bg-orange-600 rounded-lg text-white">
            <li className="p-5"><a href="#food">Food</a></li>
            <li className="p-5"><a href="#download">Download</a></li>
            
            <div className="flex gap-4">
                <button className="rounded-lg h-12 w-28 bg-orange-900 shadow-2xl">
                    <span className="z-10 relative">Log In</span>
                </button>
                <button className="rounded-lg h-12 w-28 bg-orange-900 shadow-2xl">
                    <span className="relative z-10">Sign Up</span>
                </button>
            </div>
        </ul>


     </div>


    </div>
  );
};

export default Navbar