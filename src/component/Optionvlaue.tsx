import React, { useRef, useState } from "react"
import { Folder} from "../icon";

interface DataProps{
    title:string;
    description:string;
    item:React.ReactNode;
    onclick?:React.MouseEventHandler<HTMLDivElement>;

}

const OptionOfValue :React.FC<DataProps>=({title,description,item,onclick})=>{
    const [showDescription,setShowDesciption]=useState(false);
    const controlRef=useRef(null);
    const handelClick=()=>{
        if(controlRef.current){
            setShowDesciption(!showDescription)
        }
    }
    return(
        <div  ref={controlRef}  className=" border rounded w-full flex flex-col gap-4  p-4 " onClick={onclick ?? (handelClick)}>
            <div className="flex  justify-between w-full">
                {item}
                <p className="text-fontblucolor text-xl font-semibold">{title}</p>
                <Folder/>
            </div>
            <p className="text-fontcolor p-4 ">{ showDescription && description}</p>
        
        </div>
    )
}
export default OptionOfValue