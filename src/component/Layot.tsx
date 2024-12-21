import Header from "./Header"
import Wraper from "./Wraper";

const Layout=( props:any)=>{
    return(
        <div >
            <Header/>
            <Wraper />
            {props.children}
        </div>
    )
}
export default Layout;