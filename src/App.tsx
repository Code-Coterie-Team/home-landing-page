import { useRef, useState } from 'react'

import Wraper from './component/Wraper';
import Layout from './component/Layuot';
import Company from './component/Company';
import Choice from './component/Residencie';
import Value from './component/Valueofstate';
import Contact from './component/Contact';
import Summary from './component/Getstart';
import Footer from './component/Footer';

function App() {

 
  return (
     <Layout>
      
        
          <Company />
          <Choice />
          <Value />
          <Contact />
          <Summary />
          <Footer/>
        
    </Layout>
   
  )
}

export default App
