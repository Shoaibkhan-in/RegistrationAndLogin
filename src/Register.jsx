import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Register = () => {
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:3001/register", {name, email, password})
        .then((result)=>{
            console.log(result);
            navigate("/login")
        })
        .catch(err=>console.log(err));
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className="bg-white p-3 rounded w-25">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name">
                        <strong>Name</strong>
                    </label>
                    <input type="text" name="name" id="name" placeholder='Enter the Name' autoComplete='off' className='form-control rounded-0' onChange={(e)=>{setname(e.target.value)}} />
                </div>
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
                        Register
                    </button>
            </form>
            <div>
                <p>Already Have An Account</p>
                <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                Login</Link>
            </div>
        </div>
        </div>
    )
}

export default Register
