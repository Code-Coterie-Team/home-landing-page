import { Chart, Remove, Tick } from "../icon";
import OptionOfValue from "./Optionvlaue";


const Value=()=>{

    return(
        <div className=" grid grid-cols-1 gap-4 md:grid-cols-2  md:gap-40" id="value">
            <div className="border-8 border-gray-300  rounded-t-full    ">
                <img src="./value.png" alt=""  className="w-full h-full rounded-t-full"/>
            </div>
            <div className="flex flex-col gap-6   ">
                <span className="text-pureorange text-2xl font-extrabold  ">Our Value</span>
                <p className="text-fontblucolor text-4xl font-extrabold  ">Value We Give to You</p>
                <p className="text-gray-500 ">We always ready to help by providijng the best services for you . <br />
                    We beleive a good blace to live can make your life better
                </p>
                <OptionOfValue title="Best interest rates on the market" item={<Tick/>} description="
                        Exercitation in fugiat est ut ad ea cupidatat ut
                        in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
                 " />
                <OptionOfValue title="Prevent unstable prices" item={<Remove/>} description="Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat
                ut occaecat consequat 
                est minim minim esse tempor laborum consequat 
                esse adipisicing eu reprehenderit enim."/>
                <OptionOfValue title="Best price on the market" item={<Chart />}  description="Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut 
                occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim."/>
            </div>

        </div>
    )
}

export default Value;