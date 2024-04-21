import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Food from './components/Food';
import Easy  from './components/Easy';

import { useState } from 'react';

function App() {

  const [isCartVisible,setIsCartVisible] = useState(false)

  const toggleCartVisibility =() =>{
    setIsCartVisible(prev => !prev)
  }
  return (
    <div>
      <Navbar  toggleCartVisibility={toggleCartVisibility}/>
      <Hero />
      <Food isCartVisible={isCartVisible}/>
      <Easy/>

    </div>
  );
}

export default App;

