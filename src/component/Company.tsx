
const Company=()=>{
    return(
        <div className=" flex flex-col flex-wrap content-center gap-4  md:flex md:justify-around  md:content-around  md:gap-4  md:h-32 md:pt-10 ">
            <div className="h-14 w-1/2  md:h-full md:w-1/6 "><img src="./src/assets/prologis.png"  className="w-full h-full" alt="" /></div>
            <div className="h-14 w-1/2 md:h-full md:w-1/5"><img src="./src/assets/realty.png"  className="w-full h-full" alt="" /></div>
            <div className="h-14 w-1/2 md:h-full md:w-1/5"><img src="./src/assets/tower.png"  className="w-full h-full" alt="" /></div>
            <div className="h-14 w-1/2 md:h-full md:w-1/5"><img src="./src/assets/equinix.png"  className="w-full h-full"alt="" /></div>
        </div>
    )
}
export default Company;