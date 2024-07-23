import React, {useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { baseURL } from '../..';

function Homepage() {
    const navigate = useNavigate()

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

=======
import React, {useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { baseURL } from '../..';

function Homepage() {
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${baseURL}/verification/home`)
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

>>>>>>> c4d0709518351f34f6ffceff05e07bc36fb15308
export default Homepage