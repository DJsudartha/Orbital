import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { baseURL } from '../..'
import { MDBCardImage } from 'mdb-react-ui-kit'
import profilePictures from '../../../public/ProfilePicture'

function ProfileMaker() {
    const [username, setUsername] = useState("")
    const [description, setDescription] = useState("")
    const [avatar, setAvatar] = useState("")
    const navigate = useNavigate()
    const { id } = useParams();
    console.log(id);

    const handleSubmit = (x) => {
        x.preventDefault()
        axios.post(`${baseURL}/verification/profile-maker/${id}`, { username, description, avatar })
            .then(y => {
                console.log(y)
                navigate(`/profile-page/${id}`)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-dark vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2 className='text-dark'> Profile Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username">
                            <strong>Username</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Username"
                            autoComplete="off"
                            name="username"
                            className="form-control rounded-0"
                            onChange={(x) => setUsername(x.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description">
                            <strong>Description</strong>
                        </label>
                        <input
                            type="username"
                            placeholder="Enter Description"
                            autoComplete="off"
                            name="username"
                            className="form-control rounded-0"
                            onChange={(x) => setDescription(x.target.value)}
                        />
                    </div>
                    <div className="dropdown mb-3" style={{ marginBottom: "20px" }}>
                        <label htmlFor="profilePicture">
                            <strong>Profile Picture</strong>
                        </label>
                        <select
                            name="avatar"
                            className="form-control rounded-0"
                            onChange={(x) => setAvatar(x.target.value)}
                        >
                            <option value="default">Default</option>
                            <option value="picture1">Male 1</option>
                            <option value="picture2">Male 2</option>
                            <option value="picture3">Male 3</option>
                            <option value="picture4">Female 1</option>
                            <option value="picture5">Female 2</option>
                            <option value="picture6">Female 3</option>
                        </select>
                    </div>
                    <MDBCardImage
                        src={profilePictures[avatar]}
                        className="img-fluid rounded-circle"
                        style={{ width: "100%", height: "auto", marginBottom: "10px" }}
                    />
                    <button
                        type="submit"
                        className="btn w-100 rounded-0"
                        style={{ backgroundColor: '#17a2b8', color: 'white' }}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ProfileMaker;