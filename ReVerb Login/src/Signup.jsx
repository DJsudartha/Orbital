import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Signup() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (x) => {
        x.preventDefault()
        axios.post('http://localhost:4000/register', {name, email, password})
        .then(y => {console.log(y)
        navigate('/Login')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className = "d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className = "bg-white p-3 rounded w-25">
                <h2> Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className = "mb-3">
                        <label htmlFor = "name">
                            <strong>Name</strong>
                        </label>
                        <input
                        type="text"
                        placeholder='Enter Name'
                        autoComplete='off'
                        name='email'
                        className='form-control rounded-0'
                        onChange={(x) => setName(x.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>Email</strong>
                        </label>
                        <input
                        type="email"
                        placeholder='Enter Email'
                        autoComplete='off'
                        name='email'
                        className='form-control rounded-0'
                        onChange={(x) => setEmail(x.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'>
                            <strong>Password</strong>
                        </label>
                        <input
                        type="password"
                        placeholder='Enter Password'
                        name='password'
                        className='form-control rounded-0'
                        onChange={(x) => setPassword(x.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>
                        Register
                    </button>
                    </form>
                    <div>Forgot Email?</div>
                    <Link to='/Login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                        Login
                    </Link>
            </div>
        </div>
    );
}

export default Signup;