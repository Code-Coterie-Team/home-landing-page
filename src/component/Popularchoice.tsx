

const PopulaRchoice=(props:any)=>{
    
    
    return(
        <div className="flex flex-col font-semibold rounded-md gap-4 transform transition-transform
           duration-300 hover:scale-110 hover:bg-lightblue">
            <div><img src={`./public/state ${props.image}`} alt="" className=" rounded-lg"/></div>
            <span className="text-pureorange"> $ {props.price}</span>
            <span className="text-primary ">{props.name}</span>
            <p className="text-fontcolor"> {props.adress}</p>
        </div>
    )
}

export default PopulaRchoice;