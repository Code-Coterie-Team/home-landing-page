import { useRef, useState } from 'react'

import Wraper from './component/Wraper';
import Layout from './component/Layuot';
import Company from './component/Company';
import Choice from './component/Choices';
import Value from './component/Valueofstate';
import Contact from './component/Contact';
import Summary from './component/Summary';
import Footer from './component/Footer';
import Header from './component/Header';
function App() {

  const residenceRef=useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const valuRef = useRef<HTMLDivElement>(null);
  const getstartRef = useRef<HTMLDivElement>(null);
  const handelRoute = (ref: React.RefObject<HTMLDivElement>, hash: string) => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth"
      });
      window.location.hash = hash;
    }
  }
  return (
     <>
      <div className="  relative" >
        <div className="size-80  rounded-3xl absolute blur-3xl bg-bgblur z-50"></div>
        <Header onNavigateContactUs={() => handelRoute(contactRef, "#contact-us")} onNavigateGetStart={() => handelRoute(getstartRef, '#get-start')}
          onNavigateOurValue={() => handelRoute(valuRef, '#value')} onNavigateResidencies={() => handelRoute(residenceRef, "#residencies")} />
        <Wraper />

      </div>
        <div className='p-12 flex flex-col gap-12'>
        
          
        <Company />
        <div ref={residenceRef}><Choice /></div>
        <div ref={valuRef}><Value /></div>
        <div ref={contactRef}><Contact /></div>
        <div ref={getstartRef}><Summary /></div>
          <Footer/>
        </div>
    </>
   
  )
}

export default App
