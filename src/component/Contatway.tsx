import  { ReactNode } from "react";

interface ContactProps{
    name:string;
    item :ReactNode
}


const ContactWay=(props:ContactProps)=>{

    return(
        <div className="border flex flex-col gap-2 p-6 rounded transform transition hover:scale-110
            hover:shadow-indigo-400 hover:shadow-sm">
            <div className="flex gap-4">
                {props.item}
                <div className="flex flex-col gap-2">
                    <span className="text-fontblucolor font-bold">{props.name}</span>
                    <span className="text-fontcolor">021 123 145 14</span>
                </div>
            </div>
            <button className=" bg-lightblue w-full font-bold rounded 
            h-3/6 p-2 text-blue-600 hover:bg-blue-600 hover:text-white
             transform transition hover:scale-110">{`${props.name}  now`}</button>
        </div>
    )
}

export default ContactWay