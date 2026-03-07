import React from "react";
import Home from "./Home";
import About from "./About";
import Features from "./Features";
import Contact from "./Contact";

const Navbar = () =>{
  return(
    <div className="p-3 flex justify-between items-center pl-15 pr-15 text-l sticky top-0 backdrop-blur-md bg-white/70 border-b border-grey-200 rounded-b-2xl">
      <div>
        <img src="/images/logo.png" className="w-[70px]"/>
      </div>
      <div className="flex gap-15">
        <a href="#home" className="underline decoration-green-600 underline-offset-3" >Home</a>
        <a href="#about" className="underline decoration-green-600  underline-offset-3">About Us</a>
        <a href="#features" className="underline decoration-green-600  underline-offset-3" >Features</a>
        <a href="#contact" className="underline decoration-green-600  underline-offset-3" >Contact Us</a>
      </div>
      <div className="flex gap-5">
        <button className="p-2 px-5 font-bold shadow-xl rounded-4xl bg-green-600 text-white">Sign In</button>
      </div>
    </div>
  )
}

export default Navbar