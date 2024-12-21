import ContactWay from "./Contatway"


const Contact=()=>{
    return(
        <div className="flex gap-32 pt-20">
            <div className="flex flex-col gap-4">
                <p className="text-pureorange text-xl font-semibold">Our Contact Us</p>
                <p className="text-fontblucolor text-4xl font-semibold">Easy to contact us</p>
                <span className="text-fontcolor text-base">We always ready to help by providijng the best services for you. <br />
                 We beleive a good blace to live can make your life better</span>
                <div className="grid grid-cols-2 gap-4" >
                    <ContactWay/>
                    <ContactWay />
                    <ContactWay />
                    <ContactWay />
                </div>
            </div>
            <div className="h-[32rem] w-2/5 rounded-t-full"><img src="./src/assets/contact.jpg" alt="" className="h-full w-full rounded-t-full" /></div>
        </div>
    )
}

export default Contact