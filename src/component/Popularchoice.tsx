

const PopulaRchoice=(props:any)=>{
    

    return(
        <div className="flex flex-col font-semibold gap-4">
            <div><img src={props.image} alt="" className=" rounded-lg"/></div>
            <span className="text-pureorange"> $ {props.price}</span>
            <span className="text-primary ">{props.name}</span>
            <p className="text-fontcolor"> {props.adress}</p>
        </div>
    )
}

export default PopulaRchoice;