import React, { useDebugValue, useState } from "react"
import { useEffect } from "react"
interface DataProps{
    count:number,
    subject:string,
}
const Data : React.FC<DataProps>=({count,subject})=>{
    const [counter,setCounter]=useState(count);
    useEffect(()=>{
      if(count=== 8800 && counter< 9000){

        
        const timer=setTimeout(()=>{
            setCounter((prevcount)=>prevcount+1);
        },10);
        return () => clearTimeout(timer);
        }
        else if(count===1900  && counter< 2000){
            const timer=setTimeout(()=>{
                setCounter((prevcount)=>prevcount+1)
            },10)
            return ()=>clearTimeout(timer)
        }else if(count===25 && counter<28) {
            const timer=setTimeout(()=>{
                setCounter((prevcount)=>prevcount+1)
            },10)
            return ()=>clearTimeout(timer)
        }
    
    },[counter])
    return(
       <div className="flex flex-col gap-1 pt-10">
        <div className="flex gap-8 w-full justify-center">
            <span className="text-white  text-4xl">{counter}</span>
            <img src="./src/assets/plus.svg" alt="" />
        </div>
        <div className="w-full">
            <span className="text-fontcolor ">{subject}</span>
        </div>
       </div>
    )
}
export default Data;