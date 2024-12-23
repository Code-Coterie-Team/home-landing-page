import React, { useRef, useState } from "react";

import { getAllData } from "../api";
import PopulaRchoice from "./Popularchoice";


const Choice =()=>{
    const {data,isLoading,isError}=getAllData();
    
    if (isLoading) return <div>Loading</div>;
    if (isError) return <div>Erorr Fetching Data!</div>
    const itemsPerPage=4
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const itemWidth =200;
    const scrollLeft = () => {
        if(scrollContainerRef.current){
            scrollContainerRef.current.scrollBy({
                left:-itemWidth* itemsPerPage,
                behavior:"smooth",
            })
        }
        
    };

    const scrollRight = () => {
        if(scrollContainerRef.current){
            scrollContainerRef.current.scrollBy({
                left:itemWidth * itemsPerPage,
                behavior:"smooth",
            })
        }
    };


    
    return(
        <div className="flex flex-col  gap-6 pt-14 ">
            <div className="font-semibold flex justify-between">
                <div>
                    <span className="text-lightorange text-2xl">Best Choices</span>
                    <h2 className="text-primary  text-4xl"> Popular Residencies</h2>
                </div>
                <div className="flex gap-2">
                    
                    <button className="w-8 h-8 bg-buttoncolor rounded" onClick={scrollLeft}> &lt;</button>
  
 
                    <button className="w-8 h-8 rounded shadow-md" onClick={scrollRight} > &gt; </button>
                </div>
            </div>
        
            <div className=" flex w-screen  ustify-center items-center ">
                
                <div ref={scrollContainerRef} className="flex  gap-10 overflow-x-scroll w-11/12  ">
                         { data ?.map((item: any) => (
                            <PopulaRchoice
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            adress={item.adress}
                        />
                        ))}
                    </div>
                
            </div>
        </div>
    )

}
export default Choice;