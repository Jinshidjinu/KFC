
// import location from '../assets/productphotos/marker-icon-2x.png'
import Location from '../assets/productphotos/red_location.jpg'
import Buffet from '../assets/productphotos/Food_buffet.jpeg'
import Time from '../assets/productphotos/free-time-1855956-1574162.png'
const Easy = () =>{

return(
 
    <div className="flex flex-col py-8 sm:h-[500px]">
        <h1 className="mx-auto text-5xl p-8">Get Your Food</h1>
        <div className="flex flex-col sm:flex-row justify-around">
         
         <div className="w-[300px] glass flex flex-col justify-between p-5 mx-auto sm:my-0">
          
          <img className="w-[70px] mx-auto" src={Location} ></img>
          <p className="mx-auto">1.Find Your Address </p>

         </div>
         <div className="w-[300px] glass flex flex-col justify-between p-5 mx-auto sm:my-0">
          
          <img className="w-[70px] mx-auto" src={Buffet} ></img>
          <p className="mx-auto">2.Choose Your Food </p>

         </div>
         <div className="w-[300px] glass flex flex-col justify-between p-5 mx-auto sm:my-0">
          
          <img className="w-[70px] mx-auto" src={Time} ></img>
          <p className="mx-auto">3.Wait 20-30 Minutes </p>

         </div>
   

        </div>
    </div>

)

}


export default Easy