import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddUser() {

  let navigate=useNavigate()

  const [user,setUser]=useState({
    name:"",
    username:"",
    email:""
  })

  const {name,username,email}=user

  const onInputChange=(e)=>{
    setValue(e.target.value);
    setError('');
    setUser({...user,[e.target.name]:e.target.value})
  }

  const onSubmit=async(e)=>{
    e.preventDefault();
    if(!value.trim()){
      setError('Enter the Value !');
    }
    else{
      await axios.post("http://localhost:8080/user",user)
      navigate("/")
    }
    
  }

  const [value, setValue] = useState ('');
  const [error, setError] = useState ('');

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  //   setError('');
  // };

  // const handleSubmit = (e) =>{
  //   e.preventDefault();
  //   if(!value.trim()){
  //     setError('Enter the Value !');
  //   }
  // };

  return (
    <div className='container'>
      <div className="row ">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className='text-center m-4'>Register a user</h2>
          <form action="" onSubmit={(e)=>onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className='form-label'>
                Name
              </label>
              <input type={"text"} className="form-control" placeholder='Enter your name' name='name' value={name} onChange={(e)=>onInputChange(e)} required/>
            </div>
            <div className="mb-3">
              <label htmlFor="Userame" className='form-label'>
                Userame
              </label>
              <input type={"text"} className="form-control" placeholder='Enter your username' name='username' value={username} onChange={(e)=>onInputChange(e)}required/>
            </div><div className="mb-3">
              <label htmlFor="EmailAddress" className='form-label'>
                Email Address
              </label>
              <input type={"text"} className="form-control" placeholder='Enter your email address' name='email' value={email} onChange={(e)=>onInputChange(e)}required/>
            </div>
            <button className="btn btn-outline-primary" type='submit'>Submit</button>
            <a href="/" className="btn btn-outline-danger mx-2" type='submit'>Cancel</a>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      </div>
    </div>
  )
}
