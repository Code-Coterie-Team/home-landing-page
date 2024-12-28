import React from "react";

interface ButtonProps{
    text:string;
}

const  Button: React.FC<ButtonProps> = ({text})=>{
    return(
        <button  className="   bg-gradiant-to-r from-0% bg-firstblue to-100% bg-secondblue  w-24 h-10 
                    rounded-md  transform transition-transform duration-300 hover:scale-110 text-white ">{text}</button>
                    
    )
}
export default Button;