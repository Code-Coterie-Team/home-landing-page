
const Company=()=>{
    return(
        <div className=" flex flex-col flex-wrap content-center gap-4  md:flex md:justify-around  md:content-around  md:gap-4  md:h-32 md:pt-10 ">
            <div className="h-14 w-1/2  md:h-full md:w-1/6 "><img src="/prologis.png"  className="w-full h-full" alt="" /></div>
            <div className="h-14 w-1/2 md:h-full md:w-1/5"><img src="/realty.png"  className="w-full h-full" alt="" /></div>
            <div className="h-14 w-1/2 md:h-full md:w-1/5"><img src="/tower.png"  className="w-full h-full" alt="" /></div>
            <div className="h-14 w-1/2 md:h-full md:w-1/5"><img src="/equinix.png"  className="w-full h-full"alt="" /></div>
        </div>
    )
}
export default Company;