import { Chat, Message, Phone } from "../icon"
import ContactWay from "./Contatway"


const Contact=()=>{
    return(
        <div id="contact-us"  className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-40">
            <div className="flex flex-col gap-4">
                <p className="text-pureorange text-xl font-semibold">Our Contact Us</p>
                <p className="text-fontblucolor text-4xl font-semibold">Easy to contact us</p>
                <span className="text-fontcolor text-base">We always ready to help by providijng the best services for you. <br />
                We beleive a good blace to live can make your life better</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >
                    <ContactWay item={<Phone/>} name='Call'/>
                    <ContactWay item ={<Chat/>} name='Chat' />
                    <ContactWay item={<Chat/>} name='Video Call' />
                    <ContactWay item={<Message/>} name='Message' />
                </div>
            </div>
            <div className="h-[32rem] rounded-t-full"><img src="/contact.jpg" alt="" className="h-full w-full rounded-t-full" /></div>
        </div>
    )
}

export default Contact