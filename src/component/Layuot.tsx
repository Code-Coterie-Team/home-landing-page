import Header from "./Header"
import Wraper from "./Wraper";
import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";


const Layout=( props:any)=>{
    const location=useLocation()
    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
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
            {props.children}
        </div>
    )
}
export default Layout;