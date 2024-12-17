import Button from "./Button";



const Header=()=>{
    return(
        <div className="h-16 bg-stone-700 flex justify-between  p-6  sticky top-0 z-50">
            <div className="flex justify-center h-12 pb-4  "><img src="./src/assets/logo.png" alt="" /></div>
            <div className=" flex gap-6 text-white justify-center pb-4  ">
                    <a href="" > Residencies</a>
                    <a href="">Our Value</a>
                    <a href="">Contact Us</a>
                    <a href="">Get Started</a>
                    <Button text="Contact"/>
            </div>
        </div>
    )
}

export default Header;