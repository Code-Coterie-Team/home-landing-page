

const Footer=()=>{
     return(
        <div className="flex justify-between pt-10">
            <div className="felx flex-col gap-4">
                <img src="./src/assets/logo2.png" alt="" />
                <p className="text-fontcolor">Our vision is to make all people <br />
                    the best place to live for them.</p>
                
            </div>
            <div className="flex flex-col gap-4">
                <div>
                     <p className="text-fontblucolor text-4xl font-semibold">Information</p>
                     <span className="text-fontcolor">145 New York, FL 5467, USA</span>
                </div>
                 <div className="text-fontblucolor flex  font-semibold gap-4">
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