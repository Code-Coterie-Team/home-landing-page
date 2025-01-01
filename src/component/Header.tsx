import React from "react";
import Button from "./Button";
import { Link } from "react-router";
import { Outline } from "../icon";



const Header=()=>{
    return(
        <div className="  bg-wrapercolor flex  justify-between  content-center  p-4  sticky top-0 z-40">
            <div className="flex justify-center h-12 pb-4  "><img src="./src/assets/logo.png" alt="" /></div>
            <div className=" flex  ">
                
                <ul className=" bg-white rounded flex absolute top-8  right-12 flex-col gap-8 text-l  text-black p-10 md:flex md:flex-row md:text-xl md:text-fontcolor md:gap-10 md:bg-transparent md:p-2">
                    <li><Link to='#residencies' > Residencies</Link></li>
                    <li><Link to="#value" >Our Value</Link></li>
                    <li><Link to="#contact-us" >Contact Us</Link></li>
                    <li><Link to="#get-started" >Get Started</Link></li>
                    <li className=""><Button text="Contact" /></li>
                </ul>
                <Outline className="md:hidden"/>
                
                
                
                
                
            </div>
        </div>
    )
}

export default Header;