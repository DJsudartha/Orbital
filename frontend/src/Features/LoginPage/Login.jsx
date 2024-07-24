import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { baseURL } from '../..';
import { useUser, useUserUpdate } from '../../UserContext';


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const setUser = useUserUpdate();
    const user = useUser();

    const handleSubmit = (x) => {
        x.preventDefault()
        axios.post(`${baseURL}/verification/login`, {email, password})
        .then(y => {
            console.log(y.data._id)
            if(y.data.Success === "Success") {
                setUser(y.data._id)
                navigate(`/profile-maker/${y.data._id}`)
            }
        })
        .catch(err => console.log(err))

        console.log("user: " + user);
    }
    return (
        <div className = "d-flex justify-content-center align-items-center bg-dark vh-100">
            <div className = "bg-white p-3 rounded w-25">
                <h2 className='text-dark'>Login </h2>
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
                    <button
                    type="submit"
                    className="btn w-100 rounded-0"
                    style={{ backgroundColor: '#17a2b8', color: 'white' }}>
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