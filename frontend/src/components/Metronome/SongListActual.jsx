import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { baseURL } from '../../index';
import WholePageSpinner from '../Utility/WholePageSpinner';
import { useUser } from '../../UserContext';

const SongListActual = () => {
    const [isLoading, setLoading] = useState(false);

    // find songs only belonging to this user
    const User_id = useUser();

    // the song list from the backend
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        setLoading(true)
        axios.get(`${baseURL}/metronome`, { // this might not work
            params: {
                User_id: User_id
            }
        })
            .then((response) => {
                setSongs(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='container h-100 d-flex justify-content-center'>
            {isLoading ? (
                <div style={{position:'absolute', top:'50%'}}>
                    <WholePageSpinner />
                </div>
            ) : (
                <table className='table--custom'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Artist</th>
                            <th>BPM</th>
                            <th>Measure</th>
                            <th />
                            <th />
                            <th />
                        </tr >
                    </thead >
                    <tbody>
                        {
                            songs.map((song) => (
                                <tr key={song._id}>
                                    <td>{song.Title}</td>
                                    <td>{song.Artist}</td>
                                    <td>{song.Tempo}</td>
                                    <td>{song.TimeSignature}</td>
                                    <td>
                                        <Link to="/metronome" state={{
                                            Title: song.Title,
                                            Artist: song.Artist,
                                            Tempo: song.Tempo,
                                            TimeSignature: song.TimeSignature
                                        }}>
                                            <i className='bi bi-check2-square' />
                                        </Link>
                                    </td>
                                    <td>
                                        <Link
                                            to={`/metronome/songList/editSong/${song._id}`}>
                                            <i className="bi bi-pencil-square" />
                                        </Link>
                                    </td>
                                    <td>
                                        <Link
                                            to={`/metronome/songList/deleteSong/${song._id}`}>
                                            <i className="bi bi-trash3-fill" />
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table >
            )}
        </div >
    )
}

export default SongListActual