import Button from "./Button";



const Header=()=>{
    return(
        <div className=" h-[15%] bg-wrapercolor flex  justify-between w-full  content-center  p-6  sticky top-0 z-40">
            <div className="flex justify-center h-12 pb-4  "><img src="./src/assets/logo.png" alt="" /></div>
            <div className=" flex gap-2 md:gap-6 text-white justify-center pb-4  ">
                
                    <a href="" > Residencies</a>
                    <a href="">Our Value</a>
                    <a href="">Contact Us</a>
                    <a href="">Get Started</a>
                    <Button  text="Contact"/>
            </div>
        </div>
    )
}

export default Header;