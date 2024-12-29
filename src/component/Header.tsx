import React from "react";
import Button from "./Button";

// interface IHeaderProps{
//   onNavigateResidencies:()=>void,
//   onNavigateOurValue:()=>void,
//   onNavigateContactUs:()=> void,
//   onNavigateGetStart:()=>void,
// }


const Header:React.FC<any>=()=>{
    return(
        <div className="  bg-wrapercolor flex  justify-between w-full  content-center  p-4  sticky top-0 z-40">
            <div className="flex justify-center h-12 pb-4  "><img src="./src/assets/logo.png" alt="" /></div>
            <div className=" flex  ">
                
                <ul className=" bg-white rounded flex absolute top-8  right-12 flex-col gap-8 text-l  text-black p-10 md:flex md:flex-row md:text-white md:gap-10 md:bg-transparent md:p-2">
                    <li><a href="#residencies"  > Residencies</a></li>
                    <li><a href="#value" >Our Value</a></li>
                    <li><a href="#contact-us" >Contact Us</a></li>
                    <li><a href="#get-started" >Get Started</a></li>
                    <li className=""><Button text="Contact" /></li>
                </ul>
                <div className="md:hidden"><img src="./src/assets/outline.svg" alt="" /></div>
                
                
                
                
            </div>
        </div>
    )
}

export default Header;