import React, {useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { baseURL } from '../../..';

function Homepage() {
    const navigate = useNavigate()
    axios.defaults.withCredentials = true

    useEffect(() => {
        axios.get(`${baseURL}/home`)
        .then(y => {console.log(y)
            if (y.data !== "Success") {
                // navigate("/login")
            } 
        })
        .catch(err => console.log(err))
    }, [])

    return(
        <h2>Hello homepage here</h2>
    )
}

export default Homepage