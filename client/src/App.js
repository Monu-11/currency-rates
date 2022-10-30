import React from 'react'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


const App = () => {
  return (
    <div className='container'>
      <h1>Currency Rates</h1>
      <Navbar/>
    </div>
  )
}

export default App
