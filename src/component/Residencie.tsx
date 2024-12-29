import React, { useRef, useState } from "react";

import { getAllData } from "../api";
import PopulaRchoice from "./Popularchoice";


const Residencie =()=>{
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const {data,isLoading,isError}=getAllData();
    
    if (isLoading) return <div>Loading</div>;
    if (isError) return <div>Erorr Fetching Data!</div>
    
   
    const itemWidth =300;
    const scrollLeft = () => {
        if(scrollContainerRef.current){
            scrollContainerRef.current.scrollBy({
                left:-itemWidth,
                behavior:"smooth",
            })
        }
        
    };

    const scrollRight = () => {
        if(scrollContainerRef.current){
            scrollContainerRef.current.scrollBy({
                left:itemWidth,
                behavior:"smooth",
            })
        }
    };


    
    return(
        <div className="flex flex-col  gap-6 pt-14 " id="residencies">
            <div className="font-semibold flex justify-between">
                <div>
                    <span className="text-pureorange text-2xl">Best Choices</span>
                    <h2 className="text-primary  text-4xl"> Popular Residencies</h2>
                </div>
                <div className="flex gap-2">
                    
                    <button className="w-8 h-8 bg-buttoncolor rounded" onClick={scrollLeft}> &lt;</button>
  
 
                    <button className="w-8 h-8 rounded shadow-md" onClick={scrollRight} > &gt; </button>
                </div>
            </div>
        
            <div ref={scrollContainerRef} className="flex  gap-8 overflow-hidden w-full  ">
                
                
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
    )

}
export default Residencie;