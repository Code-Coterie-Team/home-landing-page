import { useState } from 'react'

import Wraper from './component/Wraper';
import Layout from './component/Layot';
import Company from './component/Company';
import Choice from './component/Choices';

function App() {
 

  return (
    <Layout>
     
        <Wraper/>
        <Company/>
        <Choice/>
      
    </Layout>
  )
}

export default App
