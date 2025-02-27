import Header from "./Header"
import Wraper from "./Wraper";
import { ReactNode, useEffect} from "react";
import { useLocation } from "react-router";


const Layout=(props:{children:ReactNode})=>{
    const location=useLocation()
    useEffect(() => {
        const hash = location.hash;
        
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior:'smooth' });
            }
        }
    }, [location]);

    return(
        
        <div> 
            <div className="  relative" >
                <div className="size-80  rounded-3xl absolute blur-3xl bg-bgblur z-50"></div>
                <Header/>
                <Wraper />

            </div>
            <div className='p-12 flex flex-col gap-12'>{props.children}</div>
            
        </div>
    )
}
export default Layout;