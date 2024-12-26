

const Footer=()=>{
     return(
        <div className=" grid grid-cols-1 md:grid-cols-2 md:justify-between  pt-10">
            <div className="flex flex-col gap-4">
                 <div className="flex justify-center md:justify-start"><img src="./src/assets/logo2.png" alt="" /></div>
                <p className="text-fontcolor text-center md:text-left">Our vision is to make all people <br />
                    the best place to live for them.</p>
                
            </div>
             <div className="flex flex-col  content-center gap-4">
                <div className=" flex flex-col text-center md:justify-start  ">
                     <p className="text-fontblucolor text-4xl  font-semibold">Information</p>
                     <span className="text-fontcolor">145 New York, FL 5467, USA</span>
                </div>
                 <div className="text-fontblucolor flex  font-semibold gap-4  text-left">
                     <span>Property</span>
                     <span>Services</span>
                     <span>Product</span>
                     <span>About Us</span>
                 </div>
            </div>
        </div>
     )
}
export default Footer