import { useEffect, useState } from "react";
import Button from "./Button";
import Data from "./Data";



const Wraper=()=>{
    const [style,setStyle]=useState({
        transform:"translateY(70%)",
        transition:"transform 1s ease-in-out"
        
    })
    const[imageStyle,setImageStyle]=useState({
        transform:"translateX(70%)",
        transition:"transform 1s ease-in-out "
    })
    useEffect(() =>{
        const timer=setTimeout(() => {
            setStyle({ transform: "translateY(0%)", transition: "transform 1s ease-in-out"})
            setImageStyle({ transform: "translateX(0%)", transition:"transform 1s ease-in-out"})
        }, 10)
        return () => clearTimeout(timer)
        
    
},[])
    return(
    <div className=" bg-wrapercolor p-20 w-full  h-2/6 grid grid-cols-1  md:grid-cols-2  gap-28 z-10  relative">
        <div className="flex flex-col gap-16 relative  ">
            
                <h1 className="text-white text-6xl font-semibold   " style={style}>Discover <br />Most Suitable <br />Property</h1>
                <div className=" size-14 rounded-full bg-pureorange -top-4 left-60 absolute  -z-10 "></div>
                <div className="pt-10">
                    <span className="text-fontcolor">
                    Find a variety of properties that suit you very <br /> easilty
                    Forget all difficulties in finding a residence for you
                    </span>
                </div>
                
                <div className=" w-full  bg-white  flex justify-between rounded  border-2 border-gray-400 p-2 ">
                    <img src="./src/assets/map.svg" alt="" className="fill-blue-500" />
                    <input className="  w-full " type="text" />
                    <Button text="Search"/>
                </div>
                <div className="flex  gap-4">
                    <Data count={8900} subject="Premium Product"/>
                    <Data count={1900} subject="Happy Customer"/>
                    <Data count={25} subject="Awards Winning"/>
                </div>

            
        </div>
        <div className=" h-full rounded-t-full border-8 border-stone-700 " style={imageStyle}>
            <img src="./src/assets/hero-image.png" className="w-full h-full rounded-t-full " alt="" />
        </div>
    </div>
    )
}

export default Wraper;