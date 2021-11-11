import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './Components/Main'

class Routers extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element= { <Main /> } />
          {/* <Route path="/omdb-api" element= { <Main /> } /> */}
        </Routes>      
      </BrowserRouter>
    )
  }
}

export default Routers