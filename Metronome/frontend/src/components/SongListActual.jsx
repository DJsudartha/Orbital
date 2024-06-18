import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import DeleteSong from '../pages/DeleteSong';

const SongListActual = () => {

    // the song list from the backend
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1234/metronome')
            .then((response) => {
                setSongs(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className='overflow-auto'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>BPM</th>
                        <th>Time Signature</th>
                        <th />
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {
                        songs.map((song) => (
                            <tr key={song._id}>
                                <td>{song.Title}</td>
                                <td>{song.Artist}</td>
                                <td>{song.Tempo}</td>
                                <td>{song.TimeSignature}</td>
                                <td>
                                    <i className='bi bi-check2-square' />
                                </td>
                                <td>
                                    <Link to={`/metronome/songList/editSong/${song._id}`}>
                                        <i className="bi bi-pencil-square" />
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/metronome/songList/deleteSong/${song._id}`}>
                                        <i className="bi bi-trash3-fill" />
                                    </Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default SongListActual