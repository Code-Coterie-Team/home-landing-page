

const PopulaRchoice=(props:any)=>{
    
    
    return(
        <div className="flex flex-col w-72 font-semibold rounded-md gap-4 transform transition-transform
           duration-300 hover:scale-110 hover:bg-lightblue p-6">
            <div><img src={props.image} alt="" className="w-full rounded-lg"/></div>
            <span className="text-pureorange"> $ {props.price}</span>
            <span className="text-primary text-4xl">{props.name}</span>
            <p className="text-fontcolor text-xs font-normal"> {props.adress}</p>
        </div>
    )
}

export default PopulaRchoice;