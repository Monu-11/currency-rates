import React from 'react'
import {Link,Route} from 'react-router-dom'
import Register from './Register'
import Dashboard from './Dashboard'


const Navbar = (props) => {
  return (
    <div className='md-6'>
       <Link to="/register">Register</Link>

      <Route path="/register" component={Register} exact />
      <Route path="/dashboard" component={Dashboard} exact/>
    </div>
  )
}

export default Navbar
//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