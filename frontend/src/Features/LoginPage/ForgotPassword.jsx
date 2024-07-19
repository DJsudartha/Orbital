import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { baseURL } from '../..';


function ForgotPassword() {
    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (x) => {
        x.preventDefault()
        axios.post(`${baseURL}/verification/forgot-password`, {email})
        .then(y => {
            console.log(y)
            if(y.data === "Success") {
                navigate('/login')
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <div className = "d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className = "bg-white p-3 rounded w-25">
                <h3>Forgot Password </h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Account Email</strong>
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
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Send Email
                    </button>
                    </form>
            </div>
        </div>
    );

}


export default ForgotPassword;