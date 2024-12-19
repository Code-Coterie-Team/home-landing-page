import OptionOfValue from "./Optionvlaue";


const Value=()=>{

    return(
        <div className="flex gap-14 p-16">
            <div className="border-8 border-b-zinc-400 rounded-t-full h-2/3 w-2/4 ">
                <img src="./src/assets/value.png" alt=""  className="w-full h-1/2 rounded-t-full"/>
            </div>
            <div className="flex flex-col gap-8">
                <span className="text-pureorange">Our Value</span>
                <p className="text-fontblucolor font-extrabold text-4xl">Value We Give to You</p>
                <p className="text-gray-500">We always ready to help by providijng the best services for you . <br />
                    We beleive a good blace to live can make your life better
                </p>
                <OptionOfValue/>
            </div>

        </div>
    )
}

export default Value;