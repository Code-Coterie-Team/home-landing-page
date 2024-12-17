import React, { useDebugValue } from "react"

interface DataProps{
    count:number,
    subject:string,
}
const Data : React.FC<DataProps>=({count,subject})=>{
    return(
       <div className="flex flex-col gap-1 pt-10">
        <div className="flex gap-8 w-full justify-center">
            <span className="text-white  text-2xl">{count}</span>
            <img src="./src/assets/plus.svg" alt="" />
        </div>
        <div className="w-full">
            <span className="text-fontcolor ">{subject}</span>
        </div>
       </div>
    )
}
export default Data;