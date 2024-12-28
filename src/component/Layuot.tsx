import Header from "./Header"
import Wraper from "./Wraper";
import { useRef } from "react";
const Layout=( props:any)=>{
     
   
    return(

        <div> 
            
            {props.children}
        </div>
    )
}
export default Layout;