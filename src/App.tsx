import { useState } from 'react'

import Wraper from './component/Wraper';
import Layout from './component/Layot';
import Company from './component/Company';
import Choice from './component/Choices';
import Value from './component/Valueofstate';
function App() {
 

  return (
    <Layout>
     
        <Wraper/>
        <Company/>
        <Choice/>
        <Value/>
      
    </Layout>
  )
}

export default App
