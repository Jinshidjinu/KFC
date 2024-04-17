import { useState } from "react"

import { BsStarHalf,BsStarFill,BsCart } from "react-icons/bs"
import { useEffect } from "react"
import { products } from "../Product.js"

const Food = ({isCartVisible}) => {
 
  // Check if there are items in localStorage
  const storedProducts = localStorage.getItem('products');
  const initialCartItems = storedProducts ? JSON.parse(storedProducts) : {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0};

  const [cartItems, setCartItems] = useState(initialCartItems);
  useEffect(()=>{
    localStorage.setItem('products',JSON.stringify(cartItems))
  },[cartItems])
   
  const addToCart =(id) =>{
    setCartItems(cartItems => ({...cartItems,[id]:cartItems[id]+1}))
  }

  const removeFromCart = (id) =>{
   setCartItems(cartItems=>({...cartItems,[id]:0}))

  }

  const getTotalAmount = ()=>{
    let totalAmount = 0
    for(const key in cartItems){
      if (cartItems[key]>0) {
        
        let itemInfo = products.find(product => product.id === Number(key))
        totalAmount += Math.floor(cartItems[key] * itemInfo.price)
      }
    }
    return totalAmount;
  }

  return(

    <div className="my-12 max-w-[1600px] place-items-center lg:mx-auto flex flex-col gap-12" id="food">
     {isCartVisible && (
    <div className="{'z-10 fixed p-4 right-0 top-[80px] bg-primary-color w-96 h-screen overflow-y-scroll'}">
      <p className="text-2xl font-bold ">Your Order:${(getTotalAmount)}</p>
      {products.map(product =>{
        if(cartItems[product.id] !==0){
          return <div key={product.id} className="glass my-3 grid grid-cols-5 overflow-hidden">
                 <img className="rounded-lg w-[100px] h-[100px] object-cover col-span-2 " src={product.productImage} alt="img"></img>

                <div >
                  <p className="text-xl font-bold pl-2">{cartItems[product.id]} x</p>   
                  <p className="product-details flex items-center space-x-4 italic">{product.productName}</p> 
                  <p>${product.price}</p>   
                </div>

                <div className="absolute right-0 bottom-0 gap-2 font-bold">
                
                <button onClick={() => removeFromCart(product.id)} className="text-red-600 bg-red-300 hover:bg-red-600 hover:text-red-100 p-2 rounded">Remove</button>

                </div>
          </div>
        }
      })}
    </div>
     )}

  <h2 className="text-3xl p-4 w-full text-start">Food</h2>
  <div className="grid lg:grid-cols-4 place-items-center gap-6">
    {products.map(product =>(
      <div  key={product.id} className="w-[380px] p-5 bg-white rounded-lg glass transition-all duration-200 hover:scale-110">
         <img  className="rounded-lg w-[400px] h-[220px] object-cover"  src={product.productImage} alt="" />

 

      </div>

    ))}
       
  </div>

 

    </div>
  )
}

export default Food