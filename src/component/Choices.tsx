import { useState } from "react";
import React from "react";
import { getAllData } from "../api";
import PopulaRchoice from "./Popularchoice";



const Choice=()=>{
    const {data,isLoading,isError}=getAllData();
    const [currentIndex,setCurrentIndex]=useState(0)
    if (isLoading) return <div>Loading</div>;
    if (isError) return <div>Erorr Fetching Data!</div>
    
    const itemPerPage=4 ;
    const numbers = [1, 2, 3]
    
    const handleNext=()=> setCurrentIndex((prev)=> prev+itemPerPage);
    const handelPrevious=()=> setCurrentIndex((prev)=> prev-itemPerPage)
    
    return(
        <div className="flex flex-col  gap-6 p-16 ">
            <div className="font-semibold flex justify-between">
                <div>
                    <span className="text-lightorange text-xl">Best Choices</span>
                    <h2 className="text-primary  text-2xl"> Popular Residencies</h2>
                </div>
                <div className="flex gap-2">
                    
                    <button className="w-8 h-8 bg-buttoncolor rounded" onClick={handelPrevious} > &lt;</button>
                    <button className="w-8 h-8 rounded shadow-md" onClick={handleNext}> &gt; </button>
                </div>
            </div>
        
            <div className="grid  grid-cols-4 gap-14">
                {data?.slice(currentIndex,currentIndex+itemPerPage).map ((item:any,index)=>(
                    <PopulaRchoice 
                    image={Math.floor(Math.random() * numbers.length)}
                    name={item.name}
                    price={item.price}
                    adress={item.adress}
                    />
                ))}
            </div>
        </div>
    )

}
export default Choice;