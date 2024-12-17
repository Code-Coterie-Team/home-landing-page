import Header from "./Header"


const Layout=( props:any)=>{
    return(
        <div className=" relative">
            <Header/>
            {props.children}
        </div>
    )
}
export default Layout;