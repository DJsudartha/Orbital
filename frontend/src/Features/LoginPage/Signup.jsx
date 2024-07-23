import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { baseURL } from '../..'

function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (x) => {
        x.preventDefault()
        axios.post(`${baseURL}/verification/register`, {name, email, password})
        .then(y => {console.log(y)
        navigate("/login")
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2 className="text-dark">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="text-white">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0 bg-white"
                            onChange={(x) => setName(x.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="white">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0 bg-white"
                            onChange={(x) => setEmail(x.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="white">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="password"
                            className="form-control rounded-0 bg-white"
                            onChange={(x) => setPassword(x.target.value)}
                        />
                    </div>
                    <button
                    type="submit"
                    className="btn w-100 rounded-0"
                    style={{ backgroundColor: '#17a2b8', color: 'white' }}>
                    Register
                    </button>
                </form>
                <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none mt-2">
                    Login
                </Link>
            </div>
        </div>
    );
    
}

export default Signup;