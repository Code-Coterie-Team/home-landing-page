import ContactWay from "./Contatway"


const Contact=()=>{
    return(
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-20">
            <div className="flex flex-col gap-4">
                <p className="text-pureorange text-xl font-semibold">Our Contact Us</p>
                <p className="text-fontblucolor text-4xl font-semibold">Easy to contact us</p>
                <span className="text-fontcolor text-base">We always ready to help by providijng the best services for you. <br />
                 We beleive a good blace to live can make your life better</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
                    <ContactWay item="./src/assets/phone.svg" name='Call'/>
                    <ContactWay item ="./src/assets/chat.svg" name='Chat' />
                    <ContactWay item="./src/assets/chat.svg" name='Video Call' />
                    <ContactWay item="./src/assets/message.svg" name='Message' />
                </div>
            </div>
            <div className="h-[32rem] rounded-t-full"><img src="./src/assets/contact.jpg" alt="" className="h-full w-full rounded-t-full" /></div>
        </div>
    )
}

export default Contact