import React from "react";

const Navbar = () =>{
  return(
    <div className="p-3 flex justify-between items-center pl-15 pr-15 text-l">
      <div>
        <img src="/images/logo.png" className="w-[70px]"/>
      </div>
      <div className="flex gap-25">
        <a>Home</a>
        <a>About Us</a>
        <a>Features</a>
        <a>Contact Us</a>
      </div>
      <div className="flex gap-15">
        <a>Login</a>
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar