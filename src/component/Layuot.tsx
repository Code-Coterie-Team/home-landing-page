import Header from "./Header"
import Wraper from "./Wraper";

const Layout=( props:any)=>{
    return(

        <div> 
            <div className="  relative" >
                <div className="size-80  rounded-3xl absolute blur-3xl bg-bgblur z-50"></div>
                <Header />
                <Wraper />

            </div>
            {props.children}
        </div>
    )
}
export default Layout;