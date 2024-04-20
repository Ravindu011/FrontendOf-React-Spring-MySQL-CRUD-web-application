import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {

  let navigate=useNavigate()
  const {id}=useParams()

  const [user,setUser]=useState({
    name:"",
    username:"",
    email:""
  })

  const {name,username,email}=user

  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  useEffect(()=>{
    loadUser()
  }, []);

  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`,user)
    navigate("/")
  }

  const loadUser =async()=>{
    const result=await axios.get(`http://localhost:8080/user/${id}`)
    setUser(result.data)
  }

  return (
    <div className='container'>
      <div className="row ">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className='text-center m-4'>Edit a user</h2>
          <form action="" onSubmit={(e)=>onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className='form-label'>
                Name
              </label>
              <input type={"text"} className="form-control" placeholder='Enter your name' name='name' value={name} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="Userame" className='form-label'>
                Userame
              </label>
              <input type={"text"} className="form-control" placeholder='Enter your username' name='username' value={username} onChange={(e)=>onInputChange(e)}/>
            </div><div className="mb-3">
              <label htmlFor="EmailAddress" className='form-label'>
                Email Address
              </label>
              <input type={"text"} className="form-control" placeholder='Enter your email address' name='email' value={email} onChange={(e)=>onInputChange(e)}/>
            </div>
            <button className="btn btn-outline-primary" type='submit'>Submit</button>
            <a href="/" className="btn btn-outline-danger mx-2" type='submit'>Cancel</a>
          </form>
        </div>
      </div>
    </div>
  )
}
