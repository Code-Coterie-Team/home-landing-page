import React, { useState } from "react"

interface DataProps{
    title:string;
    description:string;
    onclick?:React.MouseEventHandler<HTMLDivElement>;

}

const OptionOfValue :React.FC<DataProps>=({title,description,onclick})=>{
    const [showDescription,setShowDesciption]=useState(false);
    return(
        <div className=" border rounded w-full flex flex-col gap-4  p-4 " onClick={onclick ?? (() => setShowDesciption(!showDescription))}>
            <div className="flex  justify-between w-full">
                <img src="./src/assets/tick.svg" />
                <p className="text-fontblucolor text-xl font-semibold">{title}</p>
                <img src="./src/assets/folder.svg" alt="" />
            </div>
            <p className="text-fontcolor p-4 ">{ showDescription && description}</p>
        
        </div>
    )
}
export default OptionOfValue