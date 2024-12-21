import OptionOfValue from "./Optionvlaue";


const Value=()=>{

    return(
        <div className="flex gap-36 pt-14 ">
            <div className="border-8 border-gray-300 rounded-t-full h-[35rem] w-2/5 ">
                <img src="./src/assets/value.png" alt=""  className="w-full h-full rounded-t-full"/>
            </div>
            <div className="flex flex-col gap-6 h-[35rem]  w-2/4">
                <span className="text-pureorange text-2xl font-extrabold  ">Our Value</span>
                <p className="text-fontblucolor text-4xl font-extrabold  ">Value We Give to You</p>
                <p className="text-gray-500 ">We always ready to help by providijng the best services for you . <br />
                    We beleive a good blace to live can make your life better
                </p>
                <OptionOfValue title="Best interest rates on the market" description="
                        Exercitation in fugiat est ut ad ea cupidatat ut
                        in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.
                 " />
                <OptionOfValue title="Prevent unstable prices" description="Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat
                ut occaecat consequat 
                est minim minim esse tempor laborum consequat 
                esse adipisicing eu reprehenderit enim."/>
                <OptionOfValue title="Best price on the market" description="Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut 
                occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim."/>
            </div>

        </div>
    )
}

export default Value;