import React from "react";
import Button from "./Button";

interface IHeaderProps{
  onNavigateResidencies:()=>void,
  onNavigateOurValue:()=>void,
  onNavigateContactUs:()=> void,
  onNavigateGetStart:()=>void,
}


const Header:React.FC<IHeaderProps>=({onNavigateResidencies,onNavigateContactUs,onNavigateGetStart,onNavigateOurValue})=>{
    return(
        <div className="  bg-wrapercolor flex  justify-between w-full  content-center  p-4  sticky top-0 z-40">
            <div className="flex justify-center h-12 pb-4  "><img src="./src/assets/logo.png" alt="" /></div>
            <div className=" flex  ">
                
                <ul className=" bg-white rounded flex flex-col gap-4 text-xl text-black p-6 md:flex md:flex-row md:text-white md:bg-transparent md:p-2">
                    <li><a href="#residencies" onClick={(e) => { e.preventDefault(); onNavigateResidencies(); }} > Residencies</a></li>
                    <li><a href="#value" onClick={(e) => { e.preventDefault(); onNavigateOurValue(); }}>Our Value</a></li>
                    <li><a href="#contact-us" onClick={(e) => { e.preventDefault(); onNavigateContactUs(); }}>Contact Us</a></li>
                    <li><a href="#get-started" onClick={(e) => { e.preventDefault(); onNavigateGetStart(); }}>Get Started</a></li>
                    <li className=""><Button text="Contact" /></li>
                </ul>
                <div className="md:hidden"><img src="./src/assets/outline.svg" alt="" /></div>
                
                
                
                
            </div>
        </div>
    )
}

export default Header;