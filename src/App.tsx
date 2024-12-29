import { useRef, useState } from 'react'

import Wraper from './component/Wraper';
import Layout from './component/Layuot';
import Company from './component/Company';
import Choice from './component/Residencie';
import Value from './component/Valueofstate';
import Contact from './component/Contact';
import Summary from './component/Getstart';
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
     <Layout>
      
        <div className='p-12 flex flex-col gap-12'>
          <Company />
          <Choice />
          <Value />
          <Contact />
          <Summary />
          <Footer/>
        </div>
    </Layout>
   
  )
}

export default App
