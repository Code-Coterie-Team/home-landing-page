import Button from "./Button";
import Data from "./Data";


const Wraper=()=>{
    return(
    <div className="h-2/6   bg-wrapercolor p-24 w-full  grid grid-cols-1  md:grid-cols-2  gap-28 z-10  relative">
        <div className="flex flex-col gap-28 relative ">
            
                <h1 className="text-white text-6xl font-semibold ">Discover <br />Most Suitable <br />Property</h1>
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr  bg-lightorange
                from-0% to-100% left-64 absolute  -z-10 "></div>
                <div className="pt-10">
                    <span className="text-fontcolor">
                    Find a variety of properties that suit you very <br /> easilty
                    Forget all difficulties in finding a residence for you
                    </span>
                </div>
                
                <div className=" w-full  bg-white  flex justify-between rounded  border-2 border-gray-400 p-2 ">
                    <img src="./src/assets/map.svg" alt="" className="fill-blue-500" />
                    <input className=" border-none " type="text" />
                    <Button text="Search"/>
                </div>
                <div className="flex  gap-4">
                    <Data count={9000} subject="Premium Product"/>
                    <Data count={2000} subject="Happy Customer"/>
                    <Data count={28} subject="Awards Winning"/>
                </div>

            
        </div>
        <div className="  rounded-t-full border-8 border-stone-700 ">
            <img src="./src/assets/hero-image.png" className="w-full h-full rounded-t-full " alt="" />
        </div>
    </div>
    )
}

export default Wraper;