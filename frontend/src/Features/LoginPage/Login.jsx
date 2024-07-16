import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { baseURL } from '../..';
import { useUserUpdate } from '../../UserContext';


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const setUser = useUserUpdate();

    const handleSubmit = (x) => {
        x.preventDefault()
        axios.post(`${baseURL}/verification/login`, {email, password})
        .then(y => {
            console.log(y)
            if(y.data.Success === "Success") {
                setUser(y.data._id)
                navigate('/profile-page')
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <div className = "d-flex justify-content-center align-items-center bg-secondary vh-100" style={{backgroundColor: '#313338'}}>
            <div className = "bg-white p-3 rounded w-25">
                <h2>Login </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                        type="email"
                        placeholder="Enter Email"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-0"
                        onChange={(x) => setEmail(x.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                        type="password"
                        placeholder="Enter Password"
                        name="password"
                        className="form-control rounded-0"
                        onChange={(x) => setPassword(x.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-info w-100 rounded-0">
                        Submit
                    </button>
                    </form>
                    <Link to="/forgot-password">Forgot Password?</Link>
                    <Link to="/register" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                        Sign Up
                    </Link>
            </div>
        </div>
    );

}


export default Login;