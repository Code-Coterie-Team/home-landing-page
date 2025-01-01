

const Footer=()=>{
     return(
        <div className=" grid grid-cols-1 align-middle  md:grid-cols-2 md:gap-40  pt-10">
               <div className="flex flex-col gap-4 md:place-content-start">
                    <div className="flex justify-center md:justify-start"><img src="./src/assets/logo2.png" alt="" /></div>
                    <p className="text-fontcolor text-center md:text-left">Our vision is to make all people <br />
                    the best place to live for them.</p>
     
               </div>
               <div className="flex flex-col d:content-start gap-4 md: justify-self-end ">
                    <div className=" flex flex-col  ">
                    <p className="text-fontblucolor text-4xl  font-semibold">Information</p>
                    <span className="text-fontcolor">145 New York, FL 5467, USA</span>
                    </div>
                    <div className="text-fontblucolor flex font-semibold gap-4 ">
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