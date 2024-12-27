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
        <div className=" h-[15%] bg-wrapercolor flex  justify-between w-full  content-center  p-6  sticky top-0 z-40">
            <div className="flex justify-center h-12 pb-4  "><img src="./src/assets/logo.png" alt="" /></div>
            <div className=" flex gap-2 md:gap-6 text-white justify-center pb-4  ">
                
                <a href="#residencies" onClick={(e)=>{e.preventDefault();onNavigateResidencies();}} > Residencies</a>
                <a href="#value" onClick={(e)=>{e.preventDefault();onNavigateOurValue();}}>Our Value</a>
                <a href="#contact-us" onClick={(e) => { e.preventDefault(); onNavigateContactUs(); }}>Contact Us</a>
                <a href="#get-started" onClick={(e) => { e.preventDefault(); onNavigateGetStart(); }}>Get Started</a>
                <Button  text="Contact"/>
            </div>
        </div>
    )
}

export default Header;