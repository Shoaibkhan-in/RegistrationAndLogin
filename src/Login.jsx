import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'


const Login = () => {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:3001/login", {email, password})
        .then((result)=>{
            console.log(result);
            if(result.data=== "Success"){
            navigate("/Home")
            }
        })
        .catch(err=>console.log(err));
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className="bg-white p-3 rounded w-25">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name">
                        <strong>Email</strong>
                    </label>
                    <input type="email" name="email" id="email" placeholder='Enter the Email' autoComplete='off' className='form-control rounded-0' onChange={(e)=>{setemail(e.target.value)}} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">
                        <strong>Password</strong>
                    </label>
                    <input type="password" name="password" id="password" placeholder='Enter the password' autoComplete='off' className='form-control rounded-0' onChange={(e)=>{setpassword(e.target.value)}} />
                </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button>
            </form>
            <div>
                <p>Dont Have Account Register Here</p>
                <Link to="/register" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                Login</Link>
            </div>
        </div>
        </div>
    )
}

export default Login
