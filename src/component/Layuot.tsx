import Header from "./Header"
import Wraper from "./Wraper";
import { useRef } from "react";
const Layout=( props:any)=>{
     const residenceRef=useRef<HTMLDivElement>(null);
      const contactRef = useRef<HTMLDivElement>(null);
      const valuRef = useRef<HTMLDivElement>(null);
      const getstartRef = useRef<HTMLDivElement>(null);
   
    return(

        <div> 
            
            {props.children}
        </div>
    )
}
export default Layout;