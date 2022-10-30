import React,{useState} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

const Register = (props) => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  
  const handleChange = (e) => {
    if(e.target.name === 'name'){
      setName(e.target.value)
    }else if(e.target.name === 'email'){
      setEmail(e.target.value)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      name,
      email
    }
    console.log('formData',formData)
     axios.post('http://localhost:3060/api/users/register',formData)
          .then((response) => {
            const result = response.data 
            if(result.hasOwnProperty('errors')){
              alert(result.message)
            }else{
              alert('Successfully created an account')
              props.history.push('/dashboard')
            }
          })
          .catch((err) => {
            alert(err.message)
          })
        
  }
  return (
    <div className='row'>
      <h1>Register with us</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label><br />
        <input type="text" placeholder='enter your name' name="name" value={name} onChange={handleChange} />
        <br />
        <label>Email</label><br />
        <input type="text" placeholder='enter your email' name="email" value={email} onChange={handleChange} />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Register