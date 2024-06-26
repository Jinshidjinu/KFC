import { useState, useEffect } from "react";
import { BsStarHalf, BsStarFill, BsCart } from "react-icons/bs";
import { products } from "../Product.js";

const Food = ({ isCartVisible }) => {
  // Retrieve cart items from localStorage or set default values
  const [cartItems, setCartItems] = useState(() => {
    const storedItems = localStorage.getItem('products');
    return storedItems ? JSON.parse(storedItems) : {};
  });

  // Update localStorage when cartItems change
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (id) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [id]: (prevCartItems[id] || 0) + 1
    }));
  };

  const removeFromCart = (id) => {
    setCartItems((prevCartItems) => ({
      ...prevCartItems,
      [id]: 0
    }));
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        const itemInfo = products.find(product => product.id === Number(key));
        totalAmount += Math.floor(cartItems[key] * itemInfo.price);
      }
    }
    return totalAmount;
  };

  return (
    <div className="my-12 max-w-[1600px] place-items-center lg:mx-auto flex flex-col gap-12" id="food">
      {isCartVisible && (
        <div className={'z-10 fixed p-4 right-0 top-[80px] bg-cyan-900 text-white w-96 h-screen overflow-y-scroll'}>
          <p className="text-2xl font-bold">Your Order: ${getTotalAmount()}</p>
          {products.map(product => {
            if (cartItems[product.id] !== 0) {
              return (
                <div key={product.id} className="glass my-3 grid grid-cols-5 overflow-hidden">
                  <img className="rounded-lg w-[100px] h-[100px] object-cover col-span-2 " src={product.productImage} alt="img" />
                  <div>
                    <p className="text-xl font-bold pl-2">{cartItems[product.id]} x</p>
                    <p className="product-details flex items-center space-x-4 italic">{product.productName}</p>
                    <p>${product.price}</p>
                  </div>
                  <div className="absolute right-0 bottom-0 gap-2 font-bold">
                    <button onClick={() => removeFromCart(product.id)} className="text-red-600 font-semibold bg-white-500 hover:bg-red-600 hover:text-red-100 p-2 rounded">Remove</button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}

      <h2 className="text-3xl p-4 w-full text-start">Food 🍗🍔🍖🥩 </h2>
      <div className="grid lg:grid-cols-4 place-items-center gap-6">
        {products.map(product => (
          <div key={product.id} className="w-[380px] p-5 bg-white rounded-lg glass transition-all duration-200 hover:scale-110">
            <img className="rounded-lg w-[400px] h-[220px] object-cover" src={product.productImage} alt="" />
            <div className="flex flex-row justify-between items-center mt-5 gap-3">
              <h2 className="font-semibold text-xl">{product.productName}</h2>
              <div className="flex">
                <BsStarFill className="text-brightColor" />
                <BsStarFill className="text-brightColor" />
                <BsStarFill className="text-brightColor" />
                <BsStarFill className="text-brightColor" />
                <BsStarHalf className="text-brightColor" />
              </div>
              <h3 className="font-semibold text-lg">${product.price}</h3>
              <button onClick={() => { addToCart(product.id) }} className="p-3 text-2xl w-11 rounded-xl bg-orange-400 hover:bg-orange-800"><BsCart className="mx-auto" /></button>
              {cartItems[product.id] > 0 && <div className="absolute flex items-center justify-center top-5 left-5 bg-green-600 font-bold rounded-lg h-12 w-12 ">{cartItems[product.id]}</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
